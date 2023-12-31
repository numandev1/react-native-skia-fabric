"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skHostConfig = exports.debug = void 0;

var _HostComponents = require("./HostComponents");

var _processors = require("./processors");

var _typeddash = require("./typeddash");

/* eslint-disable @typescript-eslint/no-explicit-any */

/*global NodeJS*/
const DEBUG = false;

const debug = function () {
  if (DEBUG) {
    console.log(...arguments);
  }
};

exports.debug = debug;

const appendNode = (parent, child) => {
  parent.addChild(child);
};

const removeNode = (parent, child) => {
  return parent.removeChild(child);
};

const insertBefore = (parent, child, before) => {
  parent.insertChildBefore(child, before);
};

const skHostConfig = {
  /**
   * This function is used by the reconciler in order to calculate current time for prioritising work.
   */
  now: Date.now,
  supportsMutation: true,
  isPrimaryRenderer: false,
  supportsPersistence: false,
  supportsHydration: false,
  //supportsMicrotask: true,
  scheduleTimeout: setTimeout,
  cancelTimeout: clearTimeout,
  noTimeout: -1,

  appendChildToContainer(container, child) {
    debug("appendChildToContainer", container, child);
    appendNode(container.root, child);
  },

  appendChild(parent, child) {
    debug("appendChild", parent, child);
    appendNode(parent, child);
  },

  getRootHostContext: _rootContainerInstance => {
    debug("getRootHostContext");
    return null;
  },

  getChildHostContext(_parentHostContext, _type, _rootContainerInstance) {
    debug("getChildHostContext");
    return null;
  },

  shouldSetTextContent(_type, _props) {
    return false;
  },

  createTextInstance(_text, _rootContainerInstance, _hostContext, _internalInstanceHandle) {
    debug("createTextInstance"); // return SpanNode({}, text) as SkNode;

    throw new Error("Text nodes are not supported yet");
  },

  createInstance(type, pristineProps, container, _hostContext, _internalInstanceHandle) {
    debug("createInstance", type);
    const props = { ...pristineProps
    };
    const node = (0, _HostComponents.createNode)(container, type, materialize(props));
    container.depMgr.subscribeNode(node, props);
    return node;
  },

  appendInitialChild(parentInstance, child) {
    debug("appendInitialChild");
    appendNode(parentInstance, child);
  },

  finalizeInitialChildren(parentInstance, _type, _props, _rootContainerInstance, _hostContext) {
    debug("finalizeInitialChildren", parentInstance);
    return false;
  },

  commitMount() {
    // if finalizeInitialChildren = true
    debug("commitMount");
  },

  prepareForCommit(_containerInfo) {
    debug("prepareForCommit");
    return null;
  },

  resetAfterCommit(container) {
    debug("resetAfterCommit");
    container.redraw();
  },

  getPublicInstance(node) {
    debug("getPublicInstance");
    return node;
  },

  prepareUpdate: (_instance, type, oldProps, newProps, rootContainerInstance, _hostContext) => {
    debug("prepareUpdate");
    const propsAreEqual = (0, _typeddash.shallowEq)(oldProps, newProps);

    if (propsAreEqual) {
      return null;
    }

    debug("update ", type);
    return rootContainerInstance;
  },

  commitUpdate(instance, updatePayload, type, prevProps, nextProps, _internalHandle) {
    debug("commitUpdate: ", type);

    if ((0, _typeddash.shallowEq)(prevProps, nextProps)) {
      return;
    }

    const props = { ...nextProps
    };
    updatePayload.depMgr.unsubscribeNode(instance);
    instance.setProps(materialize(props));
    updatePayload.depMgr.subscribeNode(instance, props);
  },

  commitTextUpdate: (_textInstance, _oldText, _newText) => {//  textInstance.instance = newText;
  },
  clearContainer: container => {
    debug("clearContainer");
    container.root.children().forEach(child => {
      container.root.removeChild(child);
    });
  },
  preparePortalMount: () => {
    debug("preparePortalMount");
  },
  removeChild: (parent, child) => {
    removeNode(parent, child);
  },
  removeChildFromContainer: (container, child) => {
    removeNode(container.root, child);
  },
  insertInContainerBefore: (container, child, before) => {
    insertBefore(container.root, child, before);
  },
  insertBefore: (parent, child, before) => {
    insertBefore(parent, child, before);
  }
};
exports.skHostConfig = skHostConfig;

const materialize = props => {
  const result = { ...props
  };
  (0, _typeddash.mapKeys)(props).forEach(key => {
    const prop = props[key];

    if ((0, _processors.isValue)(prop)) {
      result[key] = prop.current;
    } else if ((0, _processors.isSelector)(prop)) {
      result[key] = prop.selector(prop.value.current);
    }
  });
  return result;
};
//# sourceMappingURL=HostConfig.js.map