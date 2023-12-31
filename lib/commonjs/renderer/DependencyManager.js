"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DependencyManager = void 0;

var _processors = require("./processors");

var _typeddash = require("./typeddash");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DependencyManager {
  constructor(registerValues) {
    _defineProperty(this, "registerValues", void 0);

    _defineProperty(this, "subscriptions", new Map());

    _defineProperty(this, "unregisterDependantValues", null);

    this.registerValues = registerValues;
  }

  unsubscribeNodes(nodes) {
    nodes.forEach(n => this.unsubscribeNode(n));
  }
  /**
   * Call to unsubscribe all value listeners from the given node based
   * on the current list of subscriptions for the node. This function
   * is typically called when the node is unmounted or when one or more
   * properties have changed.
   * @param node Node to unsubscribe value listeners from
   */


  unsubscribeNode(node) {
    const subscriptions = Array.from(this.subscriptions.values()).filter(p => p.nodes.has(node));

    if (subscriptions) {
      subscriptions.forEach(si => {
        // Delete node from subscription
        si.nodes.delete(node); // Remove subscription if there are no listeneres left on the value

        if (si.nodes.size === 0) {
          // There are no more nodes subscribing to this value, we can call
          // unsubscribe on it.
          if (!si.unsubscribe) {
            throw new Error("Failed to unsubscribe to value subscription");
          }

          si.unsubscribe && si.unsubscribe(); // Remove from subscription states as well

          const element = Array.from(this.subscriptions.entries()).find(_ref => {
            let [_, sub] = _ref;
            return sub === si;
          });

          if (!element) {
            throw new Error("Failed to find value subscription");
          }

          if (!this.subscriptions.delete(element[0])) {
            throw new Error("Failed to delete value subscription");
          }
        }
      });
    }
  }
  /**
   * Adds listeners to the provided values so that the node is notified
   * when a value changes. This is done in an optimized way so that this
   * class only needs to listen to the value once and then forwards the
   * change to the node and its listener. This method is typically called
   * when the node is mounted and when one or more props on the node changes.
   * @param node Node to subscribe to value changes for
   * @param props Node's properties
   * @param onResolveProp Callback when a property value changes
   */


  subscribeNode(node, props) {
    // Get mutators from node's properties
    const propSubscriptions = initializePropertySubscriptions(node, props);

    if (propSubscriptions.length === 0) {
      return;
    } // Install all mutators for the node


    propSubscriptions.forEach(ps => {
      // Do we already have a state for this SkiaValue
      let subscriptionState = this.subscriptions.get(ps.value);

      if (!subscriptionState) {
        // Let's create a new subscription state for the skia value
        subscriptionState = {
          nodes: new Map(),
          unsubscribe: null
        }; // Add single subscription to the new value

        subscriptionState.unsubscribe = ps.value.addListener(v => {
          subscriptionState.nodes.forEach(mutators => mutators.forEach(m => m(v)));
        });
        this.subscriptions.set(ps.value, subscriptionState);
      } // subscription mutators


      subscriptionState.nodes.set(node, propSubscriptions.filter(m => m.value === ps.value).map(m => m.mutator));
    });
  }
  /**
   * Called when the hosting container is mounted or updated. This ensures that we have
   * a ref to the underlying SkiaView so that we can registers redraw listeners
   * on values used in the current View automatically.
   */


  update() {
    // Remove any previous registrations
    if (this.unregisterDependantValues) {
      this.unregisterDependantValues();
    } // Register redraw requests on the SkiaView for each unique value


    this.unregisterDependantValues = this.registerValues(Array.from(this.subscriptions.keys()));
  }
  /**
   * Called when the hosting container is unmounted or recreated. This ensures that we remove
   * all subscriptions to Skia values so that we don't have any listeners left after
   * the component is removed.
   */


  remove() {
    // 1) Unregister redraw requests
    if (this.unregisterDependantValues) {
      this.unregisterDependantValues();
      this.unregisterDependantValues = null;
    } // 2) Unregister nodes


    Array.from(this.subscriptions.values()).forEach(si => {
      Array.from(si.nodes.keys()).forEach(node => this.unsubscribeNode(node));
    }); // 3) Clear the rest of the subscriptions

    this.subscriptions.clear();
  }

}

exports.DependencyManager = DependencyManager;

const initializePropertySubscriptions = (node, props) => {
  const nodePropSubscriptions = [];
  (0, _typeddash.mapKeys)(props).forEach(key => {
    if (key === "children") {
      return;
    }

    const propvalue = props[key];

    if ((0, _processors.isValue)(propvalue)) {
      // Subscribe to changes
      nodePropSubscriptions.push({
        value: propvalue,
        mutator: v => {
          node.setProp(key, v);
        }
      }); // Set initial value

      node.setProp(key, propvalue.current);
    } else if ((0, _processors.isSelector)(propvalue)) {
      // Subscribe to changes
      nodePropSubscriptions.push({
        value: propvalue.value,
        mutator: v => {
          node.setProp(key, propvalue.selector(v));
        }
      }); // Set initial value

      node.setProp(key, propvalue.selector(propvalue.value.current));
    } else {
      // Set initial value
      node.setProp(key, propvalue);
    }
  });
  return nodePropSubscriptions;
};
//# sourceMappingURL=DependencyManager.js.map