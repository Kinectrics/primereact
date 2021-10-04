import React, { Component } from 'react';
import { Ripple } from 'primereact/core';

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}

function classNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args) {
    var classes = [];

    for (var i = 0; i < args.length; i++) {
      var className = args[i];
      if (!className) continue;

      var type = _typeof(className);

      if (type === 'string' || type === 'number') {
        classes.push(className);
      } else if (type === 'object') {
        var _classes = Array.isArray(className) ? className : Object.entries(className).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return !!value ? key : null;
        });

        classes = _classes.length ? classes.concat(_classes.filter(function (c) {
          return !!c;
        })) : classes;
      }
    }

    return classes.join(' ');
  }

  return undefined;
}

var lastId = 0;
function UniqueComponentId () {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pr_id_';
  lastId++;
  return "".concat(prefix).concat(lastId);
}

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DomHandler = /*#__PURE__*/function () {
  function DomHandler() {
    _classCallCheck(this, DomHandler);
  }

  _createClass(DomHandler, null, [{
    key: "innerWidth",
    value: function innerWidth(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
      }

      return 0;
    }
  }, {
    key: "width",
    value: function width(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
      }

      return 0;
    }
  }, {
    key: "getWindowScrollTop",
    value: function getWindowScrollTop() {
      var doc = document.documentElement;
      return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }
  }, {
    key: "getWindowScrollLeft",
    value: function getWindowScrollLeft() {
      var doc = document.documentElement;
      return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    }
  }, {
    key: "getOuterWidth",
    value: function getOuterWidth(el, margin) {
      if (el) {
        var width = el.offsetWidth;

        if (margin) {
          var style = getComputedStyle(el);
          width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }

        return width;
      }

      return 0;
    }
  }, {
    key: "getOuterHeight",
    value: function getOuterHeight(el, margin) {
      if (el) {
        var height = el.offsetHeight;

        if (margin) {
          var style = getComputedStyle(el);
          height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }

        return height;
      }

      return 0;
    }
  }, {
    key: "getClientHeight",
    value: function getClientHeight(el, margin) {
      if (el) {
        var height = el.clientHeight;

        if (margin) {
          var style = getComputedStyle(el);
          height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }

        return height;
      }

      return 0;
    }
  }, {
    key: "getViewport",
    value: function getViewport() {
      var win = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          w = win.innerWidth || e.clientWidth || g.clientWidth,
          h = win.innerHeight || e.clientHeight || g.clientHeight;
      return {
        width: w,
        height: h
      };
    }
  }, {
    key: "getOffset",
    value: function getOffset(el) {
      if (el) {
        var rect = el.getBoundingClientRect();
        return {
          top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
          left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
        };
      }

      return {
        top: 'auto',
        left: 'auto'
      };
    }
  }, {
    key: "index",
    value: function index(element) {
      if (element) {
        var children = element.parentNode.childNodes;
        var num = 0;

        for (var i = 0; i < children.length; i++) {
          if (children[i] === element) return num;
          if (children[i].nodeType === 1) num++;
        }
      }

      return -1;
    }
  }, {
    key: "addMultipleClasses",
    value: function addMultipleClasses(element, className) {
      if (element && className) {
        if (element.classList) {
          var styles = className.split(' ');

          for (var i = 0; i < styles.length; i++) {
            element.classList.add(styles[i]);
          }
        } else {
          var _styles = className.split(' ');

          for (var _i = 0; _i < _styles.length; _i++) {
            element.className += ' ' + _styles[_i];
          }
        }
      }
    }
  }, {
    key: "addClass",
    value: function addClass(element, className) {
      if (element && className) {
        if (element.classList) element.classList.add(className);else element.className += ' ' + className;
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, className) {
      if (element && className) {
        if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }
  }, {
    key: "hasClass",
    value: function hasClass(element, className) {
      if (element) {
        if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
      }
    }
  }, {
    key: "find",
    value: function find(element, selector) {
      return element ? Array.from(element.querySelectorAll(selector)) : [];
    }
  }, {
    key: "findSingle",
    value: function findSingle(element, selector) {
      if (element) {
        return element.querySelector(selector);
      }

      return null;
    }
  }, {
    key: "getHeight",
    value: function getHeight(el) {
      if (el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
        return height;
      }

      return 0;
    }
  }, {
    key: "getWidth",
    value: function getWidth(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
        return width;
      }

      return 0;
    }
  }, {
    key: "alignOverlay",
    value: function alignOverlay(overlay, target, appendTo) {
      if (overlay && target) {
        if (appendTo === 'self') {
          this.relativePosition(overlay, target);
        } else {
          overlay.style.minWidth = DomHandler.getOuterWidth(target) + 'px';
          this.absolutePosition(overlay, target);
        }
      }
    }
  }, {
    key: "absolutePosition",
    value: function absolutePosition(element, target) {
      if (element) {
        var elementDimensions = element.offsetParent ? {
          width: element.offsetWidth,
          height: element.offsetHeight
        } : this.getHiddenElementDimensions(element);
        var elementOuterHeight = elementDimensions.height;
        var elementOuterWidth = elementDimensions.width;
        var targetOuterHeight = target.offsetHeight;
        var targetOuterWidth = target.offsetWidth;
        var targetOffset = target.getBoundingClientRect();
        var windowScrollTop = this.getWindowScrollTop();
        var windowScrollLeft = this.getWindowScrollLeft();
        var viewport = this.getViewport();
        var top, left;

        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
          top = targetOffset.top + windowScrollTop - elementOuterHeight;

          if (top < 0) {
            top = windowScrollTop;
          }

          element.style.transformOrigin = 'bottom';
        } else {
          top = targetOuterHeight + targetOffset.top + windowScrollTop;
          element.style.transformOrigin = 'top';
        }

        if (targetOffset.left + targetOuterWidth + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);else left = targetOffset.left + windowScrollLeft;
        element.style.top = top + 'px';
        element.style.left = left + 'px';
      }
    }
  }, {
    key: "relativePosition",
    value: function relativePosition(element, target) {
      if (element) {
        var elementDimensions = element.offsetParent ? {
          width: element.offsetWidth,
          height: element.offsetHeight
        } : this.getHiddenElementDimensions(element);
        var targetHeight = target.offsetHeight;
        var targetOffset = target.getBoundingClientRect();
        var viewport = this.getViewport();
        var top, left;

        if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
          top = -1 * elementDimensions.height;

          if (targetOffset.top + top < 0) {
            top = -1 * targetOffset.top;
          }

          element.style.transformOrigin = 'bottom';
        } else {
          top = targetHeight;
          element.style.transformOrigin = 'top';
        }

        if (elementDimensions.width > viewport.width) {
          // element wider then viewport and cannot fit on screen (align at left side of viewport)
          left = targetOffset.left * -1;
        } else if (targetOffset.left + elementDimensions.width > viewport.width) {
          // element wider then viewport but can be fit on screen (align at right side of viewport)
          left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
        } else {
          // element fits on screen (align with target)
          left = 0;
        }

        element.style.top = top + 'px';
        element.style.left = left + 'px';
      }
    }
  }, {
    key: "flipfitCollision",
    value: function flipfitCollision(element, target) {
      var _this = this;

      var my = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left top';
      var at = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'left bottom';
      var callback = arguments.length > 4 ? arguments[4] : undefined;
      var targetOffset = target.getBoundingClientRect();
      var viewport = this.getViewport();
      var myArr = my.split(' ');
      var atArr = at.split(' ');

      var getPositionValue = function getPositionValue(arr, isOffset) {
        return isOffset ? +arr.substring(arr.search(/(\+|-)/g)) || 0 : arr.substring(0, arr.search(/(\+|-)/g)) || arr;
      };

      var position = {
        my: {
          x: getPositionValue(myArr[0]),
          y: getPositionValue(myArr[1] || myArr[0]),
          offsetX: getPositionValue(myArr[0], true),
          offsetY: getPositionValue(myArr[1] || myArr[0], true)
        },
        at: {
          x: getPositionValue(atArr[0]),
          y: getPositionValue(atArr[1] || atArr[0]),
          offsetX: getPositionValue(atArr[0], true),
          offsetY: getPositionValue(atArr[1] || atArr[0], true)
        }
      };
      var myOffset = {
        left: function left() {
          var totalOffset = position.my.offsetX + position.at.offsetX;
          return totalOffset + targetOffset.left + (position.my.x === 'left' ? 0 : -1 * (position.my.x === 'center' ? _this.getOuterWidth(element) / 2 : _this.getOuterWidth(element)));
        },
        top: function top() {
          var totalOffset = position.my.offsetY + position.at.offsetY;
          return totalOffset + targetOffset.top + (position.my.y === 'top' ? 0 : -1 * (position.my.y === 'center' ? _this.getOuterHeight(element) / 2 : _this.getOuterHeight(element)));
        }
      };
      var alignWithAt = {
        count: {
          x: 0,
          y: 0
        },
        left: function left() {
          var left = myOffset.left();
          var scrollLeft = DomHandler.getWindowScrollLeft();
          element.style.left = left + scrollLeft + 'px';

          if (this.count.x === 2) {
            element.style.left = scrollLeft + 'px';
            this.count.x = 0;
          } else if (left < 0) {
            this.count.x++;
            position.my.x = 'left';
            position.at.x = 'right';
            position.my.offsetX *= -1;
            position.at.offsetX *= -1;
            this.right();
          }
        },
        right: function right() {
          var left = myOffset.left() + DomHandler.getOuterWidth(target);
          var scrollLeft = DomHandler.getWindowScrollLeft();
          element.style.left = left + scrollLeft + 'px';

          if (this.count.x === 2) {
            element.style.left = viewport.width - DomHandler.getOuterWidth(element) + scrollLeft + 'px';
            this.count.x = 0;
          } else if (left + DomHandler.getOuterWidth(element) > viewport.width) {
            this.count.x++;
            position.my.x = 'right';
            position.at.x = 'left';
            position.my.offsetX *= -1;
            position.at.offsetX *= -1;
            this.left();
          }
        },
        top: function top() {
          var top = myOffset.top();
          var scrollTop = DomHandler.getWindowScrollTop();
          element.style.top = top + scrollTop + 'px';

          if (this.count.y === 2) {
            element.style.left = scrollTop + 'px';
            this.count.y = 0;
          } else if (top < 0) {
            this.count.y++;
            position.my.y = 'top';
            position.at.y = 'bottom';
            position.my.offsetY *= -1;
            position.at.offsetY *= -1;
            this.bottom();
          }
        },
        bottom: function bottom() {
          var top = myOffset.top() + DomHandler.getOuterHeight(target);
          var scrollTop = DomHandler.getWindowScrollTop();
          element.style.top = top + scrollTop + 'px';

          if (this.count.y === 2) {
            element.style.left = viewport.height - DomHandler.getOuterHeight(element) + scrollTop + 'px';
            this.count.y = 0;
          } else if (top + DomHandler.getOuterHeight(target) > viewport.height) {
            this.count.y++;
            position.my.y = 'bottom';
            position.at.y = 'top';
            position.my.offsetY *= -1;
            position.at.offsetY *= -1;
            this.top();
          }
        },
        center: function center(axis) {
          if (axis === 'y') {
            var top = myOffset.top() + DomHandler.getOuterHeight(target) / 2;
            element.style.top = top + DomHandler.getWindowScrollTop() + 'px';

            if (top < 0) {
              this.bottom();
            } else if (top + DomHandler.getOuterHeight(target) > viewport.height) {
              this.top();
            }
          } else {
            var left = myOffset.left() + DomHandler.getOuterWidth(target) / 2;
            element.style.left = left + DomHandler.getWindowScrollLeft() + 'px';

            if (left < 0) {
              this.left();
            } else if (left + DomHandler.getOuterWidth(element) > viewport.width) {
              this.right();
            }
          }
        }
      };
      alignWithAt[position.at.x]('x');
      alignWithAt[position.at.y]('y');

      if (this.isFunction(callback)) {
        callback(position);
      }
    }
  }, {
    key: "findCollisionPosition",
    value: function findCollisionPosition(position) {
      if (position) {
        var isAxisY = position === 'top' || position === 'bottom';
        var myXPosition = position === 'left' ? 'right' : 'left';
        var myYPosition = position === 'top' ? 'bottom' : 'top';

        if (isAxisY) {
          return {
            axis: 'y',
            my: "center ".concat(myYPosition),
            at: "center ".concat(position)
          };
        }

        return {
          axis: 'x',
          my: "".concat(myXPosition, " center"),
          at: "".concat(position, " center")
        };
      }
    }
  }, {
    key: "getParents",
    value: function getParents(element) {
      var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return element['parentNode'] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
    }
  }, {
    key: "getScrollableParents",
    value: function getScrollableParents(element) {
      var scrollableParents = [];

      if (element) {
        var parents = this.getParents(element);
        var overflowRegex = /(auto|scroll)/;

        var overflowCheck = function overflowCheck(node) {
          var styleDeclaration = window['getComputedStyle'](node, null);
          return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
        };

        var _iterator = _createForOfIteratorHelper(parents),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var parent = _step.value;
            var scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];

            if (scrollSelectors) {
              var selectors = scrollSelectors.split(',');

              var _iterator2 = _createForOfIteratorHelper(selectors),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var selector = _step2.value;
                  var el = this.findSingle(parent, selector);

                  if (el && overflowCheck(el)) {
                    scrollableParents.push(el);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            if (parent.nodeType !== 9 && overflowCheck(parent)) {
              scrollableParents.push(parent);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return scrollableParents;
    }
  }, {
    key: "getHiddenElementOuterHeight",
    value: function getHiddenElementOuterHeight(element) {
      if (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        var elementHeight = element.offsetHeight;
        element.style.display = '';
        element.style.visibility = '';
        return elementHeight;
      }

      return 0;
    }
  }, {
    key: "getHiddenElementOuterWidth",
    value: function getHiddenElementOuterWidth(element) {
      if (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        var elementWidth = element.offsetWidth;
        element.style.display = '';
        element.style.visibility = '';
        return elementWidth;
      }

      return 0;
    }
  }, {
    key: "getHiddenElementDimensions",
    value: function getHiddenElementDimensions(element) {
      var dimensions = {};

      if (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = '';
        element.style.visibility = '';
      }

      return dimensions;
    }
  }, {
    key: "fadeIn",
    value: function fadeIn(element, duration) {
      if (element) {
        element.style.opacity = 0;
        var last = +new Date();
        var opacity = 0;

        var tick = function tick() {
          opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
          element.style.opacity = opacity;
          last = +new Date();

          if (+opacity < 1) {
            window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
          }
        };

        tick();
      }
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(element, ms) {
      if (element) {
        var opacity = 1,
            interval = 50,
            duration = ms,
            gap = interval / duration;
        var fading = setInterval(function () {
          opacity -= gap;

          if (opacity <= 0) {
            opacity = 0;
            clearInterval(fading);
          }

          element.style.opacity = opacity;
        }, interval);
      }
    }
  }, {
    key: "getUserAgent",
    value: function getUserAgent() {
      return navigator.userAgent;
    }
  }, {
    key: "isIOS",
    value: function isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    }
  }, {
    key: "isAndroid",
    value: function isAndroid() {
      return /(android)/i.test(navigator.userAgent);
    }
  }, {
    key: "isFunction",
    value: function isFunction(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    }
  }, {
    key: "appendChild",
    value: function appendChild(element, target) {
      if (this.isElement(target)) target.appendChild(element);else if (target.el && target.el.nativeElement) target.el.nativeElement.appendChild(element);else throw new Error('Cannot append ' + target + ' to ' + element);
    }
  }, {
    key: "removeChild",
    value: function removeChild(element, target) {
      if (this.isElement(target)) target.removeChild(element);else if (target.el && target.el.nativeElement) target.el.nativeElement.removeChild(element);else throw new Error('Cannot remove ' + element + ' from ' + target);
    }
  }, {
    key: "isElement",
    value: function isElement(obj) {
      return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object" ? obj instanceof HTMLElement : obj && _typeof(obj) === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
    }
  }, {
    key: "scrollInView",
    value: function scrollInView(container, item) {
      var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
      var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
      var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
      var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
      var containerRect = container.getBoundingClientRect();
      var itemRect = item.getBoundingClientRect();
      var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
      var scroll = container.scrollTop;
      var elementHeight = container.clientHeight;
      var itemHeight = this.getOuterHeight(item);

      if (offset < 0) {
        container.scrollTop = scroll + offset;
      } else if (offset + itemHeight > elementHeight) {
        container.scrollTop = scroll + offset - elementHeight + itemHeight;
      }
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (window.getSelection) {
        if (window.getSelection().empty) {
          window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
          window.getSelection().removeAllRanges();
        }
      } else if (document['selection'] && document['selection'].empty) {
        try {
          document['selection'].empty();
        } catch (error) {//ignore IE bug
        }
      }
    }
  }, {
    key: "calculateScrollbarWidth",
    value: function calculateScrollbarWidth(el) {
      if (el) {
        var style = getComputedStyle(el);
        return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
      } else {
        if (this.calculatedScrollbarWidth != null) return this.calculatedScrollbarWidth;
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "p-scrollbar-measure";
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        this.calculatedScrollbarWidth = scrollbarWidth;
        return scrollbarWidth;
      }
    }
  }, {
    key: "getBrowser",
    value: function getBrowser() {
      if (!this.browser) {
        var matched = this.resolveUserAgent();
        this.browser = {};

        if (matched.browser) {
          this.browser[matched.browser] = true;
          this.browser['version'] = matched.version;
        }

        if (this.browser['chrome']) {
          this.browser['webkit'] = true;
        } else if (this.browser['webkit']) {
          this.browser['safari'] = true;
        }
      }

      return this.browser;
    }
  }, {
    key: "resolveUserAgent",
    value: function resolveUserAgent() {
      var ua = navigator.userAgent.toLowerCase();
      var match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
      return {
        browser: match[1] || "",
        version: match[2] || "0"
      };
    }
  }, {
    key: "isVisible",
    value: function isVisible(element) {
      return element && element.offsetParent != null;
    }
  }, {
    key: "getFocusableElements",
    value: function getFocusableElements(element) {
      var focusableElements = DomHandler.find(element, "button:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                [href][clientHeight][clientWidth]:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                input:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), select:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                textarea:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), [tabIndex]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]),\n                [contenteditable]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])");
      var visibleFocusableElements = [];

      var _iterator3 = _createForOfIteratorHelper(focusableElements),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var focusableElement = _step3.value;
          if (getComputedStyle(focusableElement).display !== "none" && getComputedStyle(focusableElement).visibility !== "hidden") visibleFocusableElements.push(focusableElement);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return visibleFocusableElements;
    }
  }, {
    key: "getFirstFocusableElement",
    value: function getFirstFocusableElement(element) {
      var focusableElements = DomHandler.getFocusableElements(element);
      return focusableElements.length > 0 ? focusableElements[0] : null;
    }
  }, {
    key: "getLastFocusableElement",
    value: function getLastFocusableElement(element) {
      var focusableElements = DomHandler.getFocusableElements(element);
      return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
    }
  }]);

  return DomHandler;
}();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CarouselItem = /*#__PURE__*/function (_Component) {
  _inherits(CarouselItem, _Component);

  var _super = _createSuper(CarouselItem);

  function CarouselItem() {
    _classCallCheck(this, CarouselItem);

    return _super.apply(this, arguments);
  }

  _createClass(CarouselItem, [{
    key: "render",
    value: function render() {
      var content = this.props.template(this.props.item);
      var itemClassName = classNames(this.props.className, 'p-carousel-item', {
        'p-carousel-item-active': this.props.active,
        'p-carousel-item-start': this.props.start,
        'p-carousel-item-end': this.props.end
      });
      return /*#__PURE__*/React.createElement("div", {
        className: itemClassName
      }, content);
    }
  }]);

  return CarouselItem;
}(Component);

_defineProperty(CarouselItem, "defaultProps", {
  template: null,
  item: null,
  active: false,
  start: false,
  end: false,
  className: null
});

var Carousel = /*#__PURE__*/function (_Component2) {
  _inherits(Carousel, _Component2);

  var _super2 = _createSuper(Carousel);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super2.call(this, props);
    _this.state = {
      numVisible: props.numVisible,
      numScroll: props.numScroll,
      totalShiftedItems: props.page * props.numScroll * -1
    };

    if (!_this.props.onPageChange) {
      _this.state = _objectSpread(_objectSpread({}, _this.state), {}, {
        page: props.page
      });
    }

    _this.navBackward = _this.navBackward.bind(_assertThisInitialized(_this));
    _this.navForward = _this.navForward.bind(_assertThisInitialized(_this));
    _this.onTransitionEnd = _this.onTransitionEnd.bind(_assertThisInitialized(_this));
    _this.onTouchStart = _this.onTouchStart.bind(_assertThisInitialized(_this));
    _this.onTouchMove = _this.onTouchMove.bind(_assertThisInitialized(_this));
    _this.onTouchEnd = _this.onTouchEnd.bind(_assertThisInitialized(_this));
    _this.totalIndicators = 0;
    _this.remainingItems = 0;
    _this.allowAutoplay = !!_this.props.autoplayInterval;
    _this.circular = _this.props.circular || _this.allowAutoplay;
    _this.attributeSelector = UniqueComponentId();
    _this.swipeThreshold = 20;
    return _this;
  }

  _createClass(Carousel, [{
    key: "step",
    value: function step(dir, page) {
      var totalShiftedItems = this.state.totalShiftedItems;
      var isCircular = this.isCircular();

      if (page != null) {
        totalShiftedItems = this.state.numScroll * page * -1;

        if (isCircular) {
          totalShiftedItems -= this.state.numVisible;
        }

        this.isRemainingItemsAdded = false;
      } else {
        totalShiftedItems += this.state.numScroll * dir;

        if (this.isRemainingItemsAdded) {
          totalShiftedItems += this.remainingItems - this.state.numScroll * dir;
          this.isRemainingItemsAdded = false;
        }

        var originalShiftedItems = isCircular ? totalShiftedItems + this.state.numVisible : totalShiftedItems;
        page = Math.abs(Math.floor(originalShiftedItems / this.state.numScroll));
      }

      if (isCircular && this.state.page === this.totalIndicators - 1 && dir === -1) {
        totalShiftedItems = -1 * (this.props.value.length + this.state.numVisible);
        page = 0;
      } else if (isCircular && this.state.page === 0 && dir === 1) {
        totalShiftedItems = 0;
        page = this.totalIndicators - 1;
      } else if (page === this.totalIndicators - 1 && this.remainingItems > 0) {
        totalShiftedItems += this.remainingItems * -1 - this.state.numScroll * dir;
        this.isRemainingItemsAdded = true;
      }

      if (this.itemsContainer) {
        DomHandler.removeClass(this.itemsContainer, 'p-items-hidden');
        this.changePosition(totalShiftedItems);
        this.itemsContainer.style.transition = 'transform 500ms ease 0s';
      }

      if (this.props.onPageChange) {
        this.setState({
          totalShiftedItems: totalShiftedItems
        });
        this.props.onPageChange({
          page: page
        });
      } else {
        this.setState({
          page: page,
          totalShiftedItems: totalShiftedItems
        });
      }
    }
  }, {
    key: "calculatePosition",
    value: function calculatePosition() {
      if (this.itemsContainer && this.responsiveOptions) {
        var windowWidth = window.innerWidth;
        var matchedResponsiveData = {
          numVisible: this.props.numVisible,
          numScroll: this.props.numScroll
        };

        for (var i = 0; i < this.responsiveOptions.length; i++) {
          var res = this.responsiveOptions[i];

          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }

        var state = {};

        if (this.state.numScroll !== matchedResponsiveData.numScroll) {
          var page = this.getPage();
          page = Math.floor(page * this.state.numScroll / matchedResponsiveData.numScroll);
          var totalShiftedItems = matchedResponsiveData.numScroll * page * -1;

          if (this.isCircular()) {
            totalShiftedItems -= matchedResponsiveData.numVisible;
          }

          state = {
            totalShiftedItems: totalShiftedItems,
            numScroll: matchedResponsiveData.numScroll
          };

          if (this.props.onPageChange) {
            this.props.onPageChange({
              page: page
            });
          } else {
            state = _objectSpread(_objectSpread({}, state), {}, {
              page: page
            });
          }
        }

        if (this.state.numVisible !== matchedResponsiveData.numVisible) {
          state = _objectSpread(_objectSpread({}, state), {}, {
            numVisible: matchedResponsiveData.numVisible
          });
        }

        if (Object.keys(state).length) {
          this.setState(state);
        }
      }
    }
  }, {
    key: "navBackward",
    value: function navBackward(e, page) {
      if (this.circular || this.getPage() !== 0) {
        this.step(1, page);
      }

      this.allowAutoplay = false;

      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "navForward",
    value: function navForward(e, page) {
      if (this.circular || this.getPage() < this.totalIndicators - 1) {
        this.step(-1, page);
      }

      this.allowAutoplay = false;

      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "onDotClick",
    value: function onDotClick(e, page) {
      var currentPage = this.getPage();

      if (page > currentPage) {
        this.navForward(e, page);
      } else if (page < currentPage) {
        this.navBackward(e, page);
      }
    }
  }, {
    key: "onTransitionEnd",
    value: function onTransitionEnd() {
      if (this.itemsContainer) {
        DomHandler.addClass(this.itemsContainer, 'p-items-hidden');
        this.itemsContainer.style.transition = '';

        if ((this.state.page === 0 || this.state.page === this.totalIndicators - 1) && this.isCircular()) {
          this.changePosition(this.state.totalShiftedItems);
        }
      }
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(e) {
      var touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(e) {
      var touchobj = e.changedTouches[0];

      if (this.isVertical()) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    }
  }, {
    key: "changePageOnTouch",
    value: function changePageOnTouch(e, diff) {
      if (Math.abs(diff) > this.swipeThreshold) {
        if (diff < 0) {
          // left
          this.navForward(e);
        } else {
          // right
          this.navBackward(e);
        }
      }
    }
  }, {
    key: "bindDocumentListeners",
    value: function bindDocumentListeners() {
      var _this2 = this;

      if (!this.documentResizeListener) {
        this.documentResizeListener = function () {
          _this2.calculatePosition();
        };

        window.addEventListener('resize', this.documentResizeListener);
      }
    }
  }, {
    key: "unbindDocumentListeners",
    value: function unbindDocumentListeners() {
      if (this.documentResizeListener) {
        window.removeEventListener('resize', this.documentResizeListener);
        this.documentResizeListener = null;
      }
    }
  }, {
    key: "isVertical",
    value: function isVertical() {
      return this.props.orientation === 'vertical';
    }
  }, {
    key: "isCircular",
    value: function isCircular() {
      return this.circular && this.props.value.length >= this.state.numVisible;
    }
  }, {
    key: "getPage",
    value: function getPage() {
      return this.props.onPageChange ? this.props.page : this.state.page;
    }
  }, {
    key: "getTotalIndicators",
    value: function getTotalIndicators() {
      return this.props.value ? Math.ceil((this.props.value.length - this.state.numVisible) / this.state.numScroll) + 1 : 0;
    }
  }, {
    key: "isAutoplay",
    value: function isAutoplay() {
      return this.props.autoplayInterval && this.allowAutoplay;
    }
  }, {
    key: "startAutoplay",
    value: function startAutoplay() {
      var _this3 = this;

      this.interval = setInterval(function () {
        if (_this3.state.page === _this3.totalIndicators - 1) {
          _this3.step(-1, 0);
        } else {
          _this3.step(-1, _this3.state.page + 1);
        }
      }, this.props.autoplayInterval);
    }
  }, {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  }, {
    key: "createStyle",
    value: function createStyle() {
      if (!this.carouselStyle) {
        this.carouselStyle = document.createElement('style');
        document.body.appendChild(this.carouselStyle);
      }

      var innerHTML = "\n            .p-carousel[".concat(this.attributeSelector, "] .p-carousel-item {\n                flex: 1 0 ").concat(100 / this.state.numVisible, "%\n            }\n        ");

      if (this.props.responsiveOptions) {
        this.responsiveOptions = _toConsumableArray(this.props.responsiveOptions);
        this.responsiveOptions.sort(function (data1, data2) {
          var value1 = data1.breakpoint;
          var value2 = data2.breakpoint;
          var result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
            numeric: true
          });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return -1 * result;
        });

        for (var i = 0; i < this.responsiveOptions.length; i++) {
          var res = this.responsiveOptions[i];
          innerHTML += "\n                    @media screen and (max-width: ".concat(res.breakpoint, ") {\n                        .p-carousel[").concat(this.attributeSelector, "] .p-carousel-item {\n                            flex: 1 0 ").concat(100 / res.numVisible, "%\n                        }\n                    }\n                ");
        }
      }

      this.carouselStyle.innerHTML = innerHTML;
    }
  }, {
    key: "changePosition",
    value: function changePosition(totalShiftedItems) {
      if (this.itemsContainer) {
        this.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.state.numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.state.numVisible), "%, 0, 0)");
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.container) {
        this.container.setAttribute(this.attributeSelector, '');
      }

      this.createStyle();
      this.calculatePosition();
      this.changePosition(this.state.totalShiftedItems);

      if (this.props.responsiveOptions) {
        this.bindDocumentListeners();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isCircular = this.isCircular();
      var stateChanged = false;
      var totalShiftedItems = this.state.totalShiftedItems;

      if (this.props.autoplayInterval) {
        this.stopAutoplay();
      }

      if (prevState.numScroll !== this.state.numScroll || prevState.numVisible !== this.state.numVisible || this.props.value && prevProps.value && prevProps.value.length !== this.props.value.length) {
        this.remainingItems = (this.props.value.length - this.state.numVisible) % this.state.numScroll;
        var page = this.getPage();

        if (this.totalIndicators !== 0 && page >= this.totalIndicators) {
          page = this.totalIndicators - 1;

          if (this.props.onPageChange) {
            this.props.onPageChange({
              page: page
            });
          } else {
            this.setState({
              page: page
            });
          }

          stateChanged = true;
        }

        totalShiftedItems = page * this.state.numScroll * -1;

        if (isCircular) {
          totalShiftedItems -= this.state.numVisible;
        }

        if (page === this.totalIndicators - 1 && this.remainingItems > 0) {
          totalShiftedItems += -1 * this.remainingItems + this.state.numScroll;
          this.isRemainingItemsAdded = true;
        } else {
          this.isRemainingItemsAdded = false;
        }

        if (totalShiftedItems !== this.state.totalShiftedItems) {
          this.setState({
            totalShiftedItems: totalShiftedItems
          });
          stateChanged = true;
        }

        this.changePosition(totalShiftedItems);
      }

      if (isCircular) {
        if (this.state.page === 0) {
          totalShiftedItems = -1 * this.state.numVisible;
        } else if (totalShiftedItems === 0) {
          totalShiftedItems = -1 * this.props.value.length;

          if (this.remainingItems > 0) {
            this.isRemainingItemsAdded = true;
          }
        }

        if (totalShiftedItems !== this.state.totalShiftedItems) {
          this.setState({
            totalShiftedItems: totalShiftedItems
          });
          stateChanged = true;
        }
      }

      if (prevProps.page !== this.props.page) {
        if (this.props.page > prevProps.page && this.props.page <= this.totalIndicators - 1) {
          this.step(-1, this.props.page);
        } else if (this.props.page < prevProps.page) {
          this.step(1, this.props.page);
        }
      }

      if (!stateChanged && this.isAutoplay()) {
        this.startAutoplay();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.responsiveOptions) {
        this.unbindDocumentListeners();
      }

      if (this.props.autoplayInterval) {
        this.stopAutoplay();
      }
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this4 = this;

      if (this.props.value && this.props.value.length) {
        var isCircular = this.isCircular();
        var clonedItemsForStarting = null;
        var clonedItemsForFinishing = null;

        if (isCircular) {
          var clonedElements = null;
          clonedElements = this.props.value.slice(-1 * this.state.numVisible);
          clonedItemsForStarting = clonedElements.map(function (item, index) {
            var isActive = _this4.state.totalShiftedItems * -1 === _this4.props.value.length + _this4.state.numVisible,
                start = index === 0,
                end = index === clonedElements.length - 1;
            return /*#__PURE__*/React.createElement(CarouselItem, {
              key: index + '_scloned',
              className: "p-carousel-item-cloned",
              template: _this4.props.itemTemplate,
              item: item,
              active: isActive,
              start: start,
              end: end
            });
          });
          clonedElements = this.props.value.slice(0, this.state.numVisible);
          clonedItemsForFinishing = clonedElements.map(function (item, index) {
            var isActive = _this4.state.totalShiftedItems === 0,
                start = index === 0,
                end = index === clonedElements.length - 1;
            return /*#__PURE__*/React.createElement(CarouselItem, {
              key: index + '_fcloned',
              className: "p-carousel-item-cloned",
              template: _this4.props.itemTemplate,
              item: item,
              active: isActive,
              start: start,
              end: end
            });
          });
        }

        var items = this.props.value.map(function (item, index) {
          var firstIndex = isCircular ? -1 * (_this4.state.totalShiftedItems + _this4.state.numVisible) : _this4.state.totalShiftedItems * -1,
              lastIndex = firstIndex + _this4.state.numVisible - 1,
              isActive = firstIndex <= index && lastIndex >= index,
              start = firstIndex === index,
              end = lastIndex === index;
          return /*#__PURE__*/React.createElement(CarouselItem, {
            key: index,
            template: _this4.props.itemTemplate,
            item: item,
            active: isActive,
            start: start,
            end: end
          });
        });
        return /*#__PURE__*/React.createElement(React.Fragment, null, clonedItemsForStarting, items, clonedItemsForFinishing);
      }
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      if (this.props.header) {
        return /*#__PURE__*/React.createElement("div", {
          className: "p-carousel-header"
        }, this.props.header);
      }

      return null;
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      if (this.props.footer) {
        return /*#__PURE__*/React.createElement("div", {
          className: "p-carousel-footer"
        }, this.props.footer);
      }

      return null;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this5 = this;

      var items = this.renderItems();
      var height = this.isVertical() ? this.props.verticalViewPortHeight : 'auto';
      var backwardNavigator = this.renderBackwardNavigator();
      var forwardNavigator = this.renderForwardNavigator();
      var containerClassName = classNames('p-carousel-container', this.props.containerClassName);
      return /*#__PURE__*/React.createElement("div", {
        className: containerClassName
      }, backwardNavigator, /*#__PURE__*/React.createElement("div", {
        className: "p-carousel-items-content",
        style: {
          'height': height
        }
      }, /*#__PURE__*/React.createElement("div", {
        ref: function ref(el) {
          return _this5.itemsContainer = el;
        },
        className: "p-carousel-items-container",
        onTransitionEnd: this.onTransitionEnd,
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd
      }, items)), forwardNavigator);
    }
  }, {
    key: "renderBackwardNavigator",
    value: function renderBackwardNavigator() {
      var isDisabled = (!this.circular || this.props.value && this.props.value.length < this.state.numVisible) && this.getPage() === 0;
      var buttonClassName = classNames('p-carousel-prev p-link', {
        'p-disabled': isDisabled
      }),
          iconClassName = classNames('p-carousel-prev-icon pi', {
        'pi-chevron-left': !this.isVertical(),
        'pi-chevron-up': this.isVertical()
      });
      return /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: buttonClassName,
        onClick: this.navBackward,
        disabled: isDisabled
      }, /*#__PURE__*/React.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/React.createElement(Ripple, null));
    }
  }, {
    key: "renderForwardNavigator",
    value: function renderForwardNavigator() {
      var isDisabled = (!this.circular || this.props.value && this.props.value.length < this.state.numVisible) && (this.getPage() === this.totalIndicators - 1 || this.totalIndicators === 0);
      var buttonClassName = classNames('p-carousel-next p-link', {
        'p-disabled': isDisabled
      }),
          iconClassName = classNames('p-carousel-next-icon pi', {
        'pi-chevron-right': !this.isVertical(),
        'pi-chevron-down': this.isVertical()
      });
      return /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: buttonClassName,
        onClick: this.navForward,
        disabled: isDisabled
      }, /*#__PURE__*/React.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/React.createElement(Ripple, null));
    }
  }, {
    key: "renderIndicator",
    value: function renderIndicator(index) {
      var _this6 = this;

      var isActive = this.getPage() === index,
          indicatorItemClassName = classNames('p-carousel-indicator', {
        'p-highlight': isActive
      });
      return /*#__PURE__*/React.createElement("li", {
        className: indicatorItemClassName,
        key: 'p-carousel-indicator-' + index
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "p-link",
        onClick: function onClick(e) {
          return _this6.onDotClick(e, index);
        }
      }, /*#__PURE__*/React.createElement(Ripple, null)));
    }
  }, {
    key: "renderIndicators",
    value: function renderIndicators() {
      var indicatorsContentClassName = classNames('p-carousel-indicators p-reset', this.props.indicatorsContentClassName);
      var indicators = [];

      for (var i = 0; i < this.totalIndicators; i++) {
        indicators.push(this.renderIndicator(i));
      }

      return /*#__PURE__*/React.createElement("ul", {
        className: indicatorsContentClassName
      }, indicators);
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var className = classNames('p-carousel p-component', {
        'p-carousel-vertical': this.isVertical(),
        'p-carousel-horizontal': !this.isVertical()
      }, this.props.className);
      var contentClassName = classNames('p-carousel-content', this.props.contentClassName);
      this.totalIndicators = this.getTotalIndicators();
      var content = this.renderContent();
      var indicators = this.renderIndicators();
      var header = this.renderHeader();
      var footer = this.renderFooter();
      return /*#__PURE__*/React.createElement("div", {
        ref: function ref(el) {
          return _this7.container = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, header, /*#__PURE__*/React.createElement("div", {
        className: contentClassName
      }, content, indicators), footer);
    }
  }]);

  return Carousel;
}(Component);

_defineProperty(Carousel, "defaultProps", {
  id: null,
  value: null,
  page: 0,
  header: null,
  footer: null,
  style: null,
  className: null,
  itemTemplate: null,
  circular: false,
  autoplayInterval: 0,
  numVisible: 1,
  numScroll: 1,
  responsiveOptions: null,
  orientation: "horizontal",
  verticalViewPortHeight: "300px",
  contentClassName: null,
  containerClassName: null,
  indicatorsContentClassName: null,
  onPageChange: null
});

export { Carousel };
