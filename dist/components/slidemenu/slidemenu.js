this.primereact = this.primereact || {};
this.primereact.slidemenu = (function (exports, React, reactTransitionGroup, core) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var CSSTransition = /*#__PURE__*/function (_Component) {
    _inherits(CSSTransition, _Component);

    var _super = _createSuper$1(CSSTransition);

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

        var props = _objectSpread(_objectSpread(_objectSpread({}, mutableProps), this.props.options || {}), immutableProps);

        return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.CSSTransition, props, this.props.children);
      }
    }]);

    return CSSTransition;
  }(React.Component);

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

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var SlideMenuSub = /*#__PURE__*/function (_Component) {
    _inherits(SlideMenuSub, _Component);

    var _super = _createSuper(SlideMenuSub);

    function SlideMenuSub(props) {
      var _this;

      _classCallCheck(this, SlideMenuSub);

      _this = _super.call(this, props);
      _this.state = {
        activeItem: null
      };
      return _this;
    }

    _createClass(SlideMenuSub, [{
      key: "onItemClick",
      value: function onItemClick(event, item) {
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

        if (item.items) {
          this.setState({
            activeItem: item
          });
          this.props.onForward();
        }
      }
    }, {
      key: "renderSeparator",
      value: function renderSeparator(index) {
        return /*#__PURE__*/React__default["default"].createElement("li", {
          key: 'separator_' + index,
          className: "p-menu-separator"
        });
      }
    }, {
      key: "renderSubmenu",
      value: function renderSubmenu(item) {
        if (item.items) {
          return /*#__PURE__*/React__default["default"].createElement(SlideMenuSub, {
            model: item.items,
            index: this.props.index + 1,
            menuWidth: this.props.menuWidth,
            effectDuration: this.props.effectDuration,
            onForward: this.props.onForward,
            parentActive: item === this.state.activeItem
          });
        }

        return null;
      }
    }, {
      key: "renderMenuitem",
      value: function renderMenuitem(item, index) {
        var _this2 = this;

        var active = this.state.activeItem === item;
        var className = classNames('p-menuitem', {
          'p-menuitem-active': active,
          'p-disabled': item.disabled
        }, item.className);
        var iconClassName = classNames('p-menuitem-icon', item.icon);
        var submenuIconClassName = 'p-submenu-icon pi pi-fw pi-angle-right';
        var icon = item.icon && /*#__PURE__*/React__default["default"].createElement("span", {
          className: iconClassName
        });
        var label = item.label && /*#__PURE__*/React__default["default"].createElement("span", {
          className: "p-menuitem-text"
        }, item.label);
        var submenuIcon = item.items && /*#__PURE__*/React__default["default"].createElement("span", {
          className: submenuIconClassName
        });
        var submenu = this.renderSubmenu(item);
        var content = /*#__PURE__*/React__default["default"].createElement("a", {
          href: item.url || '#',
          className: "p-menuitem-link",
          target: item.target,
          onClick: function onClick(event) {
            return _this2.onItemClick(event, item, index);
          },
          "aria-disabled": item.disabled
        }, icon, label, submenuIcon);

        if (item.template) {
          var defaultContentOptions = {
            onClick: function onClick(event) {
              return _this2.onItemClick(event, item, index);
            },
            className: 'p-menuitem-link',
            labelClassName: 'p-menuitem-text',
            iconClassName: iconClassName,
            submenuIconClassName: submenuIconClassName,
            element: content,
            props: this.props,
            active: active
          };
          content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
        }

        return /*#__PURE__*/React__default["default"].createElement("li", {
          key: item.label + '_' + index,
          className: className,
          style: item.style
        }, content, submenu);
      }
    }, {
      key: "renderItem",
      value: function renderItem(item, index) {
        if (item.separator) return this.renderSeparator(index);else return this.renderMenuitem(item, index);
      }
    }, {
      key: "renderItems",
      value: function renderItems() {
        var _this3 = this;

        if (this.props.model) {
          return this.props.model.map(function (item, index) {
            return _this3.renderItem(item, index);
          });
        }

        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var className = classNames({
          'p-slidemenu-rootlist': this.props.root,
          'p-submenu-list': !this.props.root,
          'p-active-submenu': this.props.parentActive
        });
        var style = {
          width: this.props.menuWidth + 'px',
          left: this.props.root ? -1 * this.props.level * this.props.menuWidth + 'px' : this.props.menuWidth + 'px',
          transitionProperty: this.props.root ? 'left' : 'none',
          transitionDuration: this.props.effectDuration + 'ms',
          transitionTimingFunction: this.props.easing
        };
        var items = this.renderItems();
        return /*#__PURE__*/React__default["default"].createElement("ul", {
          className: className,
          style: style
        }, items);
      }
    }]);

    return SlideMenuSub;
  }(React.Component);

  _defineProperty(SlideMenuSub, "defaultProps", {
    model: null,
    level: 0,
    easing: 'ease-out',
    effectDuration: 250,
    menuWidth: 190,
    parentActive: false,
    onForward: null
  });

  var SlideMenu = /*#__PURE__*/function (_Component2) {
    _inherits(SlideMenu, _Component2);

    var _super2 = _createSuper(SlideMenu);

    function SlideMenu(props) {
      var _this4;

      _classCallCheck(this, SlideMenu);

      _this4 = _super2.call(this, props);
      _this4.state = {
        level: 0,
        visible: false
      };
      _this4.navigateBack = _this4.navigateBack.bind(_assertThisInitialized(_this4));
      _this4.navigateForward = _this4.navigateForward.bind(_assertThisInitialized(_this4));
      _this4.onEnter = _this4.onEnter.bind(_assertThisInitialized(_this4));
      _this4.onEntered = _this4.onEntered.bind(_assertThisInitialized(_this4));
      _this4.onExit = _this4.onExit.bind(_assertThisInitialized(_this4));
      _this4.onExited = _this4.onExited.bind(_assertThisInitialized(_this4));
      _this4.onPanelClick = _this4.onPanelClick.bind(_assertThisInitialized(_this4));
      _this4.menuRef = /*#__PURE__*/React__default["default"].createRef();
      return _this4;
    }

    _createClass(SlideMenu, [{
      key: "onPanelClick",
      value: function onPanelClick(event) {
        if (this.props.popup) {
          OverlayEventBus.emit('overlay-click', {
            originalEvent: event,
            target: this.target
          });
        }
      }
    }, {
      key: "navigateForward",
      value: function navigateForward() {
        this.setState({
          level: this.state.level + 1
        });
      }
    }, {
      key: "navigateBack",
      value: function navigateBack() {
        this.setState({
          level: this.state.level - 1
        });
      }
    }, {
      key: "renderBackward",
      value: function renderBackward() {
        var _this5 = this;

        var className = classNames('p-slidemenu-backward', {
          'p-hidden': this.state.level === 0
        });
        return /*#__PURE__*/React__default["default"].createElement("div", {
          ref: function ref(el) {
            return _this5.backward = el;
          },
          className: className,
          onClick: this.navigateBack
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: "p-slidemenu-backward-icon pi pi-fw pi-chevron-left"
        }), /*#__PURE__*/React__default["default"].createElement("span", null, this.props.backLabel));
      }
    }, {
      key: "toggle",
      value: function toggle(event) {
        if (this.props.popup) {
          if (this.state.visible) this.hide(event);else this.show(event);
        }
      }
    }, {
      key: "show",
      value: function show(event) {
        var _this6 = this;

        this.target = event.currentTarget;
        var currentEvent = event;
        this.setState({
          visible: true
        }, function () {
          if (_this6.props.onShow) {
            _this6.props.onShow(currentEvent);
          }
        });
      }
    }, {
      key: "hide",
      value: function hide(event) {
        var _this7 = this;

        var currentEvent = event;
        this.setState({
          visible: false
        }, function () {
          if (_this7.props.onHide) {
            _this7.props.onHide(currentEvent);
          }
        });
      }
    }, {
      key: "onEnter",
      value: function onEnter() {
        if (this.props.autoZIndex) {
          ZIndexUtils.set('menu', this.menuRef.current, this.props.baseZIndex);
        }

        DomHandler.absolutePosition(this.menuRef.current, this.target);
      }
    }, {
      key: "onEntered",
      value: function onEntered() {
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindScrollListener();
      }
    }, {
      key: "onExit",
      value: function onExit() {
        this.target = null;
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindScrollListener();
      }
    }, {
      key: "onExited",
      value: function onExited() {
        ZIndexUtils.clear(this.menuRef.current);
        this.setState({
          level: 0
        });
      }
    }, {
      key: "bindDocumentClickListener",
      value: function bindDocumentClickListener() {
        var _this8 = this;

        if (!this.documentClickListener) {
          this.documentClickListener = function (event) {
            if (_this8.state.visible && _this8.isOutsideClicked(event)) {
              _this8.hide(event);
            }
          };

          document.addEventListener('click', this.documentClickListener);
        }
      }
    }, {
      key: "isOutsideClicked",
      value: function isOutsideClicked(event) {
        return this.menuRef && this.menuRef.current && !(this.menuRef.current.isSameNode(event.target) || this.menuRef.current.contains(event.target));
      }
    }, {
      key: "bindDocumentResizeListener",
      value: function bindDocumentResizeListener() {
        var _this9 = this;

        if (!this.documentResizeListener) {
          this.documentResizeListener = function (event) {
            if (_this9.state.visible && !DomHandler.isAndroid()) {
              _this9.hide(event);
            }
          };

          window.addEventListener('resize', this.documentResizeListener);
        }
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
        var _this10 = this;

        if (!this.scrollHandler) {
          this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, function (event) {
            if (_this10.state.visible) {
              _this10.hide(event);
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
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (this.props.model !== prevProps.model) {
          this.setState({
            level: 0
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();

        if (this.scrollHandler) {
          this.scrollHandler.destroy();
          this.scrollHandler = null;
        }

        ZIndexUtils.clear(this.menuRef.current);
      }
    }, {
      key: "renderElement",
      value: function renderElement() {
        var _this11 = this;

        var className = classNames('p-slidemenu p-component', {
          'p-slidemenu-overlay': this.props.popup
        }, this.props.className);
        var backward = this.renderBackward();
        return /*#__PURE__*/React__default["default"].createElement(CSSTransition, {
          nodeRef: this.menuRef,
          classNames: "p-connected-overlay",
          in: !this.props.popup || this.state.visible,
          timeout: {
            enter: 120,
            exit: 100
          },
          options: this.props.transitionOptions,
          unmountOnExit: true,
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onExit: this.onExit,
          onExited: this.onExited
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          ref: this.menuRef,
          id: this.props.id,
          className: className,
          style: this.props.style,
          onClick: this.onPanelClick
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-slidemenu-wrapper",
          style: {
            height: this.props.viewportHeight + 'px'
          }
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-slidemenu-content",
          ref: function ref(el) {
            return _this11.slideMenuContent = el;
          }
        }, /*#__PURE__*/React__default["default"].createElement(SlideMenuSub, {
          model: this.props.model,
          root: true,
          index: 0,
          menuWidth: this.props.menuWidth,
          effectDuration: this.props.effectDuration,
          level: this.state.level,
          parentActive: this.state.level === 0,
          onForward: this.navigateForward
        })), backward)));
      }
    }, {
      key: "render",
      value: function render() {
        var element = this.renderElement();
        return this.props.popup ? /*#__PURE__*/React__default["default"].createElement(core.Portal, {
          element: element,
          appendTo: this.props.appendTo
        }) : element;
      }
    }]);

    return SlideMenu;
  }(React.Component);

  _defineProperty(SlideMenu, "defaultProps", {
    id: null,
    model: null,
    popup: false,
    style: null,
    className: null,
    easing: 'ease-out',
    effectDuration: 250,
    backLabel: 'Back',
    menuWidth: 190,
    viewportHeight: 175,
    autoZIndex: true,
    baseZIndex: 0,
    appendTo: null,
    transitionOptions: null,
    onShow: null,
    onHide: null
  });

  exports.SlideMenu = SlideMenu;
  exports.SlideMenuSub = SlideMenuSub;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, React, ReactTransitionGroup, primereact.core);
