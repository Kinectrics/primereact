this.primereact = this.primereact || {};
this.primereact.multiselect = (function (exports, React, core, reactTransitionGroup, inputtext, virtualscroller) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _arrayLikeToArray$3(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$3(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray$3(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread();
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

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest();
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

  function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

  function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

          var _iterator = _createForOfIteratorHelper$2(parents),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var parent = _step.value;
              var scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];

              if (scrollSelectors) {
                var selectors = scrollSelectors.split(',');

                var _iterator2 = _createForOfIteratorHelper$2(selectors),
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

        var _iterator3 = _createForOfIteratorHelper$2(focusableElements),
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

  function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  var FilterUtils = /*#__PURE__*/function () {
    function FilterUtils() {
      _classCallCheck(this, FilterUtils);
    }

    _createClass(FilterUtils, null, [{
      key: "filter",
      value: function filter(value, fields, filterValue, filterMatchMode, filterLocale) {
        var filteredItems = [];
        var filterText = ObjectUtils.removeAccents(filterValue).toLocaleLowerCase(filterLocale);

        if (value) {
          var _iterator = _createForOfIteratorHelper$1(value),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;

              var _iterator2 = _createForOfIteratorHelper$1(fields),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var field = _step2.value;
                  var fieldValue = ObjectUtils.removeAccents(String(ObjectUtils.resolveFieldData(item, field))).toLocaleLowerCase(filterLocale);

                  if (FilterUtils[filterMatchMode](fieldValue, filterText, filterLocale)) {
                    filteredItems.push(item);
                    break;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return filteredItems;
      }
    }, {
      key: "startsWith",
      value: function startsWith(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim() === '') {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        var filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.slice(0, filterValue.length) === filterValue;
      }
    }, {
      key: "contains",
      value: function contains(value, filter, filterLocale) {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        var filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue) !== -1;
      }
    }, {
      key: "endsWith",
      value: function endsWith(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim() === '') {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        var filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        var stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
        return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
      }
    }, {
      key: "equals",
      value: function equals(value, filter, filterLocale) {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();else return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) === ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      }
    }, {
      key: "notEquals",
      value: function notEquals(value, filter, filterLocale) {
        if (filter === undefined || filter === null || typeof filter === 'string' && filter.trim() === '') {
          return false;
        }

        if (value === undefined || value === null) {
          return true;
        }

        if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();else return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) !== ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      }
    }, {
      key: "in",
      value: function _in(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.length === 0) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        for (var i = 0; i < filter.length; i++) {
          if (ObjectUtils.equals(value, filter[i])) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: "lt",
      value: function lt(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim && filter.trim().length === 0) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();else return value < parseFloat(filter);
      }
    }, {
      key: "lte",
      value: function lte(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim && filter.trim().length === 0) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();else return value <= parseFloat(filter);
      }
    }, {
      key: "gt",
      value: function gt(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim && filter.trim().length === 0) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();else return value > parseFloat(filter);
      }
    }, {
      key: "gte",
      value: function gte(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim && filter.trim().length === 0) {
          return true;
        }

        if (value === undefined || value === null) {
          return false;
        }

        if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();else return value >= parseFloat(filter);
      }
    }]);

    return FilterUtils;
  }();

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var CSSTransition = /*#__PURE__*/function (_Component) {
    _inherits(CSSTransition, _Component);

    var _super = _createSuper$5(CSSTransition);

    function CSSTransition(props) {
      var _this;

      _classCallCheck(this, CSSTransition);

      _this = _super.call(this, props);
      _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
      _this.onEntering = _this.onEntering.bind(_assertThisInitialized(_this));
      _this.onEntered = _this.onEntered.bind(_assertThisInitialized(_this));
      _this.onExit = _this.onExit.bind(_assertThisInitialized(_this));
      _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
      _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(CSSTransition, [{
      key: "onEnter",
      value: function onEnter(node, isAppearing) {
        this.props.onEnter && this.props.onEnter(node, isAppearing); // component

        this.props.options && this.props.options.onEnter && this.props.options.onEnter(node, isAppearing); // user option
      }
    }, {
      key: "onEntering",
      value: function onEntering(node, isAppearing) {
        this.props.onEntering && this.props.onEntering(node, isAppearing); // component

        this.props.options && this.props.options.onEntering && this.props.options.onEntering(node, isAppearing); // user option
      }
    }, {
      key: "onEntered",
      value: function onEntered(node, isAppearing) {
        this.props.onEntered && this.props.onEntered(node, isAppearing); // component

        this.props.options && this.props.options.onEntered && this.props.options.onEntered(node, isAppearing); // user option
      }
    }, {
      key: "onExit",
      value: function onExit(node) {
        this.props.onExit && this.props.onExit(node); // component

        this.props.options && this.props.options.onExit && this.props.options.onExit(node); // user option
      }
    }, {
      key: "onExiting",
      value: function onExiting(node) {
        this.props.onExiting && this.props.onExiting(node); // component

        this.props.options && this.props.options.onExiting && this.props.options.onExiting(node); // user option
      }
    }, {
      key: "onExited",
      value: function onExited(node) {
        this.props.onExited && this.props.onExited(node); // component

        this.props.options && this.props.options.onExited && this.props.options.onExited(node); // user option
      }
    }, {
      key: "render",
      value: function render() {
        var immutableProps = {
          nodeRef: this.props.nodeRef,
          in: this.props.in,
          onEnter: this.onEnter,
          onEntering: this.onEntering,
          onEntered: this.onEntered,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        };
        var mutableProps = {
          classNames: this.props.classNames,
          timeout: this.props.timeout,
          unmountOnExit: this.props.unmountOnExit
        };

        var props = _objectSpread$3(_objectSpread$3(_objectSpread$3({}, mutableProps), this.props.options || {}), immutableProps);

        return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.CSSTransition, props, this.props.children);
      }
    }]);

    return CSSTransition;
  }(React.Component);

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var Checkbox = /*#__PURE__*/function (_Component) {
    _inherits(Checkbox, _Component);

    var _super = _createSuper$4(Checkbox);

    function Checkbox(props) {
      var _this;

      _classCallCheck(this, Checkbox);

      _this = _super.call(this, props);
      _this.state = {
        focused: false
      };
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
      _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
      _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
      _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
      _this.inputRef = /*#__PURE__*/React.createRef(_this.props.inputRef);
      return _this;
    }

    _createClass(Checkbox, [{
      key: "onClick",
      value: function onClick(e) {
        if (!this.props.disabled && !this.props.readOnly && this.props.onChange) {
          this.props.onChange({
            originalEvent: e,
            value: this.props.value,
            checked: !this.props.checked,
            stopPropagation: function stopPropagation() {},
            preventDefault: function preventDefault() {},
            target: {
              type: 'checkbox',
              name: this.props.name,
              id: this.props.id,
              value: this.props.value,
              checked: !this.props.checked
            }
          });
          this.inputRef.current.checked = !this.props.checked;
          this.inputRef.current.focus();
          e.preventDefault();
        }
      }
    }, {
      key: "updateInputRef",
      value: function updateInputRef() {
        var ref = this.props.inputRef;

        if (ref) {
          if (typeof ref === 'function') {
            ref(this.inputRef.current);
          } else {
            ref.current = this.inputRef.current;
          }
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateInputRef();

        if (this.props.tooltip) {
          this.renderTooltip();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.tooltip) {
          this.tooltip.destroy();
          this.tooltip = null;
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        this.inputRef.current.checked = this.props.checked;

        if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
          if (this.tooltip) this.tooltip.update(_objectSpread$2({
            content: this.props.tooltip
          }, this.props.tooltipOptions || {}));else this.renderTooltip();
        }
      }
    }, {
      key: "onFocus",
      value: function onFocus() {
        this.setState({
          focused: true
        });
      }
    }, {
      key: "onBlur",
      value: function onBlur() {
        this.setState({
          focused: false
        });
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(event) {
        if (event.key === 'Enter') {
          this.onClick(event);
          event.preventDefault();
        }
      }
    }, {
      key: "renderTooltip",
      value: function renderTooltip() {
        this.tooltip = core.tip({
          target: this.element,
          content: this.props.tooltip,
          options: this.props.tooltipOptions
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var containerClass = classNames('p-checkbox p-component', {
          'p-checkbox-checked': this.props.checked,
          'p-checkbox-disabled': this.props.disabled,
          'p-checkbox-focused': this.state.focused
        }, this.props.className);
        var boxClass = classNames('p-checkbox-box', {
          'p-highlight': this.props.checked,
          'p-disabled': this.props.disabled,
          'p-focus': this.state.focused
        });
        var iconClass = classNames('p-checkbox-icon p-c', {
          'pi pi-check': this.props.checked
        });
        return /*#__PURE__*/React__default["default"].createElement("div", {
          ref: function ref(el) {
            return _this2.element = el;
          },
          id: this.props.id,
          className: containerClass,
          style: this.props.style,
          onClick: this.onClick,
          onContextMenu: this.props.onContextMenu,
          onMouseDown: this.props.onMouseDown
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-hidden-accessible"
        }, /*#__PURE__*/React__default["default"].createElement("input", {
          ref: this.inputRef,
          type: "checkbox",
          "aria-labelledby": this.props.ariaLabelledBy,
          id: this.props.inputId,
          name: this.props.name,
          tabIndex: this.props.tabIndex,
          defaultChecked: this.props.checked,
          onKeyDown: this.onKeyDown,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          disabled: this.props.disabled,
          readOnly: this.props.readOnly,
          required: this.props.required
        })), /*#__PURE__*/React__default["default"].createElement("div", {
          className: boxClass,
          ref: function ref(el) {
            return _this2.box = el;
          },
          role: "checkbox",
          "aria-checked": this.props.checked
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: iconClass
        })));
      }
    }]);

    return Checkbox;
  }(React.Component);

  _defineProperty(Checkbox, "defaultProps", {
    id: null,
    inputRef: null,
    inputId: null,
    value: null,
    name: null,
    checked: false,
    style: null,
    className: null,
    disabled: false,
    required: false,
    readOnly: false,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    ariaLabelledBy: null,
    onChange: null,
    onMouseDown: null,
    onContextMenu: null
  });

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var MultiSelectHeader = /*#__PURE__*/function (_Component) {
    _inherits(MultiSelectHeader, _Component);

    var _super = _createSuper$3(MultiSelectHeader);

    function MultiSelectHeader(props) {
      var _this;

      _classCallCheck(this, MultiSelectHeader);

      _this = _super.call(this, props);
      _this.onFilter = _this.onFilter.bind(_assertThisInitialized(_this));
      _this.onSelectAll = _this.onSelectAll.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(MultiSelectHeader, [{
      key: "onFilter",
      value: function onFilter(event) {
        if (this.props.onFilter) {
          this.props.onFilter({
            originalEvent: event,
            query: event.target.value
          });
        }
      }
    }, {
      key: "onSelectAll",
      value: function onSelectAll(event) {
        if (this.props.onSelectAll) {
          this.props.onSelectAll({
            originalEvent: event,
            checked: this.props.selectAll
          });
        }
      }
    }, {
      key: "renderFilterElement",
      value: function renderFilterElement() {
        if (this.props.filter) {
          return /*#__PURE__*/React__default["default"].createElement("div", {
            className: "p-multiselect-filter-container"
          }, /*#__PURE__*/React__default["default"].createElement(inputtext.InputText, {
            type: "text",
            role: "textbox",
            value: this.props.filterValue,
            onChange: this.onFilter,
            className: "p-multiselect-filter",
            placeholder: this.props.filterPlaceholder
          }), /*#__PURE__*/React__default["default"].createElement("span", {
            className: "p-multiselect-filter-icon pi pi-search"
          }));
        }

        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var filterElement = this.renderFilterElement();
        var checkboxElement = this.props.showSelectAll && /*#__PURE__*/React__default["default"].createElement(Checkbox, {
          checked: this.props.selectAll,
          onChange: this.onSelectAll,
          role: "checkbox",
          "aria-checked": this.props.selectAll
        });
        var closeElement = /*#__PURE__*/React__default["default"].createElement("button", {
          type: "button",
          className: "p-multiselect-close p-link",
          onClick: this.props.onClose
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: "p-multiselect-close-icon pi pi-times"
        }), /*#__PURE__*/React__default["default"].createElement(core.Ripple, null));
        var element = /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-multiselect-header"
        }, checkboxElement, filterElement, closeElement);

        if (this.props.template) {
          var defaultOptions = {
            className: 'p-multiselect-header',
            checkboxElement: checkboxElement,
            checked: this.props.selectAll,
            onChange: this.onSelectAll,
            filterElement: filterElement,
            closeElement: closeElement,
            closeElementClassName: 'p-multiselect-close p-link',
            closeIconClassName: 'p-multiselect-close-icon pi pi-times',
            onCloseClick: this.props.onClose,
            element: element,
            props: this.props
          };
          return ObjectUtils.getJSXElement(this.props.template, defaultOptions);
        }

        return element;
      }
    }]);

    return MultiSelectHeader;
  }(React.Component);

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var MultiSelectItem = /*#__PURE__*/function (_Component) {
    _inherits(MultiSelectItem, _Component);

    var _super = _createSuper$2(MultiSelectItem);

    function MultiSelectItem(props) {
      var _this;

      _classCallCheck(this, MultiSelectItem);

      _this = _super.call(this, props);
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
      _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(MultiSelectItem, [{
      key: "onClick",
      value: function onClick(event) {
        if (this.props.onClick) {
          this.props.onClick({
            originalEvent: event,
            option: this.props.option
          });
        }

        event.preventDefault();
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(event) {
        if (this.props.onKeyDown) {
          this.props.onKeyDown({
            originalEvent: event,
            option: this.props.option
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var className = classNames('p-multiselect-item', {
          'p-highlight': this.props.selected,
          'p-disabled': this.props.disabled
        }, this.props.option.className);
        var checkboxClassName = classNames('p-checkbox-box', {
          'p-highlight': this.props.selected
        });
        var checkboxIcon = classNames('p-checkbox-icon p-c', {
          'pi pi-check': this.props.selected
        });
        var content = this.props.template ? ObjectUtils.getJSXElement(this.props.template, this.props.option) : this.props.label;
        var tabIndex = this.props.disabled ? null : this.props.tabIndex || 0;
        return /*#__PURE__*/React__default["default"].createElement("li", {
          className: className,
          onClick: this.onClick,
          tabIndex: tabIndex,
          onKeyDown: this.onKeyDown,
          role: "option",
          "aria-selected": this.props.selected
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-checkbox p-component"
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: checkboxClassName
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: checkboxIcon
        }))), /*#__PURE__*/React__default["default"].createElement("span", null, content), /*#__PURE__*/React__default["default"].createElement(core.Ripple, null));
      }
    }]);

    return MultiSelectItem;
  }(React.Component);

  _defineProperty(MultiSelectItem, "defaultProps", {
    option: null,
    label: null,
    selected: false,
    disabled: false,
    tabIndex: null,
    template: null,
    onClick: null,
    onKeyDown: null
  });

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var MultiSelectPanelComponent = /*#__PURE__*/function (_Component) {
    _inherits(MultiSelectPanelComponent, _Component);

    var _super = _createSuper$1(MultiSelectPanelComponent);

    function MultiSelectPanelComponent(props) {
      var _this;

      _classCallCheck(this, MultiSelectPanelComponent);

      _this = _super.call(this, props);
      _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
      _this.onFilterInputChange = _this.onFilterInputChange.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(MultiSelectPanelComponent, [{
      key: "onEnter",
      value: function onEnter() {
        var _this2 = this;

        this.props.onEnter(function () {
          if (_this2.virtualScrollerRef) {
            var selectedIndex = _this2.props.getSelectedOptionIndex();

            if (selectedIndex !== -1) {
              _this2.virtualScrollerRef.scrollToIndex(selectedIndex);
            }
          }
        });
      }
    }, {
      key: "onFilterInputChange",
      value: function onFilterInputChange(event) {
        if (this.virtualScrollerRef) {
          this.virtualScrollerRef.scrollToIndex(0);
        }

        this.props.onFilterInputChange && this.props.onFilterInputChange(event);
      }
    }, {
      key: "isEmptyFilter",
      value: function isEmptyFilter() {
        return !(this.props.visibleOptions && this.props.visibleOptions.length) && this.props.hasFilter();
      }
    }, {
      key: "renderHeader",
      value: function renderHeader() {
        return /*#__PURE__*/React__default["default"].createElement(MultiSelectHeader, {
          filter: this.props.filter,
          filterValue: this.props.filterValue,
          onFilter: this.onFilterInputChange,
          filterPlaceholder: this.props.filterPlaceholder,
          onClose: this.props.onCloseClick,
          showSelectAll: this.props.showSelectAll,
          selectAll: this.props.isAllSelected(),
          onSelectAll: this.props.onSelectAll,
          template: this.props.panelHeaderTemplate
        });
      }
    }, {
      key: "renderFooter",
      value: function renderFooter() {
        if (this.props.panelFooterTemplate) {
          var content = ObjectUtils.getJSXElement(this.props.panelFooterTemplate, this.props, this.props.onOverlayHide);
          return /*#__PURE__*/React__default["default"].createElement("div", {
            className: "p-multiselect-footer"
          }, content);
        }

        return null;
      }
    }, {
      key: "renderGroupChildren",
      value: function renderGroupChildren(optionGroup) {
        var _this3 = this;

        var groupChildren = this.props.getOptionGroupChildren(optionGroup);
        return groupChildren.map(function (option, j) {
          var optionLabel = _this3.props.getOptionLabel(option);

          var optionKey = j + '_' + _this3.props.getOptionRenderKey(option);

          var disabled = _this3.props.isOptionDisabled(option);

          var tabIndex = disabled ? null : _this3.props.tabIndex || 0;
          return /*#__PURE__*/React__default["default"].createElement(MultiSelectItem, {
            key: optionKey,
            label: optionLabel,
            option: option,
            template: _this3.props.itemTemplate,
            selected: _this3.props.isSelected(option),
            onClick: _this3.props.onOptionSelect,
            onKeyDown: _this3.props.onOptionKeyDown,
            tabIndex: tabIndex,
            disabled: disabled
          });
        });
      }
    }, {
      key: "renderEmptyFilter",
      value: function renderEmptyFilter() {
        var emptyFilterMessage = ObjectUtils.getJSXElement(this.props.emptyFilterMessage, this.props);
        return /*#__PURE__*/React__default["default"].createElement("li", {
          className: "p-multiselect-empty-message"
        }, emptyFilterMessage);
      }
    }, {
      key: "renderItem",
      value: function renderItem(option, index) {
        if (this.props.optionGroupLabel) {
          var groupContent = this.props.optionGroupTemplate ? ObjectUtils.getJSXElement(this.props.optionGroupTemplate, option, index) : this.props.getOptionGroupLabel(option);
          var groupChildrenContent = this.renderGroupChildren(option);
          var key = index + '_' + this.props.getOptionGroupRenderKey(option);
          return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
            key: key
          }, /*#__PURE__*/React__default["default"].createElement("li", {
            className: "p-multiselect-item-group"
          }, groupContent), groupChildrenContent);
        } else {
          var optionLabel = this.props.getOptionLabel(option);
          var optionKey = index + '_' + this.props.getOptionRenderKey(option);
          var disabled = this.props.isOptionDisabled(option);
          var tabIndex = disabled ? null : this.props.tabIndex || 0;
          return /*#__PURE__*/React__default["default"].createElement(MultiSelectItem, {
            key: optionKey,
            label: optionLabel,
            option: option,
            template: this.props.itemTemplate,
            selected: this.props.isSelected(option),
            onClick: this.props.onOptionSelect,
            onKeyDown: this.props.onOptionKeyDown,
            tabIndex: tabIndex,
            disabled: disabled
          });
        }
      }
    }, {
      key: "renderItems",
      value: function renderItems() {
        var _this4 = this;

        if (this.props.visibleOptions && this.props.visibleOptions.length) {
          return this.props.visibleOptions.map(function (option, index) {
            return _this4.renderItem(option, index);
          });
        } else if (this.props.hasFilter()) {
          return this.renderEmptyFilter();
        }

        return null;
      }
    }, {
      key: "renderContent",
      value: function renderContent() {
        var _this5 = this;

        if (this.props.virtualScrollerOptions) {
          var virtualScrollerProps = _objectSpread$1(_objectSpread$1({}, this.props.virtualScrollerOptions), {
            style: _objectSpread$1(_objectSpread$1({}, this.props.virtualScrollerOptions.style), {
              height: this.props.scrollHeight
            }),
            className: classNames('p-multiselect-items-wrapper', this.props.virtualScrollerOptions.className),
            items: this.props.visibleOptions,
            itemTemplate: function itemTemplate(item, options) {
              return item && _this5.renderItem(item, options.index);
            },
            contentTemplate: function contentTemplate(options) {
              var className = classNames('p-multiselect-items p-component', options.className);
              var content = _this5.isEmptyFilter() ? _this5.renderEmptyFilter() : options.children;
              return /*#__PURE__*/React__default["default"].createElement("ul", {
                ref: options.ref,
                className: className,
                role: "listbox",
                "aria-multiselectable": true
              }, content);
            }
          });

          return /*#__PURE__*/React__default["default"].createElement(virtualscroller.VirtualScroller, _extends({
            ref: function ref(el) {
              return _this5.virtualScrollerRef = el;
            }
          }, virtualScrollerProps));
        } else {
          var items = this.renderItems();
          return /*#__PURE__*/React__default["default"].createElement("div", {
            className: "p-multiselect-items-wrapper",
            style: {
              maxHeight: this.props.scrollHeight
            }
          }, /*#__PURE__*/React__default["default"].createElement("ul", {
            className: "p-multiselect-items p-component",
            role: "listbox",
            "aria-multiselectable": true
          }, items));
        }
      }
    }, {
      key: "renderElement",
      value: function renderElement() {
        var panelClassName = classNames('p-multiselect-panel p-component', {
          'p-multiselect-limited': !this.props.allowOptionSelect()
        }, this.props.panelClassName);
        var header = this.renderHeader();
        var content = this.renderContent();
        var footer = this.renderFooter();
        return /*#__PURE__*/React__default["default"].createElement(CSSTransition, {
          nodeRef: this.props.forwardRef,
          classNames: "p-connected-overlay",
          in: this.props.in,
          timeout: {
            enter: 120,
            exit: 100
          },
          options: this.props.transitionOptions,
          unmountOnExit: true,
          onEnter: this.onEnter,
          onEntered: this.props.onEntered,
          onExit: this.props.onExit,
          onExited: this.props.onExited
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          ref: this.props.forwardRef,
          className: panelClassName,
          style: this.props.panelStyle,
          onClick: this.props.onClick
        }, header, content, footer));
      }
    }, {
      key: "render",
      value: function render() {
        var element = this.renderElement();
        return /*#__PURE__*/React__default["default"].createElement(core.Portal, {
          element: element,
          appendTo: this.props.appendTo
        });
      }
    }]);

    return MultiSelectPanelComponent;
  }(React.Component);

  var MultiSelectPanel = /*#__PURE__*/React__default["default"].forwardRef(function (props, ref) {
    return /*#__PURE__*/React__default["default"].createElement(MultiSelectPanelComponent, _extends({
      forwardRef: ref
    }, props));
  });

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

  function EventBus () {
    var allHandlers = new Map();
    return {
      on: function on(type, handler) {
        var handlers = allHandlers.get(type);
        if (!handlers) handlers = [handler];else handlers.push(handler);
        allHandlers.set(type, handlers);
      },
      off: function off(type, handler) {
        var handlers = allHandlers.get(type);
        handlers && handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      },
      emit: function emit(type, evt) {
        var handlers = allHandlers.get(type);
        handlers && handlers.slice().forEach(function (handler) {
          return handler(evt);
        });
      }
    };
  }

  var OverlayEventBus = EventBus();

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

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var MultiSelect = /*#__PURE__*/function (_Component) {
    _inherits(MultiSelect, _Component);

    var _super = _createSuper(MultiSelect);

    function MultiSelect(props) {
      var _this;

      _classCallCheck(this, MultiSelect);

      _this = _super.call(this, props);
      _this.state = {
        filter: '',
        focused: false,
        overlayVisible: false
      };
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
      _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
      _this.onOptionSelect = _this.onOptionSelect.bind(_assertThisInitialized(_this));
      _this.onOptionKeyDown = _this.onOptionKeyDown.bind(_assertThisInitialized(_this));
      _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
      _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
      _this.onFilterInputChange = _this.onFilterInputChange.bind(_assertThisInitialized(_this));
      _this.onCloseClick = _this.onCloseClick.bind(_assertThisInitialized(_this));
      _this.onSelectAll = _this.onSelectAll.bind(_assertThisInitialized(_this));
      _this.onOverlayEnter = _this.onOverlayEnter.bind(_assertThisInitialized(_this));
      _this.onOverlayEntered = _this.onOverlayEntered.bind(_assertThisInitialized(_this));
      _this.onOverlayExit = _this.onOverlayExit.bind(_assertThisInitialized(_this));
      _this.onOverlayExited = _this.onOverlayExited.bind(_assertThisInitialized(_this));
      _this.onPanelClick = _this.onPanelClick.bind(_assertThisInitialized(_this));
      _this.getOptionLabel = _this.getOptionLabel.bind(_assertThisInitialized(_this));
      _this.getOptionRenderKey = _this.getOptionRenderKey.bind(_assertThisInitialized(_this));
      _this.isOptionDisabled = _this.isOptionDisabled.bind(_assertThisInitialized(_this));
      _this.getOptionGroupChildren = _this.getOptionGroupChildren.bind(_assertThisInitialized(_this));
      _this.getOptionGroupLabel = _this.getOptionGroupLabel.bind(_assertThisInitialized(_this));
      _this.getOptionGroupRenderKey = _this.getOptionGroupRenderKey.bind(_assertThisInitialized(_this));
      _this.allowOptionSelect = _this.allowOptionSelect.bind(_assertThisInitialized(_this));
      _this.isSelected = _this.isSelected.bind(_assertThisInitialized(_this));
      _this.isAllSelected = _this.isAllSelected.bind(_assertThisInitialized(_this));
      _this.hasFilter = _this.hasFilter.bind(_assertThisInitialized(_this));
      _this.getSelectedOptionIndex = _this.getSelectedOptionIndex.bind(_assertThisInitialized(_this));
      _this.hide = _this.hide.bind(_assertThisInitialized(_this));
      _this.onOptionKeyDown = _this.onOptionKeyDown.bind(_assertThisInitialized(_this));
      _this.overlayRef = /*#__PURE__*/React.createRef();
      _this.inputRef = /*#__PURE__*/React.createRef(_this.props.inputRef);
      return _this;
    }

    _createClass(MultiSelect, [{
      key: "onPanelClick",
      value: function onPanelClick(event) {
        OverlayEventBus.emit('overlay-click', {
          originalEvent: event,
          target: this.container
        });
      }
    }, {
      key: "allowOptionSelect",
      value: function allowOptionSelect() {
        return !this.props.selectionLimit || !this.props.value || this.props.value && this.props.value.length < this.props.selectionLimit;
      }
    }, {
      key: "onOptionSelect",
      value: function onOptionSelect(event) {
        var _this2 = this;

        var originalEvent = event.originalEvent,
            option = event.option;

        if (this.props.disabled || this.isOptionDisabled(option)) {
          return;
        }

        var optionValue = this.getOptionValue(option);
        var isOptionValueUsed = this.isOptionValueUsed(option);
        var selected = this.isSelected(option);
        var allowOptionSelect = this.allowOptionSelect();
        if (selected) this.updateModel(originalEvent, this.props.value.filter(function (val) {
          return !ObjectUtils.equals(isOptionValueUsed ? val : _this2.getOptionValue(val), optionValue, _this2.equalityKey());
        }));else if (allowOptionSelect) this.updateModel(originalEvent, [].concat(_toConsumableArray(this.props.value || []), [optionValue]));
      }
    }, {
      key: "onOptionKeyDown",
      value: function onOptionKeyDown(event) {
        var originalEvent = event.originalEvent;
        var listItem = originalEvent.currentTarget;

        switch (originalEvent.which) {
          //down
          case 40:
            var nextItem = this.findNextItem(listItem);

            if (nextItem) {
              nextItem.focus();
            }

            originalEvent.preventDefault();
            break;
          //up

          case 38:
            var prevItem = this.findPrevItem(listItem);

            if (prevItem) {
              prevItem.focus();
            }

            originalEvent.preventDefault();
            break;
          //enter and space

          case 13:
          case 32:
            this.onOptionSelect(event);
            originalEvent.preventDefault();
            break;
          //escape

          case 27:
            this.hide();
            this.inputRef.current.focus();
            break;
        }
      }
    }, {
      key: "findNextItem",
      value: function findNextItem(item) {
        var nextItem = item.nextElementSibling;
        if (nextItem) return DomHandler.hasClass(nextItem, 'p-disabled') || DomHandler.hasClass(nextItem, 'p-multiselect-item-group') ? this.findNextItem(nextItem) : nextItem;else return null;
      }
    }, {
      key: "findPrevItem",
      value: function findPrevItem(item) {
        var prevItem = item.previousElementSibling;
        if (prevItem) return DomHandler.hasClass(prevItem, 'p-disabled') || DomHandler.hasClass(prevItem, 'p-multiselect-item-group') ? this.findPrevItem(prevItem) : prevItem;else return null;
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        if (!this.props.disabled && !this.isPanelClicked(event) && !DomHandler.hasClass(event.target, 'p-multiselect-token-icon') && !this.isClearClicked(event)) {
          if (this.state.overlayVisible) {
            this.hide();
          } else {
            this.show();
          }

          this.inputRef.current.focus();
        }
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(event) {
        switch (event.which) {
          //down
          case 40:
            if (!this.state.overlayVisible && event.altKey) {
              this.show();
              event.preventDefault();
            }

            break;
          //space

          case 32:
            if (this.state.overlayVisible) this.hide();else this.show();
            event.preventDefault();
            break;
          //escape

          case 27:
            this.hide();
            break;
          //tab

          case 9:
            if (this.state.overlayVisible) {
              var firstFocusableElement = DomHandler.getFirstFocusableElement(this.overlayRef.current);

              if (firstFocusableElement) {
                firstFocusableElement.focus();
                event.preventDefault();
              }
            }

            break;
        }
      }
    }, {
      key: "onSelectAll",
      value: function onSelectAll(event) {
        var _this3 = this;

        if (this.props.onSelectAll) {
          this.props.onSelectAll(event);
        } else {
          var value = null;
          var visibleOptions = this.getVisibleOptions();

          if (event.checked) {
            value = [];

            if (visibleOptions) {
              var selectedOptions = visibleOptions.filter(function (option) {
                return _this3.isOptionDisabled(option) && _this3.isSelected(option);
              });
              value = selectedOptions.map(function (option) {
                return _this3.getOptionValue(option);
              });
            }
          } else if (visibleOptions) {
            visibleOptions = visibleOptions.filter(function (option) {
              return !_this3.isOptionDisabled(option);
            });

            if (this.props.optionGroupLabel) {
              value = [];
              visibleOptions.forEach(function (optionGroup) {
                return value = [].concat(_toConsumableArray(value), _toConsumableArray(_this3.getOptionGroupChildren(optionGroup).filter(function (option) {
                  return !_this3.isOptionDisabled(option);
                }).map(function (option) {
                  return _this3.getOptionValue(option);
                })));
              });
            } else {
              value = visibleOptions.map(function (option) {
                return _this3.getOptionValue(option);
              });
            }

            value = _toConsumableArray(new Set([].concat(_toConsumableArray(value), _toConsumableArray(this.props.value || []))));
          }

          this.updateModel(event.originalEvent, value);
        }
      }
    }, {
      key: "updateModel",
      value: function updateModel(event, value) {
        if (this.props.onChange) {
          this.props.onChange({
            originalEvent: event,
            value: value,
            stopPropagation: function stopPropagation() {},
            preventDefault: function preventDefault() {},
            target: {
              name: this.props.name,
              id: this.props.id,
              value: value
            }
          });
        }
      }
    }, {
      key: "onFilterInputChange",
      value: function onFilterInputChange(event) {
        var _this4 = this;

        var filter = event.query;
        this.setState({
          filter: filter
        }, function () {
          if (_this4.props.onFilter) {
            _this4.props.onFilter({
              originalEvent: event,
              filter: filter
            });
          }
        });
      }
    }, {
      key: "resetFilter",
      value: function resetFilter() {
        var _this5 = this;

        var filter = '';
        this.setState({
          filter: filter
        }, function () {
          _this5.props.onFilter && _this5.props.onFilter({
            filter: filter
          });
        });
      }
    }, {
      key: "show",
      value: function show() {
        this.setState({
          overlayVisible: true
        });
      }
    }, {
      key: "hide",
      value: function hide() {
        this.setState({
          overlayVisible: false
        });
      }
    }, {
      key: "onOverlayEnter",
      value: function onOverlayEnter(callback) {
        ZIndexUtils.set('overlay', this.overlayRef.current);
        this.alignOverlay();
        this.scrollInView();
        callback && callback();
      }
    }, {
      key: "onOverlayEntered",
      value: function onOverlayEntered(callback) {
        this.bindDocumentClickListener();
        this.bindScrollListener();
        this.bindResizeListener();
        callback && callback();
        this.props.onShow && this.props.onShow();
      }
    }, {
      key: "onOverlayExit",
      value: function onOverlayExit() {
        this.unbindDocumentClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
      }
    }, {
      key: "onOverlayExited",
      value: function onOverlayExited() {
        if (this.props.filter && this.props.resetFilterOnHide) {
          this.resetFilter();
        }

        ZIndexUtils.clear(this.overlayRef.current);
        this.props.onHide && this.props.onHide();
      }
    }, {
      key: "alignOverlay",
      value: function alignOverlay() {
        DomHandler.alignOverlay(this.overlayRef.current, this.label.parentElement, this.props.appendTo || PrimeReact.appendTo);
      }
    }, {
      key: "scrollInView",
      value: function scrollInView() {
        var highlightItem = DomHandler.findSingle(this.overlayRef.current, 'li.p-highlight');

        if (highlightItem) {
          highlightItem.scrollIntoView({
            block: 'nearest',
            inline: 'start'
          });
        }
      }
    }, {
      key: "onCloseClick",
      value: function onCloseClick(event) {
        this.hide();
        this.inputRef.current.focus();
        event.preventDefault();
        event.stopPropagation();
      }
    }, {
      key: "getSelectedOptionIndex",
      value: function getSelectedOptionIndex() {
        if (this.props.value != null && this.props.options) {
          if (this.props.optionGroupLabel) {
            for (var i = 0; i < this.props.options.length; i++) {
              var selectedOptionIndex = this.findOptionIndexInList(this.props.value, this.getOptionGroupChildren(this.props.options[i]));

              if (selectedOptionIndex !== -1) {
                return {
                  group: i,
                  option: selectedOptionIndex
                };
              }
            }
          } else {
            return this.findOptionIndexInList(this.props.value, this.props.options);
          }
        }

        return -1;
      }
    }, {
      key: "findOptionIndexInList",
      value: function findOptionIndexInList(value, list) {
        var _this6 = this;

        var key = this.equalityKey();
        return list.findIndex(function (item) {
          return value.some(function (val) {
            return ObjectUtils.equals(val, _this6.getOptionValue(item), key);
          });
        });
      }
    }, {
      key: "isSelected",
      value: function isSelected(option) {
        var _this7 = this;

        var selected = false;

        if (this.props.value) {
          var optionValue = this.getOptionValue(option);
          var isOptionValueUsed = this.isOptionValueUsed(option);
          var key = this.equalityKey();
          selected = this.props.value.some(function (val) {
            return ObjectUtils.equals(isOptionValueUsed ? val : _this7.getOptionValue(val), optionValue, key);
          });
        }

        return selected;
      }
    }, {
      key: "getLabelByValue",
      value: function getLabelByValue(val) {
        var option;

        if (this.props.options) {
          if (this.props.optionGroupLabel) {
            var _iterator = _createForOfIteratorHelper(this.props.options),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var optionGroup = _step.value;
                option = this.findOptionByValue(val, this.getOptionGroupChildren(optionGroup));

                if (option) {
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } else {
            option = this.findOptionByValue(val, this.props.options);
          }
        }

        return option ? this.getOptionLabel(option) : null;
      }
    }, {
      key: "findOptionByValue",
      value: function findOptionByValue(val, list) {
        var key = this.equalityKey();

        var _iterator2 = _createForOfIteratorHelper(list),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var option = _step2.value;
            var optionValue = this.getOptionValue(option);

            if (ObjectUtils.equals(optionValue, val, key)) {
              return option;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return null;
      }
    }, {
      key: "onFocus",
      value: function onFocus(event) {
        var _this8 = this;

        event.persist();
        this.setState({
          focused: true
        }, function () {
          if (_this8.props.onFocus) {
            _this8.props.onFocus(event);
          }
        });
      }
    }, {
      key: "onBlur",
      value: function onBlur(event) {
        var _this9 = this;

        event.persist();
        this.setState({
          focused: false
        }, function () {
          if (_this9.props.onBlur) {
            _this9.props.onBlur(event);
          }
        });
      }
    }, {
      key: "bindDocumentClickListener",
      value: function bindDocumentClickListener() {
        var _this10 = this;

        if (!this.documentClickListener) {
          this.documentClickListener = function (event) {
            if (_this10.state.overlayVisible && _this10.isOutsideClicked(event)) {
              _this10.hide();
            }
          };

          document.addEventListener('click', this.documentClickListener);
        }
      }
    }, {
      key: "bindScrollListener",
      value: function bindScrollListener() {
        var _this11 = this;

        if (!this.scrollHandler) {
          this.scrollHandler = new ConnectedOverlayScrollHandler(this.container, function () {
            if (_this11.state.overlayVisible) {
              _this11.hide();
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
      key: "bindResizeListener",
      value: function bindResizeListener() {
        var _this12 = this;

        if (!this.resizeListener) {
          this.resizeListener = function () {
            if (_this12.state.overlayVisible && !DomHandler.isAndroid()) {
              _this12.hide();
            }
          };

          window.addEventListener('resize', this.resizeListener);
        }
      }
    }, {
      key: "unbindResizeListener",
      value: function unbindResizeListener() {
        if (this.resizeListener) {
          window.removeEventListener('resize', this.resizeListener);
          this.resizeListener = null;
        }
      }
    }, {
      key: "isOutsideClicked",
      value: function isOutsideClicked(event) {
        return this.container && !(this.container.isSameNode(event.target) || this.isClearClicked(event) || this.container.contains(event.target) || this.isPanelClicked(event));
      }
    }, {
      key: "isClearClicked",
      value: function isClearClicked(event) {
        return DomHandler.hasClass(event.target, 'p-multiselect-clear-icon');
      }
    }, {
      key: "isPanelClicked",
      value: function isPanelClicked(event) {
        return this.overlayRef && this.overlayRef.current && this.overlayRef.current.contains(event.target);
      }
    }, {
      key: "unbindDocumentClickListener",
      value: function unbindDocumentClickListener() {
        if (this.documentClickListener) {
          document.removeEventListener('click', this.documentClickListener);
          this.documentClickListener = null;
        }
      }
    }, {
      key: "updateInputRef",
      value: function updateInputRef() {
        var ref = this.props.inputRef;

        if (ref) {
          if (typeof ref === 'function') {
            ref(this.inputRef.current);
          } else {
            ref.current = this.inputRef.current;
          }
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateInputRef();

        if (this.props.tooltip) {
          this.renderTooltip();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
          if (this.tooltip) this.tooltip.update(_objectSpread({
            content: this.props.tooltip
          }, this.props.tooltipOptions || {}));else this.renderTooltip();
        }

        if (this.state.overlayVisible && this.hasFilter()) {
          this.alignOverlay();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindResizeListener();

        if (this.scrollHandler) {
          this.scrollHandler.destroy();
          this.scrollHandler = null;
        }

        if (this.tooltip) {
          this.tooltip.destroy();
          this.tooltip = null;
        }

        ZIndexUtils.clear(this.overlayRef.current);
      }
    }, {
      key: "hasFilter",
      value: function hasFilter() {
        return this.state.filter && this.state.filter.trim().length > 0;
      }
    }, {
      key: "isAllSelected",
      value: function isAllSelected() {
        var _this13 = this;

        if (this.props.onSelectAll) {
          return this.props.selectAll;
        } else {
          var visibleOptions = this.getVisibleOptions();

          if (visibleOptions.length === 0) {
            return false;
          }

          visibleOptions = visibleOptions.filter(function (option) {
            return !_this13.isOptionDisabled(option);
          });

          if (this.props.optionGroupLabel) {
            var _iterator3 = _createForOfIteratorHelper(visibleOptions),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var optionGroup = _step3.value;
                var visibleOptionsGroupChildren = this.getOptionGroupChildren(optionGroup).filter(function (option) {
                  return !_this13.isOptionDisabled(option);
                });

                var _iterator4 = _createForOfIteratorHelper(visibleOptionsGroupChildren),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var option = _step4.value;

                    if (!this.isSelected(option)) {
                      return false;
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } else {
            var _iterator5 = _createForOfIteratorHelper(visibleOptions),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _option = _step5.value;

                if (!this.isSelected(_option)) {
                  return false;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        }

        return true;
      }
    }, {
      key: "getOptionLabel",
      value: function getOptionLabel(option) {
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : option && option['label'] !== undefined ? option['label'] : option;
      }
    }, {
      key: "getOptionValue",
      value: function getOptionValue(option) {
        if (this.props.optionValue) {
          var data = ObjectUtils.resolveFieldData(option, this.props.optionValue);
          return data !== null ? data : option;
        }

        return option && option['value'] !== undefined ? option['value'] : option;
      }
    }, {
      key: "getOptionRenderKey",
      value: function getOptionRenderKey(option) {
        return this.props.dataKey ? ObjectUtils.resolveFieldData(option, this.props.dataKey) : this.getOptionLabel(option);
      }
    }, {
      key: "getOptionGroupRenderKey",
      value: function getOptionGroupRenderKey(optionGroup) {
        return ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupLabel);
      }
    }, {
      key: "getOptionGroupLabel",
      value: function getOptionGroupLabel(optionGroup) {
        return ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupLabel);
      }
    }, {
      key: "getOptionGroupChildren",
      value: function getOptionGroupChildren(optionGroup) {
        return ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupChildren);
      }
    }, {
      key: "isOptionDisabled",
      value: function isOptionDisabled(option) {
        if (this.props.optionDisabled) {
          return ObjectUtils.isFunction(this.props.optionDisabled) ? this.props.optionDisabled(option) : ObjectUtils.resolveFieldData(option, this.props.optionDisabled);
        }

        return option && option['disabled'] !== undefined ? option['disabled'] : false;
      }
    }, {
      key: "isOptionValueUsed",
      value: function isOptionValueUsed(option) {
        return this.props.optionValue || option && option['value'] !== undefined;
      }
    }, {
      key: "getVisibleOptions",
      value: function getVisibleOptions() {
        if (this.hasFilter()) {
          var filterValue = this.state.filter.trim().toLocaleLowerCase(this.props.filterLocale);
          var searchFields = this.props.filterBy ? this.props.filterBy.split(',') : [this.props.optionLabel || 'label'];

          if (this.props.optionGroupLabel) {
            var filteredGroups = [];

            var _iterator6 = _createForOfIteratorHelper(this.props.options),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var optgroup = _step6.value;
                var filteredSubOptions = FilterUtils.filter(this.getOptionGroupChildren(optgroup), searchFields, filterValue, this.props.filterMatchMode, this.props.filterLocale);

                if (filteredSubOptions && filteredSubOptions.length) {
                  filteredGroups.push(_objectSpread(_objectSpread({}, optgroup), {
                    items: filteredSubOptions
                  }));
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return filteredGroups;
          } else {
            return FilterUtils.filter(this.props.options, searchFields, filterValue, this.props.filterMatchMode, this.props.filterLocale);
          }
        } else {
          return this.props.options;
        }
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return !this.props.value || this.props.value.length === 0;
      }
    }, {
      key: "equalityKey",
      value: function equalityKey() {
        return this.props.optionValue ? null : this.props.dataKey;
      }
    }, {
      key: "checkValidity",
      value: function checkValidity() {
        return this.inputRef.current.checkValidity();
      }
    }, {
      key: "removeChip",
      value: function removeChip(event, item) {
        var key = this.equalityKey();
        var value = this.props.value.filter(function (val) {
          return !ObjectUtils.equals(val, item, key);
        });
        this.updateModel(event, value);
      }
    }, {
      key: "getSelectedItemsLabel",
      value: function getSelectedItemsLabel() {
        var pattern = /{(.*?)}/;

        if (pattern.test(this.props.selectedItemsLabel)) {
          return this.props.selectedItemsLabel.replace(this.props.selectedItemsLabel.match(pattern)[0], this.props.value.length + '');
        }

        return this.props.selectedItemsLabel;
      }
    }, {
      key: "getLabel",
      value: function getLabel() {
        var label;

        if (!this.isEmpty() && !this.props.fixedPlaceholder) {
          if (this.props.value.length <= this.props.maxSelectedLabels) {
            label = '';

            for (var i = 0; i < this.props.value.length; i++) {
              if (i !== 0) {
                label += ',';
              }

              label += this.getLabelByValue(this.props.value[i]);
            }

            return label;
          } else {
            return this.getSelectedItemsLabel();
          }
        }

        return label;
      }
    }, {
      key: "getLabelContent",
      value: function getLabelContent() {
        var _this14 = this;

        if (this.props.selectedItemTemplate) {
          if (!this.isEmpty()) {
            if (this.props.value.length <= this.props.maxSelectedLabels) {
              return this.props.value.map(function (val, index) {
                var item = ObjectUtils.getJSXElement(_this14.props.selectedItemTemplate, val);
                return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
                  key: index
                }, item);
              });
            } else {
              return this.getSelectedItemsLabel();
            }
          } else {
            return ObjectUtils.getJSXElement(this.props.selectedItemTemplate);
          }
        } else {
          if (this.props.display === 'chip' && !this.isEmpty()) {
            return this.props.value.map(function (val) {
              var label = _this14.getLabelByValue(val);

              return /*#__PURE__*/React__default["default"].createElement("div", {
                className: "p-multiselect-token",
                key: label
              }, /*#__PURE__*/React__default["default"].createElement("span", {
                className: "p-multiselect-token-label"
              }, label), !_this14.props.disabled && /*#__PURE__*/React__default["default"].createElement("span", {
                className: "p-multiselect-token-icon pi pi-times-circle",
                onClick: function onClick(e) {
                  return _this14.removeChip(e, val);
                }
              }));
            });
          }

          return this.getLabel();
        }
      }
    }, {
      key: "renderTooltip",
      value: function renderTooltip() {
        this.tooltip = core.tip({
          target: this.container,
          content: this.props.tooltip,
          options: this.props.tooltipOptions
        });
      }
    }, {
      key: "renderClearIcon",
      value: function renderClearIcon() {
        var _this15 = this;

        var empty = this.isEmpty();

        if (!empty && this.props.showClear && !this.props.disabled) {
          return /*#__PURE__*/React__default["default"].createElement("i", {
            className: "p-multiselect-clear-icon pi pi-times",
            onClick: function onClick(e) {
              return _this15.updateModel(e, null);
            }
          });
        }

        return null;
      }
    }, {
      key: "renderLabel",
      value: function renderLabel() {
        var _this16 = this;

        var empty = this.isEmpty();
        var content = this.getLabelContent();
        var labelClassName = classNames('p-multiselect-label', {
          'p-placeholder': empty && this.props.placeholder,
          'p-multiselect-label-empty': empty && !this.props.placeholder && !this.props.selectedItemTemplate,
          'p-multiselect-items-label': !empty && this.props.value.length > this.props.maxSelectedLabels
        });
        return /*#__PURE__*/React__default["default"].createElement("div", {
          ref: function ref(el) {
            return _this16.label = el;
          },
          className: "p-multiselect-label-container"
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: labelClassName
        }, content || this.props.placeholder || 'empty'));
      }
    }, {
      key: "render",
      value: function render() {
        var _this17 = this;

        var className = classNames('p-multiselect p-component p-inputwrapper', {
          'p-multiselect-chip': this.props.display === 'chip',
          'p-disabled': this.props.disabled,
          'p-multiselect-clearable': this.props.showClear && !this.props.disabled,
          'p-focus': this.state.focused,
          'p-inputwrapper-filled': this.props.value && this.props.value.length > 0,
          'p-inputwrapper-focus': this.state.focused || this.state.overlayVisible
        }, this.props.className);
        var iconClassName = classNames('p-multiselect-trigger-icon p-c', this.props.dropdownIcon);
        var visibleOptions = this.getVisibleOptions();
        var label = this.renderLabel();
        var clearIcon = this.renderClearIcon();
        return /*#__PURE__*/React__default["default"].createElement("div", {
          id: this.props.id,
          className: className,
          onClick: this.onClick,
          ref: function ref(el) {
            return _this17.container = el;
          },
          style: this.props.style
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-hidden-accessible"
        }, /*#__PURE__*/React__default["default"].createElement("input", {
          ref: this.inputRef,
          id: this.props.inputId,
          name: this.props.name,
          readOnly: true,
          type: "text",
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onKeyDown: this.onKeyDown,
          role: "listbox",
          "aria-haspopup": "listbox",
          "aria-labelledby": this.props.ariaLabelledBy,
          "aria-expanded": this.state.overlayVisible,
          disabled: this.props.disabled,
          tabIndex: this.props.tabIndex
        })), label, clearIcon, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-multiselect-trigger"
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: iconClassName
        })), /*#__PURE__*/React__default["default"].createElement(MultiSelectPanel, _extends({
          ref: this.overlayRef,
          visibleOptions: visibleOptions
        }, this.props, {
          onClick: this.onPanelClick,
          onOverlayHide: this.hide,
          filterValue: this.state.filter,
          hasFilter: this.hasFilter,
          onFilterInputChange: this.onFilterInputChange,
          onCloseClick: this.onCloseClick,
          onSelectAll: this.onSelectAll,
          getOptionLabel: this.getOptionLabel,
          getOptionRenderKey: this.getOptionRenderKey,
          isOptionDisabled: this.isOptionDisabled,
          getOptionGroupChildren: this.getOptionGroupChildren,
          getOptionGroupLabel: this.getOptionGroupLabel,
          getOptionGroupRenderKey: this.getOptionGroupRenderKey,
          isSelected: this.isSelected,
          getSelectedOptionIndex: this.getSelectedOptionIndex,
          isAllSelected: this.isAllSelected,
          onOptionSelect: this.onOptionSelect,
          allowOptionSelect: this.allowOptionSelect,
          onOptionKeyDown: this.onOptionKeyDown,
          in: this.state.overlayVisible,
          onEnter: this.onOverlayEnter,
          onEntered: this.onOverlayEntered,
          onExit: this.onOverlayExit,
          onExited: this.onOverlayExited
        })));
      }
    }]);

    return MultiSelect;
  }(React.Component);

  _defineProperty(MultiSelect, "defaultProps", {
    id: null,
    inputRef: null,
    name: null,
    value: null,
    options: null,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    optionGroupTemplate: null,
    display: 'comma',
    style: null,
    className: null,
    panelClassName: null,
    panelStyle: null,
    virtualScrollerOptions: null,
    scrollHeight: '200px',
    placeholder: null,
    fixedPlaceholder: false,
    disabled: false,
    showClear: false,
    filter: false,
    filterBy: null,
    filterMatchMode: 'contains',
    filterPlaceholder: null,
    filterLocale: undefined,
    emptyFilterMessage: 'No results found',
    resetFilterOnHide: false,
    tabIndex: 0,
    dataKey: null,
    inputId: null,
    appendTo: null,
    tooltip: null,
    tooltipOptions: null,
    maxSelectedLabels: 3,
    selectionLimit: null,
    selectedItemsLabel: '{0} items selected',
    ariaLabelledBy: null,
    itemTemplate: null,
    selectedItemTemplate: null,
    panelHeaderTemplate: null,
    panelFooterTemplate: null,
    transitionOptions: null,
    dropdownIcon: 'pi pi-chevron-down',
    showSelectAll: true,
    selectAll: false,
    onChange: null,
    onFocus: null,
    onBlur: null,
    onShow: null,
    onHide: null,
    onFilter: null,
    onSelectAll: null
  });

  exports.MultiSelect = MultiSelect;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, React, primereact.core, ReactTransitionGroup, primereact.inputtext, primereact.virtualscroller);
