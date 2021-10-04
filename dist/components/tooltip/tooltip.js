this.primereact = this.primereact || {};
this.primereact.tooltip = (function (exports, React, ReactDOM, core) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

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

  var ConnectedOverlayScrollHandler = /*#__PURE__*/function () {
    function ConnectedOverlayScrollHandler(element) {
      var listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      _classCallCheck(this, ConnectedOverlayScrollHandler);

      this.element = element;
      this.listener = listener;
    }

    _createClass(ConnectedOverlayScrollHandler, [{
      key: "bindScrollListener",
      value: function bindScrollListener() {
        this.scrollableParents = DomHandler.getScrollableParents(this.element);

        for (var i = 0; i < this.scrollableParents.length; i++) {
          this.scrollableParents[i].addEventListener('scroll', this.listener);
        }
      }
    }, {
      key: "unbindScrollListener",
      value: function unbindScrollListener() {
        if (this.scrollableParents) {
          for (var i = 0; i < this.scrollableParents.length; i++) {
            this.scrollableParents[i].removeEventListener('scroll', this.listener);
          }
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.unbindScrollListener();
        this.element = null;
        this.listener = null;
        this.scrollableParents = null;
      }
    }]);

    return ConnectedOverlayScrollHandler;
  }();

  var PrimeReact = function PrimeReact() {
    _classCallCheck(this, PrimeReact);
  };

  _defineProperty(PrimeReact, "ripple", false);

  _defineProperty(PrimeReact, "locale", 'en');

  _defineProperty(PrimeReact, "autoZIndex", true);

  _defineProperty(PrimeReact, "zIndex", {
    modal: 1100,
    overlay: 1000,
    menu: 1000,
    tooltip: 1100,
    toast: 1200
  });

  _defineProperty(PrimeReact, "appendTo", null);

  function handler() {
    var zIndexes = [];

    var generateZIndex = function generateZIndex(key, baseZIndex) {
      baseZIndex = baseZIndex || getBaseZIndex(key);
      var lastZIndex = getLastZIndex(key, baseZIndex);
      var newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;
      zIndexes.push({
        key: key,
        value: newZIndex
      });
      return newZIndex;
    };

    var revertZIndex = function revertZIndex(zIndex) {
      zIndexes = zIndexes.filter(function (obj) {
        return obj.value !== zIndex;
      });
    };

    var getBaseZIndex = function getBaseZIndex(key) {
      return PrimeReact.zIndex[key] || 999;
    };

    var getCurrentZIndex = function getCurrentZIndex(key) {
      return getLastZIndex(key).value;
    };

    var getLastZIndex = function getLastZIndex(key) {
      var baseZIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return (zIndexes || []).reverse().find(function (obj) {
        return PrimeReact.autoZIndex ? true : obj.key === key;
      }) || {
        key: key,
        value: baseZIndex
      };
    };

    return {
      get: function get(el) {
        return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
      },
      set: function set(key, el, baseZIndex) {
        if (el) {
          el.style.zIndex = String(generateZIndex(key, baseZIndex));
        }
      },
      clear: function clear(el) {
        if (el) {
          revertZIndex(ZIndexUtils.get(el));
          el.style.zIndex = '';
        }
      },
      getBase: function getBase(key) {
        return getBaseZIndex(key);
      },
      getCurrent: function getCurrent(key) {
        return getCurrentZIndex(key);
      }
    };
  }

  var ZIndexUtils = handler();

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function tip(props) {
    var appendTo = props.appendTo || document.body;
    var tooltipWrapper = document.createDocumentFragment();
    DomHandler.appendChild(tooltipWrapper, appendTo);
    props = _objectSpread(_objectSpread({}, props), props.options);
    var tooltipEl = /*#__PURE__*/React__default["default"].createElement(Tooltip, props);
    ReactDOM__default["default"].render(tooltipEl, tooltipWrapper);

    var updateTooltip = function updateTooltip(newProps) {
      props = _objectSpread(_objectSpread({}, props), newProps);
      ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].cloneElement(tooltipEl, props), tooltipWrapper);
    };

    return {
      destroy: function destroy() {
        ReactDOM__default["default"].unmountComponentAtNode(tooltipWrapper);
      },
      updateContent: function updateContent(newContent) {
        console.warn("The 'updateContent' method has been deprecated on Tooltip. Use update(newProps) method.");
        updateTooltip({
          content: newContent
        });
      },
      update: function update(newProps) {
        updateTooltip(newProps);
      }
    };
  }
  var Tooltip = /*#__PURE__*/function (_Component) {
    _inherits(Tooltip, _Component);

    var _super = _createSuper(Tooltip);

    function Tooltip(props) {
      var _this;

      _classCallCheck(this, Tooltip);

      _this = _super.call(this, props);
      _this.state = {
        visible: false,
        position: _this.props.position
      };
      _this.show = _this.show.bind(_assertThisInitialized(_this));
      _this.hide = _this.hide.bind(_assertThisInitialized(_this));
      _this.onMouseEnter = _this.onMouseEnter.bind(_assertThisInitialized(_this));
      _this.onMouseLeave = _this.onMouseLeave.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Tooltip, [{
      key: "isTargetContentEmpty",
      value: function isTargetContentEmpty(target) {
        return !(this.props.content || this.getTargetOption(target, 'tooltip'));
      }
    }, {
      key: "isContentEmpty",
      value: function isContentEmpty(target) {
        return !(this.props.content || this.getTargetOption(target, 'tooltip') || this.props.children);
      }
    }, {
      key: "isMouseTrack",
      value: function isMouseTrack(target) {
        return this.getTargetOption(target, 'mousetrack') || this.props.mouseTrack;
      }
    }, {
      key: "isDisabled",
      value: function isDisabled(target) {
        return this.getTargetOption(target, 'disabled') === 'true' || this.hasTargetOption(target, 'disabled') || this.props.disabled;
      }
    }, {
      key: "isAutoHide",
      value: function isAutoHide() {
        return this.getTargetOption(this.currentTarget, 'autohide') || this.props.autoHide;
      }
    }, {
      key: "getTargetOption",
      value: function getTargetOption(target, option) {
        if (this.hasTargetOption(target, "data-pr-".concat(option))) {
          return target.getAttribute("data-pr-".concat(option));
        }

        return null;
      }
    }, {
      key: "hasTargetOption",
      value: function hasTargetOption(target, option) {
        return target && target.hasAttribute(option);
      }
    }, {
      key: "getEvents",
      value: function getEvents(target) {
        var showEvent = this.getTargetOption(target, 'showevent') || this.props.showEvent;
        var hideEvent = this.getTargetOption(target, 'hideevent') || this.props.hideEvent;

        if (this.isMouseTrack(target)) {
          showEvent = 'mousemove';
          hideEvent = 'mouseleave';
        } else {
          var event = this.getTargetOption(target, 'event') || this.props.event;

          if (event === 'focus') {
            showEvent = 'focus';
            hideEvent = 'blur';
          }
        }

        return {
          showEvent: showEvent,
          hideEvent: hideEvent
        };
      }
    }, {
      key: "getPosition",
      value: function getPosition(target) {
        return this.getTargetOption(target, 'position') || this.state.position;
      }
    }, {
      key: "getMouseTrackPosition",
      value: function getMouseTrackPosition(target) {
        var top = this.getTargetOption(target, 'mousetracktop') || this.props.mouseTrackTop;
        var left = this.getTargetOption(target, 'mousetrackleft') || this.props.mouseTrackLeft;
        return {
          top: top,
          left: left
        };
      }
    }, {
      key: "updateText",
      value: function updateText(target, callback) {
        if (this.tooltipTextEl) {
          var content = this.getTargetOption(target, 'tooltip') || this.props.content;

          if (content) {
            this.tooltipTextEl.innerHTML = ''; // remove children

            this.tooltipTextEl.appendChild(document.createTextNode(content));
            callback();
          } else if (this.props.children) {
            callback();
          }
        }
      }
    }, {
      key: "show",
      value: function show(e) {
        var _this2 = this;

        this.currentTarget = e.currentTarget;

        if (this.isContentEmpty(this.currentTarget) || this.isDisabled(this.currentTarget)) {
          return;
        }

        var updateTooltipState = function updateTooltipState() {
          _this2.updateText(_this2.currentTarget, function () {
            if (_this2.props.autoZIndex && !ZIndexUtils.get(_this2.containerEl)) {
              ZIndexUtils.set('tooltip', _this2.containerEl, _this2.props.baseZIndex);
            }

            _this2.containerEl.style.left = '';
            _this2.containerEl.style.top = '';

            if (_this2.isMouseTrack(_this2.currentTarget) && !_this2.containerSize) {
              _this2.containerSize = {
                width: DomHandler.getOuterWidth(_this2.containerEl),
                height: DomHandler.getOuterHeight(_this2.containerEl)
              };
            }

            _this2.align(_this2.currentTarget, {
              x: e.pageX,
              y: e.pageY
            });
          });
        };

        if (this.state.visible) {
          this.applyDelay('updateDelay', updateTooltipState);
        } else {
          this.sendCallback(this.props.onBeforeShow, {
            originalEvent: e,
            target: this.currentTarget
          });
          this.applyDelay('showDelay', function () {
            _this2.setState({
              visible: true,
              position: _this2.getPosition(_this2.currentTarget)
            }, function () {
              updateTooltipState();

              _this2.sendCallback(_this2.props.onShow, {
                originalEvent: e,
                target: _this2.currentTarget
              });
            });

            _this2.bindDocumentResizeListener();

            _this2.bindScrollListener();

            DomHandler.addClass(_this2.currentTarget, _this2.getTargetOption(_this2.currentTarget, 'classname'));
          });
        }
      }
    }, {
      key: "hide",
      value: function hide(e) {
        var _this3 = this;

        this.clearTimeouts();

        if (this.state.visible) {
          DomHandler.removeClass(this.currentTarget, this.getTargetOption(this.currentTarget, 'classname'));
          this.sendCallback(this.props.onBeforeHide, {
            originalEvent: e,
            target: this.currentTarget
          });
          this.applyDelay('hideDelay', function () {
            ZIndexUtils.clear(_this3.containerEl);
            DomHandler.removeClass(_this3.containerEl, 'p-tooltip-active');

            if (!_this3.isAutoHide() && _this3.allowHide === false) {
              return;
            }

            _this3.setState({
              visible: false,
              position: _this3.props.position
            }, function () {
              if (_this3.tooltipTextEl) {
                ReactDOM__default["default"].unmountComponentAtNode(_this3.tooltipTextEl);
              }

              _this3.unbindDocumentResizeListener();

              _this3.unbindScrollListener();

              _this3.currentTarget = null;
              _this3.scrollHandler = null;
              _this3.containerSize = null;
              _this3.allowHide = true;

              _this3.sendCallback(_this3.props.onHide, {
                originalEvent: e,
                target: _this3.currentTarget
              });
            });
          });
        }
      }
    }, {
      key: "align",
      value: function align(target, coordinate) {
        var _this4 = this;

        var left = 0,
            top = 0;

        if (this.isMouseTrack(target) && coordinate) {
          var containerSize = {
            width: DomHandler.getOuterWidth(this.containerEl),
            height: DomHandler.getOuterHeight(this.containerEl)
          };
          left = coordinate.x;
          top = coordinate.y;

          var _this$getMouseTrackPo = this.getMouseTrackPosition(target),
              mouseTrackTop = _this$getMouseTrackPo.top,
              mouseTrackLeft = _this$getMouseTrackPo.left;

          switch (this.state.position) {
            case 'left':
              left -= containerSize.width + mouseTrackLeft;
              top -= containerSize.height / 2 - mouseTrackTop;
              break;

            case 'right':
              left += mouseTrackLeft;
              top -= containerSize.height / 2 - mouseTrackTop;
              break;

            case 'top':
              left -= containerSize.width / 2 - mouseTrackLeft;
              top -= containerSize.height + mouseTrackTop;
              break;

            case 'bottom':
              left -= containerSize.width / 2 - mouseTrackLeft;
              top += mouseTrackTop;
              break;
          }

          if (left <= 0 || this.containerSize.width > containerSize.width) {
            this.containerEl.style.left = '0px';
            this.containerEl.style.right = window.innerWidth - containerSize.width - left + 'px';
          } else {
            this.containerEl.style.right = '';
            this.containerEl.style.left = left + 'px';
          }

          this.containerEl.style.top = top + 'px';
          DomHandler.addClass(this.containerEl, 'p-tooltip-active');
        } else {
          var pos = DomHandler.findCollisionPosition(this.state.position);
          var my = this.getTargetOption(target, 'my') || this.props.my || pos.my;
          var at = this.getTargetOption(target, 'at') || this.props.at || pos.at;
          this.containerEl.style.padding = '0px';
          DomHandler.flipfitCollision(this.containerEl, target, my, at, function (currentPosition) {
            var _currentPosition$at = currentPosition.at,
                atX = _currentPosition$at.x,
                atY = _currentPosition$at.y;
            var myX = currentPosition.my.x;
            var position = _this4.props.at ? atX !== 'center' && atX !== myX ? atX : atY : currentPosition.at["".concat(pos.axis)];
            _this4.containerEl.style.padding = '';

            _this4.setState({
              position: position
            }, function () {
              _this4.updateContainerPosition();

              DomHandler.addClass(_this4.containerEl, 'p-tooltip-active');
            });
          });
        }
      }
    }, {
      key: "updateContainerPosition",
      value: function updateContainerPosition() {
        if (this.containerEl) {
          var style = getComputedStyle(this.containerEl);
          if (this.state.position === 'left') this.containerEl.style.left = parseFloat(style.left) - parseFloat(style.paddingLeft) * 2 + 'px';else if (this.state.position === 'top') this.containerEl.style.top = parseFloat(style.top) - parseFloat(style.paddingTop) * 2 + 'px';
        }
      }
    }, {
      key: "onMouseEnter",
      value: function onMouseEnter() {
        if (!this.isAutoHide()) {
          this.allowHide = false;
        }
      }
    }, {
      key: "onMouseLeave",
      value: function onMouseLeave(e) {
        if (!this.isAutoHide()) {
          this.allowHide = true;
          this.hide(e);
        }
      }
    }, {
      key: "bindDocumentResizeListener",
      value: function bindDocumentResizeListener() {
        var _this5 = this;

        this.documentResizeListener = function (e) {
          _this5.hide(e);
        };

        window.addEventListener('resize', this.documentResizeListener);
      }
    }, {
      key: "unbindDocumentResizeListener",
      value: function unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
          window.removeEventListener('resize', this.documentResizeListener);
          this.documentResizeListener = null;
        }
      }
    }, {
      key: "bindScrollListener",
      value: function bindScrollListener() {
        var _this6 = this;

        if (!this.scrollHandler) {
          this.scrollHandler = new ConnectedOverlayScrollHandler(this.currentTarget, function (e) {
            if (_this6.state.visible) {
              _this6.hide(e);
            }
          });
        }

        this.scrollHandler.bindScrollListener();
      }
    }, {
      key: "unbindScrollListener",
      value: function unbindScrollListener() {
        if (this.scrollHandler) {
          this.scrollHandler.unbindScrollListener();
        }
      }
    }, {
      key: "bindTargetEvent",
      value: function bindTargetEvent(target) {
        if (target) {
          var _this$getEvents = this.getEvents(target),
              showEvent = _this$getEvents.showEvent,
              hideEvent = _this$getEvents.hideEvent;

          target.addEventListener(showEvent, this.show);
          target.addEventListener(hideEvent, this.hide);
        }
      }
    }, {
      key: "unbindTargetEvent",
      value: function unbindTargetEvent(target) {
        if (target) {
          var _this$getEvents2 = this.getEvents(target),
              showEvent = _this$getEvents2.showEvent,
              hideEvent = _this$getEvents2.hideEvent;

          target.removeEventListener(showEvent, this.show);
          target.removeEventListener(hideEvent, this.hide);
        }
      }
    }, {
      key: "applyDelay",
      value: function applyDelay(delayProp, callback) {
        this.clearTimeouts();
        var delay = this.getTargetOption(this.currentTarget, delayProp.toLowerCase()) || this.props[delayProp];

        if (!!delay) {
          this["".concat(delayProp, "Timeout")] = setTimeout(function () {
            return callback();
          }, delay);
        } else {
          callback();
        }
      }
    }, {
      key: "sendCallback",
      value: function sendCallback(callback) {
        if (callback) {
          for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }

          callback.apply(void 0, params);
        }
      }
    }, {
      key: "clearTimeouts",
      value: function clearTimeouts() {
        clearTimeout(this.showDelayTimeout);
        clearTimeout(this.updateDelayTimeout);
        clearTimeout(this.hideDelayTimeout);
      }
    }, {
      key: "updateTargetEvents",
      value: function updateTargetEvents(target) {
        this.unloadTargetEvents(target);
        this.loadTargetEvents(target);
      }
    }, {
      key: "loadTargetEvents",
      value: function loadTargetEvents(target) {
        this.setTargetEventOperations(target || this.props.target, 'bindTargetEvent');
      }
    }, {
      key: "unloadTargetEvents",
      value: function unloadTargetEvents(target) {
        this.setTargetEventOperations(target || this.props.target, 'unbindTargetEvent');
      }
    }, {
      key: "setTargetEventOperations",
      value: function setTargetEventOperations(target, operation) {
        var _this7 = this;

        if (target) {
          if (DomHandler.isElement(target)) {
            this[operation](target);
          } else {
            var setEvent = function setEvent(target) {
              var element = DomHandler.find(document, target);
              element.forEach(function (el) {
                _this7[operation](el);
              });
            };

            if (target instanceof Array) {
              target.forEach(function (t) {
                setEvent(t);
              });
            } else {
              setEvent(target);
            }
          }
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.target) {
          this.loadTargetEvents();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        var _this8 = this;

        if (prevProps.target !== this.props.target) {
          this.unloadTargetEvents(prevProps.target);
          this.loadTargetEvents();
        }

        if (this.state.visible) {
          if (prevProps.content !== this.props.content) {
            this.applyDelay('updateDelay', function () {
              _this8.updateText(_this8.currentTarget, function () {
                _this8.align(_this8.currentTarget);
              });
            });
          }

          if (this.currentTarget && this.isDisabled(this.currentTarget)) {
            this.hide();
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearTimeouts();
        this.unbindDocumentResizeListener();
        this.unloadTargetEvents();

        if (this.scrollHandler) {
          this.scrollHandler.destroy();
          this.scrollHandler = null;
        }

        ZIndexUtils.clear(this.containerEl);
      }
    }, {
      key: "renderElement",
      value: function renderElement() {
        var _this9 = this;

        var tooltipClassName = classNames('p-tooltip p-component', _defineProperty({}, "p-tooltip-".concat(this.state.position), true), this.props.className);
        var isTargetContentEmpty = this.isTargetContentEmpty(this.currentTarget);
        return /*#__PURE__*/React__default["default"].createElement("div", {
          id: this.props.id,
          ref: function ref(el) {
            return _this9.containerEl = el;
          },
          className: tooltipClassName,
          style: this.props.style,
          role: "tooltip",
          "aria-hidden": this.state.visible,
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-tooltip-arrow"
        }), /*#__PURE__*/React__default["default"].createElement("div", {
          ref: function ref(el) {
            return _this9.tooltipTextEl = el;
          },
          className: "p-tooltip-text"
        }, isTargetContentEmpty && this.props.children));
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.visible) {
          var element = this.renderElement();
          return /*#__PURE__*/React__default["default"].createElement(core.Portal, {
            element: element,
            appendTo: this.props.appendTo,
            visible: true
          });
        }

        return null;
      }
    }]);

    return Tooltip;
  }(React.Component);

  _defineProperty(Tooltip, "defaultProps", {
    id: null,
    target: null,
    content: null,
    disabled: false,
    className: null,
    style: null,
    appendTo: null,
    position: 'right',
    my: null,
    at: null,
    event: null,
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    autoZIndex: true,
    baseZIndex: 0,
    mouseTrack: false,
    mouseTrackTop: 5,
    mouseTrackLeft: 5,
    showDelay: 0,
    updateDelay: 0,
    hideDelay: 0,
    autoHide: true,
    onBeforeShow: null,
    onBeforeHide: null,
    onShow: null,
    onHide: null
  });

  exports.Tooltip = Tooltip;
  exports.tip = tip;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, React, ReactDOM, primereact.core);
