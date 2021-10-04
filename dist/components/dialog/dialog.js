this.primereact = this.primereact || {};
this.primereact.dialog = (function (exports, React, reactTransitionGroup, core) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  var Dialog = /*#__PURE__*/function (_Component) {
    _inherits(Dialog, _Component);

    var _super = _createSuper(Dialog);

    function Dialog(props) {
      var _this;

      _classCallCheck(this, Dialog);

      _this = _super.call(this, props);
      _this.state = {
        id: props.id,
        maskVisible: props.visible,
        visible: false
      };

      if (!_this.props.onMaximize) {
        _this.state.maximized = props.maximized;
      }

      _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
      _this.toggleMaximize = _this.toggleMaximize.bind(_assertThisInitialized(_this));
      _this.onDragStart = _this.onDragStart.bind(_assertThisInitialized(_this));
      _this.onResizeStart = _this.onResizeStart.bind(_assertThisInitialized(_this));
      _this.onMaskClick = _this.onMaskClick.bind(_assertThisInitialized(_this));
      _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
      _this.onEntered = _this.onEntered.bind(_assertThisInitialized(_this));
      _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
      _this.attributeSelector = UniqueComponentId();
      _this.dialogRef = /*#__PURE__*/React__default["default"].createRef();
      return _this;
    }

    _createClass(Dialog, [{
      key: "onClose",
      value: function onClose(event) {
        this.props.onHide();
        event.preventDefault();
      }
    }, {
      key: "focus",
      value: function focus() {
        var activeElement = document.activeElement;
        var isActiveElementInDialog = activeElement && this.dialogRef && this.dialogRef.current.contains(activeElement);

        if (!isActiveElementInDialog && this.props.closable && this.props.showHeader) {
          this.closeElement.focus();
        }
      }
    }, {
      key: "onMaskClick",
      value: function onMaskClick(event) {
        if (this.props.dismissableMask && this.props.modal && this.mask === event.target) {
          this.onClose(event);
        }
      }
    }, {
      key: "toggleMaximize",
      value: function toggleMaximize(event) {
        var maximized = !this.maximized;

        if (this.props.onMaximize) {
          this.props.onMaximize({
            originalEvent: event,
            maximized: maximized
          });
        } else {
          this.setState({
            maximized: maximized
          }, this.changeScrollOnMaximizable);
        }

        event.preventDefault();
      }
    }, {
      key: "onDragStart",
      value: function onDragStart(event) {
        if (DomHandler.hasClass(event.target, 'p-dialog-header-icon') || DomHandler.hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
          return;
        }

        if (this.props.draggable) {
          this.dragging = true;
          this.lastPageX = event.pageX;
          this.lastPageY = event.pageY;
          this.dialogEl.style.margin = '0';
          DomHandler.addClass(document.body, 'p-unselectable-text');

          if (this.props.onDragStart) {
            this.props.onDragStart(event);
          }
        }
      }
    }, {
      key: "onDrag",
      value: function onDrag(event) {
        if (this.dragging) {
          var width = DomHandler.getOuterWidth(this.dialogEl);
          var height = DomHandler.getOuterHeight(this.dialogEl);
          var deltaX = event.pageX - this.lastPageX;
          var deltaY = event.pageY - this.lastPageY;
          var offset = this.dialogEl.getBoundingClientRect();
          var leftPos = offset.left + deltaX;
          var topPos = offset.top + deltaY;
          var viewport = DomHandler.getViewport();
          this.dialogEl.style.position = 'fixed';

          if (this.props.keepInViewport) {
            if (leftPos >= this.props.minX && leftPos + width < viewport.width) {
              this.lastPageX = event.pageX;
              this.dialogEl.style.left = leftPos + 'px';
            }

            if (topPos >= this.props.minY && topPos + height < viewport.height) {
              this.lastPageY = event.pageY;
              this.dialogEl.style.top = topPos + 'px';
            }
          } else {
            this.lastPageX = event.pageX;
            this.dialogEl.style.left = leftPos + 'px';
            this.lastPageY = event.pageY;
            this.dialogEl.style.top = topPos + 'px';
          }

          if (this.props.onDrag) {
            this.props.onDrag(event);
          }
        }
      }
    }, {
      key: "onDragEnd",
      value: function onDragEnd(event) {
        if (this.dragging) {
          this.dragging = false;
          DomHandler.removeClass(document.body, 'p-unselectable-text');

          if (this.props.onDragEnd) {
            this.props.onDragEnd(event);
          }
        }
      }
    }, {
      key: "onResizeStart",
      value: function onResizeStart(event) {
        if (this.props.resizable) {
          this.resizing = true;
          this.lastPageX = event.pageX;
          this.lastPageY = event.pageY;
          DomHandler.addClass(document.body, 'p-unselectable-text');

          if (this.props.onResizeStart) {
            this.props.onResizeStart(event);
          }
        }
      }
    }, {
      key: "convertToPx",
      value: function convertToPx(value, property, viewport) {
        !viewport && (viewport = DomHandler.getViewport());
        var val = parseInt(value);

        if (/^(\d+|(\.\d+))(\.\d+)?%$/.test(value)) {
          return val * (viewport[property] / 100);
        }

        return val;
      }
    }, {
      key: "onResize",
      value: function onResize(event) {
        if (this.resizing) {
          var deltaX = event.pageX - this.lastPageX;
          var deltaY = event.pageY - this.lastPageY;
          var width = DomHandler.getOuterWidth(this.dialogEl);
          var height = DomHandler.getOuterHeight(this.dialogEl);
          var offset = this.dialogEl.getBoundingClientRect();
          var viewport = DomHandler.getViewport();
          var newWidth = width + deltaX;
          var newHeight = height + deltaY;
          var minWidth = this.convertToPx(this.dialogEl.style.minWidth, 'width', viewport);
          var minHeight = this.convertToPx(this.dialogEl.style.minHeight, 'height', viewport);
          var hasBeenDragged = !parseInt(this.dialogEl.style.top) || !parseInt(this.dialogEl.style.left);

          if (hasBeenDragged) {
            newWidth += deltaX;
            newHeight += deltaY;
          }

          if ((!minWidth || newWidth > minWidth) && offset.left + newWidth < viewport.width) {
            this.dialogEl.style.width = newWidth + 'px';
          }

          if ((!minHeight || newHeight > minHeight) && offset.top + newHeight < viewport.height) {
            this.dialogEl.style.height = newHeight + 'px';
          }

          this.lastPageX = event.pageX;
          this.lastPageY = event.pageY;

          if (this.props.onResize) {
            this.props.onResize(event);
          }
        }
      }
    }, {
      key: "onResizeEnd",
      value: function onResizeEnd(event) {
        if (this.resizing) {
          this.resizing = false;
          DomHandler.removeClass(document.body, 'p-unselectable-text');

          if (this.props.onResizeEnd) {
            this.props.onResizeEnd(event);
          }
        }
      }
    }, {
      key: "resetPosition",
      value: function resetPosition() {
        this.dialogEl.style.position = '';
        this.dialogEl.style.left = '';
        this.dialogEl.style.top = '';
        this.dialogEl.style.margin = '';
      }
    }, {
      key: "getPositionClass",
      value: function getPositionClass() {
        var _this2 = this;

        var positions = ['center', 'left', 'right', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
        var pos = positions.find(function (item) {
          return item === _this2.props.position || item.replace('-', '') === _this2.props.position;
        });
        return pos ? "p-dialog-".concat(pos) : '';
      }
    }, {
      key: "maximized",
      get: function get() {
        return this.props.onMaximize ? this.props.maximized : this.state.maximized;
      }
    }, {
      key: "dialogEl",
      get: function get() {
        return this.dialogRef.current;
      }
    }, {
      key: "onEnter",
      value: function onEnter() {
        this.dialogEl.setAttribute(this.attributeSelector, '');
      }
    }, {
      key: "onEntered",
      value: function onEntered() {
        if (this.props.onShow) {
          this.props.onShow();
        }

        if (this.props.focusOnShow) {
          this.focus();
        }

        this.enableDocumentSettings();
      }
    }, {
      key: "onExited",
      value: function onExited() {
        this.dragging = false;
        ZIndexUtils.clear(this.mask);
        this.setState({
          maskVisible: false
        });
        this.disableDocumentSettings();
      }
    }, {
      key: "enableDocumentSettings",
      value: function enableDocumentSettings() {
        this.bindGlobalListeners();

        if (this.props.blockScroll || this.props.maximizable && this.maximized) {
          DomHandler.addClass(document.body, 'p-overflow-hidden');
        }
      }
    }, {
      key: "disableDocumentSettings",
      value: function disableDocumentSettings() {
        this.unbindGlobalListeners();

        if (this.props.modal) {
          var hasBlockScroll = document.primeDialogParams && document.primeDialogParams.some(function (param) {
            return param.hasBlockScroll;
          });

          if (!hasBlockScroll) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
          }
        } else if (this.props.blockScroll || this.props.maximizable && this.maximized) {
          DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }
      }
    }, {
      key: "bindGlobalListeners",
      value: function bindGlobalListeners() {
        if (this.props.draggable) {
          this.bindDocumentDragListener();
        }

        if (this.props.resizable) {
          this.bindDocumentResizeListeners();
        }

        if (this.props.closeOnEscape && this.props.closable) {
          this.bindDocumentKeyDownListener();
        }
      }
    }, {
      key: "unbindGlobalListeners",
      value: function unbindGlobalListeners() {
        this.unbindDocumentDragListener();
        this.unbindDocumentResizeListeners();
        this.unbindDocumentKeyDownListener();
      }
    }, {
      key: "bindDocumentDragListener",
      value: function bindDocumentDragListener() {
        this.documentDragListener = this.onDrag.bind(this);
        this.documentDragEndListener = this.onDragEnd.bind(this);
        window.document.addEventListener('mousemove', this.documentDragListener);
        window.document.addEventListener('mouseup', this.documentDragEndListener);
      }
    }, {
      key: "unbindDocumentDragListener",
      value: function unbindDocumentDragListener() {
        if (this.documentDragListener && this.documentDragEndListener) {
          window.document.removeEventListener('mousemove', this.documentDragListener);
          window.document.removeEventListener('mouseup', this.documentDragEndListener);
          this.documentDragListener = null;
          this.documentDragEndListener = null;
        }
      }
    }, {
      key: "bindDocumentResizeListeners",
      value: function bindDocumentResizeListeners() {
        this.documentResizeListener = this.onResize.bind(this);
        this.documentResizeEndListener = this.onResizeEnd.bind(this);
        window.document.addEventListener('mousemove', this.documentResizeListener);
        window.document.addEventListener('mouseup', this.documentResizeEndListener);
      }
    }, {
      key: "unbindDocumentResizeListeners",
      value: function unbindDocumentResizeListeners() {
        if (this.documentResizeListener && this.documentResizeEndListener) {
          window.document.removeEventListener('mousemove', this.documentResizeListener);
          window.document.removeEventListener('mouseup', this.documentResizeEndListener);
          this.documentResizeListener = null;
          this.documentResizeEndListener = null;
        }
      }
    }, {
      key: "bindDocumentKeyDownListener",
      value: function bindDocumentKeyDownListener() {
        var _this3 = this;

        this.documentKeyDownListener = function (event) {
          var currentTarget = event.currentTarget;

          if (currentTarget && currentTarget.primeDialogParams) {
            var params = currentTarget.primeDialogParams;
            var paramLength = params.length;
            var dialogId = params[paramLength - 1] ? params[paramLength - 1].id : undefined;

            if (dialogId === _this3.state.id) {
              var dialog = document.getElementById(dialogId);

              if (event.which === 27) {
                _this3.onClose(event);

                event.stopImmediatePropagation();
                params.splice(paramLength - 1, 1);
              } else if (event.which === 9) {
                event.preventDefault();
                var focusableElements = DomHandler.getFocusableElements(dialog);

                if (focusableElements && focusableElements.length > 0) {
                  if (!document.activeElement) {
                    focusableElements[0].focus();
                  } else {
                    var focusedIndex = focusableElements.indexOf(document.activeElement);

                    if (event.shiftKey) {
                      if (focusedIndex === -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
                    } else {
                      if (focusedIndex === -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
                    }
                  }
                }
              }
            }
          }
        };

        var newParam = {
          id: this.state.id,
          hasBlockScroll: this.props.blockScroll
        };
        document.primeDialogParams = document.primeDialogParams ? [].concat(_toConsumableArray(document.primeDialogParams), [newParam]) : [newParam];
        document.addEventListener('keydown', this.documentKeyDownListener);
      }
    }, {
      key: "unbindDocumentKeyDownListener",
      value: function unbindDocumentKeyDownListener() {
        var _this4 = this;

        if (this.documentKeyDownListener) {
          document.removeEventListener('keydown', this.documentKeyDownListener);
          document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function (param) {
            return param.id !== _this4.state.id;
          });
          this.documentKeyDownListener = null;
        }
      }
    }, {
      key: "createStyle",
      value: function createStyle() {
        if (!this.styleElement) {
          this.styleElement = document.createElement('style');
          document.head.appendChild(this.styleElement);
          var innerHTML = '';

          for (var breakpoint in this.props.breakpoints) {
            innerHTML += "\n                    @media screen and (max-width: ".concat(breakpoint, ") {\n                        .p-dialog[").concat(this.attributeSelector, "] {\n                            width: ").concat(this.props.breakpoints[breakpoint], " !important;\n                        }\n                    }\n                ");
          }

          this.styleElement.innerHTML = innerHTML;
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this5 = this;

        if (!this.state.id) {
          this.setState({
            id: UniqueComponentId()
          });
        }

        if (this.props.visible) {
          this.setState({
            visible: true
          }, function () {
            ZIndexUtils.set('modal', _this5.mask, _this5.props.baseZIndex);
          });
        }

        if (this.props.breakpoints) {
          this.createStyle();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this6 = this;

        if (this.props.visible && !this.state.maskVisible) {
          this.setState({
            maskVisible: true
          }, function () {
            ZIndexUtils.set('modal', _this6.mask, _this6.props.baseZIndex);
          });
        }

        if (this.props.visible !== this.state.visible && this.state.maskVisible) {
          this.setState({
            visible: this.props.visible
          });
        }

        if (prevProps.maximized !== this.props.maximized && this.props.onMaximize) {
          this.changeScrollOnMaximizable();
        }
      }
    }, {
      key: "changeScrollOnMaximizable",
      value: function changeScrollOnMaximizable() {
        if (!this.props.blockScroll) {
          var funcName = this.maximized ? 'addClass' : 'removeClass';
          DomHandler[funcName](document.body, 'p-overflow-hidden');
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.disableDocumentSettings();

        if (this.styleElement) {
          document.head.removeChild(this.styleElement);
          this.styleElement = null;
        }

        ZIndexUtils.clear(this.mask);
      }
    }, {
      key: "renderCloseIcon",
      value: function renderCloseIcon() {
        var _this7 = this;

        if (this.props.closable) {
          return /*#__PURE__*/React__default["default"].createElement("button", {
            ref: function ref(el) {
              return _this7.closeElement = el;
            },
            type: "button",
            className: "p-dialog-header-icon p-dialog-header-close p-link",
            "aria-label": this.props.ariaCloseIconLabel,
            onClick: this.onClose
          }, /*#__PURE__*/React__default["default"].createElement("span", {
            className: "p-dialog-header-close-icon pi pi-times"
          }), /*#__PURE__*/React__default["default"].createElement(core.Ripple, null));
        }

        return null;
      }
    }, {
      key: "renderMaximizeIcon",
      value: function renderMaximizeIcon() {
        var iconClassName = classNames('p-dialog-header-maximize-icon pi', {
          'pi-window-maximize': !this.maximized,
          'pi-window-minimize': this.maximized
        });

        if (this.props.maximizable) {
          return /*#__PURE__*/React__default["default"].createElement("button", {
            type: "button",
            className: "p-dialog-header-icon p-dialog-header-maximize p-link",
            onClick: this.toggleMaximize
          }, /*#__PURE__*/React__default["default"].createElement("span", {
            className: iconClassName
          }), /*#__PURE__*/React__default["default"].createElement(core.Ripple, null));
        }

        return null;
      }
    }, {
      key: "renderHeader",
      value: function renderHeader() {
        var _this8 = this;

        if (this.props.showHeader) {
          var closeIcon = this.renderCloseIcon();
          var maximizeIcon = this.renderMaximizeIcon();
          var icons = ObjectUtils.getJSXElement(this.props.icons, this.props);
          var header = ObjectUtils.getJSXElement(this.props.header, this.props);
          return /*#__PURE__*/React__default["default"].createElement("div", {
            ref: function ref(el) {
              return _this8.headerEl = el;
            },
            className: "p-dialog-header",
            onMouseDown: this.onDragStart
          }, /*#__PURE__*/React__default["default"].createElement("div", {
            id: this.state.id + '_header',
            className: "p-dialog-title"
          }, header), /*#__PURE__*/React__default["default"].createElement("div", {
            className: "p-dialog-header-icons"
          }, icons, maximizeIcon, closeIcon));
        }

        return null;
      }
    }, {
      key: "renderContent",
      value: function renderContent() {
        var _this9 = this;

        var contentClassName = classNames('p-dialog-content', this.props.contentClassName);
        return /*#__PURE__*/React__default["default"].createElement("div", {
          id: this.state.id + '_content',
          ref: function ref(el) {
            return _this9.contentEl = el;
          },
          className: contentClassName,
          style: this.props.contentStyle
        }, this.props.children);
      }
    }, {
      key: "renderFooter",
      value: function renderFooter() {
        var _this10 = this;

        var footer = ObjectUtils.getJSXElement(this.props.footer, this.props);
        return footer && /*#__PURE__*/React__default["default"].createElement("div", {
          ref: function ref(el) {
            return _this10.footerElement = el;
          },
          className: "p-dialog-footer"
        }, footer);
      }
    }, {
      key: "renderResizer",
      value: function renderResizer() {
        if (this.props.resizable) {
          return /*#__PURE__*/React__default["default"].createElement("div", {
            className: "p-resizable-handle",
            style: {
              zIndex: 90
            },
            onMouseDown: this.onResizeStart
          });
        }

        return null;
      }
    }, {
      key: "renderElement",
      value: function renderElement() {
        var _this11 = this;

        var className = classNames('p-dialog p-component', this.props.className, {
          'p-dialog-rtl': this.props.rtl,
          'p-dialog-maximized': this.maximized
        });
        var maskClassName = classNames('p-dialog-mask', {
          'p-component-overlay': this.props.modal,
          'p-dialog-visible': this.state.maskVisible,
          'p-dialog-draggable': this.props.draggable,
          'p-dialog-resizable': this.props.resizable
        }, this.props.maskClassName, this.getPositionClass());
        var header = this.renderHeader();
        var content = this.renderContent();
        var footer = this.renderFooter();
        var resizer = this.renderResizer();
        var transitionTimeout = {
          enter: this.props.position === 'center' ? 150 : 300,
          exit: this.props.position === 'center' ? 150 : 300
        };
        return /*#__PURE__*/React__default["default"].createElement("div", {
          ref: function ref(el) {
            return _this11.mask = el;
          },
          className: maskClassName,
          onClick: this.onMaskClick
        }, /*#__PURE__*/React__default["default"].createElement(CSSTransition, {
          nodeRef: this.dialogRef,
          classNames: "p-dialog",
          timeout: transitionTimeout,
          in: this.state.visible,
          options: this.props.transitionOptions,
          unmountOnExit: true,
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onExited: this.onExited
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          ref: this.dialogRef,
          id: this.state.id,
          className: className,
          style: this.props.style,
          role: "dialog",
          "aria-labelledby": this.state.id + '_header',
          "aria-describedby": this.state.id + '_content',
          "aria-modal": this.props.modal
        }, header, content, footer, resizer)));
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.maskVisible) {
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

    return Dialog;
  }(React.Component);

  _defineProperty(Dialog, "defaultProps", {
    id: null,
    header: null,
    footer: null,
    visible: false,
    position: 'center',
    draggable: true,
    resizable: true,
    modal: true,
    onHide: null,
    onShow: null,
    contentStyle: null,
    contentClassName: null,
    closeOnEscape: true,
    dismissableMask: false,
    rtl: false,
    closable: true,
    style: null,
    className: null,
    maskClassName: null,
    showHeader: true,
    appendTo: null,
    baseZIndex: 0,
    maximizable: false,
    blockScroll: false,
    icons: null,
    ariaCloseIconLabel: 'Close',
    focusOnShow: true,
    minX: 0,
    minY: 0,
    keepInViewport: true,
    maximized: false,
    breakpoints: null,
    transitionOptions: null,
    onMaximize: null,
    onDragStart: null,
    onDrag: null,
    onDragEnd: null,
    onResizeStart: null,
    onResize: null,
    onResizeEnd: null
  });

  exports.Dialog = Dialog;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, React, ReactTransitionGroup, primereact.core);
