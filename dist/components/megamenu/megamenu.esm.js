import React, { Component } from 'react';
import { Ripple } from 'primereact/core';

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
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

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
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

var ObjectUtils = /*#__PURE__*/function () {
  function ObjectUtils() {
    _classCallCheck(this, ObjectUtils);
  }

  _createClass(ObjectUtils, null, [{
    key: "equals",
    value: function equals(obj1, obj2, field) {
      if (field && obj1 && _typeof(obj1) === 'object' && obj2 && _typeof(obj2) === 'object') return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.deepEquals(obj1, obj2);
    }
  }, {
    key: "deepEquals",
    value: function deepEquals(a, b) {
      if (a === b) return true;

      if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
        var arrA = Array.isArray(a),
            arrB = Array.isArray(b),
            i,
            length,
            key;

        if (arrA && arrB) {
          length = a.length;
          if (length !== b.length) return false;

          for (i = length; i-- !== 0;) {
            if (!this.deepEquals(a[i], b[i])) return false;
          }

          return true;
        }

        if (arrA !== arrB) return false;
        var dateA = a instanceof Date,
            dateB = b instanceof Date;
        if (dateA !== dateB) return false;
        if (dateA && dateB) return a.getTime() === b.getTime();
        var regexpA = a instanceof RegExp,
            regexpB = b instanceof RegExp;
        if (regexpA !== regexpB) return false;
        if (regexpA && regexpB) return a.toString() === b.toString();
        var keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;

        for (i = length; i-- !== 0;) {
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        }

        for (i = length; i-- !== 0;) {
          key = keys[i];
          if (!this.deepEquals(a[key], b[key])) return false;
        }

        return true;
      }
      /*eslint no-self-compare: "off"*/


      return a !== a && b !== b;
    }
  }, {
    key: "resolveFieldData",
    value: function resolveFieldData(data, field) {
      if (data && Object.keys(data).length && field) {
        if (this.isFunction(field)) {
          return field(data);
        } else if (field.indexOf('.') === -1) {
          return data[field];
        } else {
          var fields = field.split('.');
          var value = data;

          for (var i = 0, len = fields.length; i < len; ++i) {
            if (value == null) {
              return null;
            }

            value = value[fields[i]];
          }

          return value;
        }
      } else {
        return null;
      }
    }
  }, {
    key: "isFunction",
    value: function isFunction(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    }
  }, {
    key: "findDiffKeys",
    value: function findDiffKeys(obj1, obj2) {
      if (!obj1 || !obj2) {
        return {};
      }

      return Object.keys(obj1).filter(function (key) {
        return !obj2.hasOwnProperty(key);
      }).reduce(function (result, current) {
        result[current] = obj1[current];
        return result;
      }, {});
    }
  }, {
    key: "reorderArray",
    value: function reorderArray(value, from, to) {
      var target;

      if (value && from !== to) {
        if (to >= value.length) {
          target = to - value.length;

          while (target-- + 1) {
            value.push(undefined);
          }
        }

        value.splice(to, 0, value.splice(from, 1)[0]);
      }
    }
  }, {
    key: "findIndexInList",
    value: function findIndexInList(value, list) {
      var index = -1;

      if (list) {
        for (var i = 0; i < list.length; i++) {
          if (list[i] === value) {
            index = i;
            break;
          }
        }
      }

      return index;
    }
  }, {
    key: "getJSXElement",
    value: function getJSXElement(obj) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
    }
  }, {
    key: "removeAccents",
    value: function removeAccents(str) {
      if (str && str.search(/[\xC0-\xFF]/g) > -1) {
        str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
      }

      return str;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return value === null || value === undefined || value === '' || Array.isArray(value) && value.length === 0 || _typeof(value) === 'object' && Object.keys(value).length === 0;
    }
  }, {
    key: "isNotEmpty",
    value: function isNotEmpty(value) {
      return !this.isEmpty(value);
    }
  }]);

  return ObjectUtils;
}();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var MegaMenu = /*#__PURE__*/function (_Component) {
  _inherits(MegaMenu, _Component);

  var _super = _createSuper(MegaMenu);

  function MegaMenu(props) {
    var _this;

    _classCallCheck(this, MegaMenu);

    _this = _super.call(this, props);
    _this.state = {
      activeItem: null
    };
    _this.onLeafClick = _this.onLeafClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MegaMenu, [{
    key: "onLeafClick",
    value: function onLeafClick(event, item) {
      if (item.disabled) {
        event.preventDefault();
        return;
      }

      if (!item.url) {
        event.preventDefault();
      }

      if (item.command) {
        item.command({
          originalEvent: event,
          item: item
        });
      }

      this.setState({
        activeItem: null
      });
    }
  }, {
    key: "onCategoryMouseEnter",
    value: function onCategoryMouseEnter(event, item) {
      if (item.disabled) {
        event.preventDefault();
        return;
      }

      if (this.state.activeItem) {
        this.setState({
          activeItem: item
        });
      }
    }
  }, {
    key: "onCategoryClick",
    value: function onCategoryClick(event, item) {
      if (item.disabled) {
        event.preventDefault();
        return;
      }

      if (!item.url) {
        event.preventDefault();
      }

      if (item.command) {
        item.command({
          originalEvent: event,
          item: this.props.item
        });
      }

      if (item.items) {
        if (this.state.activeItem && this.state.activeItem === item) {
          this.setState({
            activeItem: null
          });
        } else {
          this.setState({
            activeItem: item
          });
        }
      }

      event.preventDefault();
    }
  }, {
    key: "onCategoryKeyDown",
    value: function onCategoryKeyDown(event, item) {
      var listItem = event.currentTarget.parentElement;

      switch (event.which) {
        //down
        case 40:
          if (this.isHorizontal()) this.expandMenu(item);else this.navigateToNextItem(listItem);
          event.preventDefault();
          break;
        //up

        case 38:
          if (this.isVertical()) this.navigateToPrevItem(listItem);else if (item.items && item === this.state.activeItem) this.collapseMenu();
          event.preventDefault();
          break;
        //right

        case 39:
          if (this.isHorizontal()) this.navigateToNextItem(listItem);else this.expandMenu(item);
          event.preventDefault();
          break;
        //left

        case 37:
          if (this.isHorizontal()) this.navigateToPrevItem(listItem);else if (item.items && item === this.state.activeItem) this.collapseMenu();
          event.preventDefault();
          break;
      }
    }
  }, {
    key: "expandMenu",
    value: function expandMenu(item) {
      if (item.items) {
        this.setState({
          activeItem: item
        });
      }
    }
  }, {
    key: "collapseMenu",
    value: function collapseMenu(item) {
      this.setState({
        activeItem: null
      });
    }
  }, {
    key: "findNextItem",
    value: function findNextItem(item) {
      var nextItem = item.nextElementSibling;
      if (nextItem) return DomHandler.hasClass(nextItem, 'p-disabled') || !DomHandler.hasClass(nextItem, 'p-menuitem') ? this.findNextItem(nextItem) : nextItem;else return null;
    }
  }, {
    key: "findPrevItem",
    value: function findPrevItem(item) {
      var prevItem = item.previousElementSibling;
      if (prevItem) return DomHandler.hasClass(prevItem, 'p-disabled') || !DomHandler.hasClass(prevItem, 'p-menuitem') ? this.findPrevItem(prevItem) : prevItem;else return null;
    }
  }, {
    key: "navigateToNextItem",
    value: function navigateToNextItem(listItem) {
      var nextItem = this.findNextItem(listItem);

      if (nextItem) {
        nextItem.children[0].focus();
      }
    }
  }, {
    key: "navigateToPrevItem",
    value: function navigateToPrevItem(listItem) {
      var prevItem = this.findPrevItem(listItem);

      if (prevItem) {
        prevItem.children[0].focus();
      }
    }
  }, {
    key: "isHorizontal",
    value: function isHorizontal() {
      return this.props.orientation === 'horizontal';
    }
  }, {
    key: "isVertical",
    value: function isVertical() {
      return this.props.orientation === 'vertical';
    }
  }, {
    key: "getColumnClassName",
    value: function getColumnClassName(category) {
      var length = category.items ? category.items.length : 0;
      var columnClass;

      switch (length) {
        case 2:
          columnClass = 'p-megamenu-col-6';
          break;

        case 3:
          columnClass = 'p-megamenu-col-4';
          break;

        case 4:
          columnClass = 'p-megamenu-col-3';
          break;

        case 6:
          columnClass = 'p-megamenu-col-2';
          break;

        default:
          columnClass = 'p-megamenu-col-12';
          break;
      }

      return columnClass;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (_this2.container && !_this2.container.contains(event.target)) {
            _this2.setState({
              activeItem: null
            });
          }
        };

        document.addEventListener('click', this.documentClickListener);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.documentClickListener) {
        document.removeEventListener('click', this.documentClickListener);
        this.documentClickListener = null;
      }
    }
  }, {
    key: "renderSeparator",
    value: function renderSeparator(index) {
      return /*#__PURE__*/React.createElement("li", {
        key: 'separator_' + index,
        className: "p-menu-separator",
        role: "separator"
      });
    }
  }, {
    key: "renderSubmenuIcon",
    value: function renderSubmenuIcon(item) {
      if (item.items) {
        var className = classNames('p-submenu-icon pi', {
          'pi-angle-down': this.isHorizontal(),
          'pi-angle-right': this.isVertical()
        });
        return /*#__PURE__*/React.createElement("span", {
          className: className
        });
      }

      return null;
    }
  }, {
    key: "renderSubmenuItem",
    value: function renderSubmenuItem(item, index) {
      var _this3 = this;

      if (item.separator) {
        return this.renderSeparator(index);
      } else {
        var className = classNames('p-menuitem', item.className);
        var linkClassName = classNames('p-menuitem-link', {
          'p-disabled': item.disabled
        });
        var iconClassName = classNames(item.icon, 'p-menuitem-icon');
        var icon = item.icon && /*#__PURE__*/React.createElement("span", {
          className: iconClassName
        });
        var label = item.label && /*#__PURE__*/React.createElement("span", {
          className: "p-menuitem-text"
        }, item.label);
        var content = /*#__PURE__*/React.createElement("a", {
          href: item.url || '#',
          className: linkClassName,
          target: item.target,
          onClick: function onClick(event) {
            return _this3.onLeafClick(event, item);
          },
          role: "menuitem",
          "aria-disabled": item.disabled
        }, icon, label, /*#__PURE__*/React.createElement(Ripple, null));

        if (item.template) {
          var defaultContentOptions = {
            onClick: function onClick(event) {
              return _this3.onLeafClick(event, item);
            },
            className: linkClassName,
            labelClassName: 'p-menuitem-text',
            iconClassName: iconClassName,
            element: content,
            props: this.props
          };
          content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
        }

        return /*#__PURE__*/React.createElement("li", {
          key: item.label + '_' + index,
          className: className,
          style: item.style,
          role: "none"
        }, content);
      }
    }
  }, {
    key: "renderSubmenu",
    value: function renderSubmenu(submenu) {
      var _this4 = this;

      var className = classNames('p-megamenu-submenu-header', {
        'p-disabled': submenu.disabled
      }, submenu.className);
      var items = submenu.items.map(function (item, index) {
        return _this4.renderSubmenuItem(item, index);
      });
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: submenu.label
      }, /*#__PURE__*/React.createElement("li", {
        className: className,
        style: submenu.style,
        role: "presentation",
        "aria-disabled": submenu.disabled
      }, submenu.label), items);
    }
  }, {
    key: "renderSubmenus",
    value: function renderSubmenus(column) {
      var _this5 = this;

      return column.map(function (submenu, index) {
        return _this5.renderSubmenu(submenu, index);
      });
    }
  }, {
    key: "renderColumn",
    value: function renderColumn(category, column, index, columnClassName) {
      var submenus = this.renderSubmenus(column);
      return /*#__PURE__*/React.createElement("div", {
        key: category.label + '_column_' + index,
        className: columnClassName
      }, /*#__PURE__*/React.createElement("ul", {
        className: "p-megamenu-submenu",
        role: "menu"
      }, submenus));
    }
  }, {
    key: "renderColumns",
    value: function renderColumns(category) {
      var _this6 = this;

      if (category.items) {
        var columnClassName = this.getColumnClassName(category);
        return category.items.map(function (column, index) {
          return _this6.renderColumn(category, column, index, columnClassName);
        });
      }

      return null;
    }
  }, {
    key: "renderCategoryPanel",
    value: function renderCategoryPanel(category) {
      if (category.items) {
        var columns = this.renderColumns(category);
        return /*#__PURE__*/React.createElement("div", {
          className: "p-megamenu-panel"
        }, /*#__PURE__*/React.createElement("div", {
          className: "p-megamenu-grid"
        }, columns));
      }

      return null;
    }
  }, {
    key: "renderCategory",
    value: function renderCategory(category, index) {
      var _this7 = this;

      var className = classNames('p-menuitem', {
        'p-menuitem-active': category === this.state.activeItem
      }, category.className);
      var linkClassName = classNames('p-menuitem-link', {
        'p-disabled': category.disabled
      });
      var iconClassName = classNames('p-menuitem-icon', category.icon);
      var icon = category.icon && /*#__PURE__*/React.createElement("span", {
        className: iconClassName
      });
      var label = category.label && /*#__PURE__*/React.createElement("span", {
        className: "p-menuitem-text"
      }, category.label);
      var itemContent = category.template ? ObjectUtils.getJSXElement(category.template, category) : null;
      var submenuIcon = this.renderSubmenuIcon(category);
      var panel = this.renderCategoryPanel(category);
      return /*#__PURE__*/React.createElement("li", {
        key: category.label + '_' + index,
        className: className,
        style: category.style,
        onMouseEnter: function onMouseEnter(e) {
          return _this7.onCategoryMouseEnter(e, category);
        },
        role: "none"
      }, /*#__PURE__*/React.createElement("a", {
        href: category.url || '#',
        className: linkClassName,
        target: category.target,
        onClick: function onClick(e) {
          return _this7.onCategoryClick(e, category);
        },
        onKeyDown: function onKeyDown(e) {
          return _this7.onCategoryKeyDown(e, category);
        },
        role: "menuitem",
        "aria-haspopup": category.items != null
      }, icon, label, itemContent, submenuIcon, /*#__PURE__*/React.createElement(Ripple, null)), panel);
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this8 = this;

      if (this.props.model) {
        return this.props.model.map(function (item, index) {
          return _this8.renderCategory(item, index, true);
        });
      }

      return null;
    }
  }, {
    key: "renderCustomContent",
    value: function renderCustomContent() {
      if (this.props.children) {
        return /*#__PURE__*/React.createElement("div", {
          className: "p-megamenu-custom"
        }, this.props.children);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var className = classNames('p-megamenu p-component', {
        'p-megamenu-horizontal': this.props.orientation === 'horizontal',
        'p-megamenu-vertical': this.props.orientation === 'vertical'
      }, this.props.className);
      var menu = this.renderMenu();
      var customContent = this.renderCustomContent();
      return /*#__PURE__*/React.createElement("div", {
        ref: function ref(el) {
          return _this9.container = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, /*#__PURE__*/React.createElement("ul", {
        className: "p-megamenu-root-list",
        role: "menubar"
      }, menu), customContent);
    }
  }]);

  return MegaMenu;
}(Component);

_defineProperty(MegaMenu, "defaultProps", {
  id: null,
  model: null,
  style: null,
  className: null,
  orientation: 'horizontal'
});

export { MegaMenu };
