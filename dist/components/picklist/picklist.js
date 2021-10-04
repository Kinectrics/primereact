this.primereact = this.primereact || {};
this.primereact.picklist = (function (exports, React, core, button) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
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

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

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

  function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var PickListItem = /*#__PURE__*/function (_Component) {
    _inherits(PickListItem, _Component);

    var _super = _createSuper$4(PickListItem);

    function PickListItem(props) {
      var _this;

      _classCallCheck(this, PickListItem);

      _this = _super.call(this, props);
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
      _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(PickListItem, [{
      key: "onClick",
      value: function onClick(event) {
        if (this.props.onClick) {
          this.props.onClick({
            originalEvent: event,
            value: this.props.value
          });
        }
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(event) {
        if (this.props.onKeyDown) {
          this.props.onKeyDown({
            originalEvent: event,
            value: this.props.value
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var content = this.props.template ? this.props.template(this.props.value) : this.props.value;
        var className = classNames('p-picklist-item', {
          'p-highlight': this.props.selected
        }, this.props.className);
        return /*#__PURE__*/React__default["default"].createElement("li", {
          className: className,
          onClick: this.onClick,
          onKeyDown: this.onKeyDown,
          tabIndex: this.props.tabIndex,
          role: "option",
          "aria-selected": this.props.selected
        }, content, /*#__PURE__*/React__default["default"].createElement(core.Ripple, null));
      }
    }]);

    return PickListItem;
  }(React.Component);

  _defineProperty(PickListItem, "defaultProps", {
    value: null,
    className: null,
    template: null,
    selected: false,
    tabIndex: null,
    onClick: null,
    onKeyDown: null
  });

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var PickListSubListComponent = /*#__PURE__*/function (_Component) {
    _inherits(PickListSubListComponent, _Component);

    var _super = _createSuper$3(PickListSubListComponent);

    function PickListSubListComponent(props) {
      var _this;

      _classCallCheck(this, PickListSubListComponent);

      _this = _super.call(this, props);
      _this.onItemClick = _this.onItemClick.bind(_assertThisInitialized(_this));
      _this.onItemKeyDown = _this.onItemKeyDown.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(PickListSubListComponent, [{
      key: "onItemClick",
      value: function onItemClick(event) {
        var originalEvent = event.originalEvent;
        var item = event.value;

        var selection = _toConsumableArray(this.props.selection);

        var index = ObjectUtils.findIndexInList(item, selection);
        var selected = index !== -1;
        var metaSelection = this.props.metaKeySelection;

        if (metaSelection) {
          var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;

          if (selected && metaKey) {
            selection.splice(index, 1);
          } else {
            if (!metaKey) {
              selection.length = 0;
            }

            selection.push(item);
          }
        } else {
          if (selected) selection.splice(index, 1);else selection.push(item);
        }

        if (this.props.onSelectionChange) {
          this.props.onSelectionChange({
            event: originalEvent,
            value: selection
          });
        }
      }
    }, {
      key: "onItemKeyDown",
      value: function onItemKeyDown(event) {
        var listItem = event.originalEvent.currentTarget;

        switch (event.originalEvent.which) {
          //down
          case 40:
            var nextItem = this.findNextItem(listItem);

            if (nextItem) {
              nextItem.focus();
            }

            event.originalEvent.preventDefault();
            break;
          //up

          case 38:
            var prevItem = this.findPrevItem(listItem);

            if (prevItem) {
              prevItem.focus();
            }

            event.originalEvent.preventDefault();
            break;
          //enter

          case 13:
            this.onItemClick(event);
            event.originalEvent.preventDefault();
            break;
        }
      }
    }, {
      key: "findNextItem",
      value: function findNextItem(item) {
        var nextItem = item.nextElementSibling;
        if (nextItem) return !DomHandler.hasClass(nextItem, 'p-picklist-item') ? this.findNextItem(nextItem) : nextItem;else return null;
      }
    }, {
      key: "findPrevItem",
      value: function findPrevItem(item) {
        var prevItem = item.previousElementSibling;
        if (prevItem) return !DomHandler.hasClass(prevItem, 'p-picklist-item') ? this.findPrevItem(prevItem) : prevItem;else return null;
      }
    }, {
      key: "isSelected",
      value: function isSelected(item) {
        return ObjectUtils.findIndexInList(item, this.props.selection) !== -1;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var header = null;
        var items = null;
        var wrapperClassName = classNames('p-picklist-list-wrapper', this.props.className);
        var listClassName = classNames('p-picklist-list', this.props.listClassName);

        if (this.props.header) {
          header = /*#__PURE__*/React__default["default"].createElement("div", {
            className: "p-picklist-header"
          }, ObjectUtils.getJSXElement(this.props.header, this.props));
        }

        if (this.props.list) {
          items = this.props.list.map(function (item, i) {
            return /*#__PURE__*/React__default["default"].createElement(PickListItem, {
              key: JSON.stringify(item),
              value: item,
              template: _this2.props.itemTemplate,
              selected: _this2.isSelected(item),
              onClick: _this2.onItemClick,
              onKeyDown: _this2.onItemKeyDown,
              tabIndex: _this2.props.tabIndex
            });
          });
        }

        return /*#__PURE__*/React__default["default"].createElement("div", {
          ref: this.props.forwardRef,
          className: wrapperClassName
        }, header, /*#__PURE__*/React__default["default"].createElement("ul", {
          className: listClassName,
          style: this.props.style,
          role: "listbox",
          "aria-multiselectable": true
        }, items));
      }
    }]);

    return PickListSubListComponent;
  }(React.Component);

  _defineProperty(PickListSubListComponent, "defaultProps", {
    forwardRef: null,
    list: null,
    selection: null,
    header: null,
    className: null,
    listClassName: null,
    style: null,
    showControls: true,
    metaKeySelection: true,
    tabIndex: null,
    itemTemplate: null,
    onItemClick: null,
    onSelectionChange: null
  });

  var PickListSubList = /*#__PURE__*/React__default["default"].forwardRef(function (props, ref) {
    return /*#__PURE__*/React__default["default"].createElement(PickListSubListComponent, _extends({
      forwardRef: ref
    }, props));
  });

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var PickListControls = /*#__PURE__*/function (_Component) {
    _inherits(PickListControls, _Component);

    var _super = _createSuper$2(PickListControls);

    function PickListControls() {
      var _this;

      _classCallCheck(this, PickListControls);

      _this = _super.call(this);
      _this.moveUp = _this.moveUp.bind(_assertThisInitialized(_this));
      _this.moveTop = _this.moveTop.bind(_assertThisInitialized(_this));
      _this.moveDown = _this.moveDown.bind(_assertThisInitialized(_this));
      _this.moveBottom = _this.moveBottom.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(PickListControls, [{
      key: "moveUp",
      value: function moveUp(event) {
        var selectedItems = this.props.selection;

        if (selectedItems && selectedItems.length) {
          var list = _toConsumableArray(this.props.list);

          for (var i = 0; i < selectedItems.length; i++) {
            var selectedItem = selectedItems[i];
            var selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list);

            if (selectedItemIndex !== 0) {
              var movedItem = list[selectedItemIndex];
              var temp = list[selectedItemIndex - 1];
              list[selectedItemIndex - 1] = movedItem;
              list[selectedItemIndex] = temp;
            } else {
              break;
            }
          }

          if (this.props.onReorder) {
            this.props.onReorder({
              originalEvent: event,
              value: list,
              direction: 'up'
            });
          }
        }
      }
    }, {
      key: "moveTop",
      value: function moveTop(event) {
        var selectedItems = this.props.selection;

        if (selectedItems && selectedItems.length) {
          var list = _toConsumableArray(this.props.list);

          for (var i = 0; i < selectedItems.length; i++) {
            var selectedItem = selectedItems[i];
            var selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list);

            if (selectedItemIndex !== 0) {
              var movedItem = list.splice(selectedItemIndex, 1)[0];
              list.unshift(movedItem);
            } else {
              break;
            }
          }

          if (this.props.onReorder) {
            this.props.onReorder({
              originalEvent: event,
              value: list,
              direction: 'top'
            });
          }
        }
      }
    }, {
      key: "moveDown",
      value: function moveDown(event) {
        var selectedItems = this.props.selection;

        if (selectedItems && selectedItems.length) {
          var list = _toConsumableArray(this.props.list);

          for (var i = selectedItems.length - 1; i >= 0; i--) {
            var selectedItem = selectedItems[i];
            var selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list);

            if (selectedItemIndex !== list.length - 1) {
              var movedItem = list[selectedItemIndex];
              var temp = list[selectedItemIndex + 1];
              list[selectedItemIndex + 1] = movedItem;
              list[selectedItemIndex] = temp;
            } else {
              break;
            }
          }

          if (this.props.onReorder) {
            this.props.onReorder({
              originalEvent: event,
              value: list,
              direction: 'down'
            });
          }

          this.movedDown = true;
        }
      }
    }, {
      key: "moveBottom",
      value: function moveBottom(event) {
        var selectedItems = this.props.selection;

        if (selectedItems && selectedItems.length) {
          var list = _toConsumableArray(this.props.list);

          for (var i = selectedItems.length - 1; i >= 0; i--) {
            var selectedItem = selectedItems[i];
            var selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list);

            if (selectedItemIndex !== list.length - 1) {
              var movedItem = list.splice(selectedItemIndex, 1)[0];
              list.push(movedItem);
            } else {
              break;
            }
          }

          if (this.props.onReorder) {
            this.props.onReorder({
              originalEvent: event,
              value: list,
              direction: 'bottom'
            });
          }
        }
      }
    }, {
      key: "render",
      value: function render() {
        var moveDisabled = !this.props.selection.length;
        var className = classNames('p-picklist-buttons', this.props.className);
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: className
        }, /*#__PURE__*/React__default["default"].createElement(button.Button, {
          disabled: moveDisabled,
          type: "button",
          icon: "pi pi-angle-up",
          onClick: this.moveUp
        }), /*#__PURE__*/React__default["default"].createElement(button.Button, {
          disabled: moveDisabled,
          type: "button",
          icon: "pi pi-angle-double-up",
          onClick: this.moveTop
        }), /*#__PURE__*/React__default["default"].createElement(button.Button, {
          disabled: moveDisabled,
          type: "button",
          icon: "pi pi-angle-down",
          onClick: this.moveDown
        }), /*#__PURE__*/React__default["default"].createElement(button.Button, {
          disabled: moveDisabled,
          type: "button",
          icon: "pi pi-angle-double-down",
          onClick: this.moveBottom
        }));
      }
    }]);

    return PickListControls;
  }(React.Component);

  _defineProperty(PickListControls, "defaultProps", {
    className: null,
    list: null,
    selection: null,
    onReorder: null
  });

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var PickListTransferControls = /*#__PURE__*/function (_Component) {
    _inherits(PickListTransferControls, _Component);

    var _super = _createSuper$1(PickListTransferControls);

    function PickListTransferControls() {
      var _this;

      _classCallCheck(this, PickListTransferControls);

      _this = _super.call(this);
      _this.moveRight = _this.moveRight.bind(_assertThisInitialized(_this));
      _this.moveAllRight = _this.moveAllRight.bind(_assertThisInitialized(_this));
      _this.moveLeft = _this.moveLeft.bind(_assertThisInitialized(_this));
      _this.moveAllLeft = _this.moveAllLeft.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(PickListTransferControls, [{
      key: "moveRight",
      value: function moveRight(event) {
        var selection = this.props.sourceSelection;

        if (selection && selection.length) {
          var targetList = _toConsumableArray(this.props.target);

          var sourceList = _toConsumableArray(this.props.source);

          for (var i = 0; i < selection.length; i++) {
            var selectedItem = selection[i];

            if (ObjectUtils.findIndexInList(selectedItem, targetList) === -1) {
              targetList.push(sourceList.splice(ObjectUtils.findIndexInList(selectedItem, sourceList), 1)[0]);
            }
          }

          if (this.props.onTransfer) {
            this.props.onTransfer({
              originalEvent: event,
              source: sourceList,
              target: targetList,
              direction: 'toTarget'
            });
          }
        }
      }
    }, {
      key: "moveAllRight",
      value: function moveAllRight(event) {
        if (this.props.source) {
          var targetList = [].concat(_toConsumableArray(this.props.target), _toConsumableArray(this.props.source));
          var sourceList = [];

          if (this.props.onTransfer) {
            this.props.onTransfer({
              originalEvent: event,
              source: sourceList,
              target: targetList,
              direction: 'allToTarget'
            });
          }
        }
      }
    }, {
      key: "moveLeft",
      value: function moveLeft(event) {
        var selection = this.props.targetSelection;

        if (selection && selection.length) {
          var targetList = _toConsumableArray(this.props.target);

          var sourceList = _toConsumableArray(this.props.source);

          for (var i = 0; i < selection.length; i++) {
            var selectedItem = selection[i];

            if (ObjectUtils.findIndexInList(selectedItem, sourceList) === -1) {
              sourceList.push(targetList.splice(ObjectUtils.findIndexInList(selectedItem, targetList), 1)[0]);
            }
          }

          if (this.props.onTransfer) {
            this.props.onTransfer({
              originalEvent: event,
              source: sourceList,
              target: targetList,
              direction: 'toSource'
            });
          }
        }
      }
    }, {
      key: "moveAllLeft",
      value: function moveAllLeft(event) {
        if (this.props.source) {
          var sourceList = [].concat(_toConsumableArray(this.props.source), _toConsumableArray(this.props.target));
          var targetList = [];

          if (this.props.onTransfer) {
            this.props.onTransfer({
              originalEvent: event,
              source: sourceList,
              target: targetList,
              direction: 'allToSource'
            });
          }
        }
      }
    }, {
      key: "render",
      value: function render() {
        var moveRightDisabled = !this.props.sourceSelection.length;
        var moveLeftDisabled = !this.props.targetSelection.length;
        var moveAllRightDisabled = !this.props.source.length;
        var moveAllLeftDisabled = !this.props.target.length;
        var className = classNames('p-picklist-buttons p-picklist-transfer-buttons', this.props.className);
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: className
        }, /*#__PURE__*/React__default["default"].createElement(button.Button, {
          disabled: moveRightDisabled,
          type: "button",
          icon: "pi pi-angle-right",
          onClick: this.moveRight
        }), /*#__PURE__*/React__default["default"].createElement(button.Button, {
          disabled: moveAllRightDisabled,
          type: "button",
          icon: "pi pi-angle-double-right",
          onClick: this.moveAllRight
        }), /*#__PURE__*/React__default["default"].createElement(button.Button, {
          disabled: moveLeftDisabled,
          type: "button",
          icon: "pi pi-angle-left",
          onClick: this.moveLeft
        }), /*#__PURE__*/React__default["default"].createElement(button.Button, {
          disabled: moveAllLeftDisabled,
          type: "button",
          icon: "pi pi-angle-double-left",
          onClick: this.moveAllLeft
        }));
      }
    }]);

    return PickListTransferControls;
  }(React.Component);

  _defineProperty(PickListTransferControls, "defaultProps", {
    source: null,
    target: null,
    sourceSelection: null,
    targetSelection: null,
    onTransfer: null
  });

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var PickList = /*#__PURE__*/function (_Component) {
    _inherits(PickList, _Component);

    var _super = _createSuper(PickList);

    function PickList(props) {
      var _this;

      _classCallCheck(this, PickList);

      _this = _super.call(this, props);
      _this.state = {};

      if (!_this.props.onSourceSelectionChange) {
        _this.state.sourceSelection = [];
      }

      if (!_this.props.onTargetSelectionChange) {
        _this.state.targetSelection = [];
      }

      _this.onSourceReorder = _this.onSourceReorder.bind(_assertThisInitialized(_this));
      _this.onTargetReorder = _this.onTargetReorder.bind(_assertThisInitialized(_this));
      _this.onTransfer = _this.onTransfer.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(PickList, [{
      key: "getSourceSelection",
      value: function getSourceSelection() {
        return this.props.onSourceSelectionChange ? this.props.sourceSelection : this.state.sourceSelection;
      }
    }, {
      key: "getTargetSelection",
      value: function getTargetSelection() {
        return this.props.onTargetSelectionChange ? this.props.targetSelection : this.state.targetSelection;
      }
    }, {
      key: "onSourceReorder",
      value: function onSourceReorder(event) {
        this.handleChange(event, event.value, this.props.target);
        this.reorderedListElement = this.sourceListElement;
        this.reorderDirection = event.direction;
      }
    }, {
      key: "onTargetReorder",
      value: function onTargetReorder(event) {
        this.handleChange(event, this.props.source, event.value);
        this.reorderedListElement = this.targetListElement;
        this.reorderDirection = event.direction;
      }
    }, {
      key: "handleScrollPosition",
      value: function handleScrollPosition(listElement, direction) {
        if (listElement) {
          var listContainer = DomHandler.findSingle(listElement, '.p-picklist-list');

          switch (direction) {
            case 'up':
              this.scrollInView(listContainer, -1);
              break;

            case 'top':
              listContainer.scrollTop = 0;
              break;

            case 'down':
              this.scrollInView(listContainer, 1);
              break;

            case 'bottom':
              listContainer.scrollTop = listContainer.scrollHeight;
              break;
          }
        }
      }
    }, {
      key: "handleChange",
      value: function handleChange(event, source, target) {
        if (this.props.onChange) {
          this.props.onChange({
            originalEvent: event.originalEvent,
            source: source,
            target: target
          });
        }
      }
    }, {
      key: "onTransfer",
      value: function onTransfer(event) {
        var originalEvent = event.originalEvent,
            source = event.source,
            target = event.target,
            direction = event.direction;

        switch (direction) {
          case 'toTarget':
            if (this.props.onMoveToTarget) {
              this.props.onMoveToTarget({
                originalEvent: originalEvent,
                value: this.getSourceSelection()
              });
            }

            break;

          case 'allToTarget':
            if (this.props.onMoveAllToTarget) {
              this.props.onMoveAllToTarget({
                originalEvent: originalEvent,
                value: this.props.source
              });
            }

            break;

          case 'toSource':
            if (this.props.onMoveToSource) {
              this.props.onMoveToSource({
                originalEvent: originalEvent,
                value: this.getTargetSelection()
              });
            }

            break;

          case 'allToSource':
            if (this.props.onMoveAllToSource) {
              this.props.onMoveAllToSource({
                originalEvent: originalEvent,
                value: this.props.target
              });
            }

            break;
        }

        this.onSelectionChange({
          originalEvent: originalEvent,
          value: []
        }, 'sourceSelection', this.props.onSourceSelectionChange);
        this.onSelectionChange({
          originalEvent: originalEvent,
          value: []
        }, 'targetSelection', this.props.onTargetSelectionChange);
        this.handleChange(event, source, target);
      }
    }, {
      key: "scrollInView",
      value: function scrollInView(listContainer) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var selectedItems = listContainer.getElementsByClassName('p-highlight');
        DomHandler.scrollInView(listContainer, direction === -1 ? selectedItems[0] : selectedItems[selectedItems.length - 1]);
      }
    }, {
      key: "onSelectionChange",
      value: function onSelectionChange(e, stateKey, callback) {
        if (callback) {
          callback(e);
        } else {
          this.setState(_defineProperty({}, stateKey, e.value));
        }

        if (this.state.sourceSelection.length && stateKey === 'targetSelection') {
          this.setState({
            sourceSelection: []
          });
        } else if (this.state.targetSelection.length && stateKey === 'sourceSelection') {
          this.setState({
            targetSelection: []
          });
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (this.reorderedListElement) {
          this.handleScrollPosition(this.reorderedListElement, this.reorderDirection);
          this.reorderedListElement = null;
          this.reorderDirection = null;
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var className = classNames('p-picklist p-component', this.props.className);
        var sourceSelection = this.getSourceSelection();
        var targetSelection = this.getTargetSelection();
        return /*#__PURE__*/React__default["default"].createElement("div", {
          id: this.props.id,
          className: className,
          style: this.props.style
        }, this.props.showSourceControls && /*#__PURE__*/React__default["default"].createElement(PickListControls, {
          list: this.props.source,
          selection: sourceSelection,
          onReorder: this.onSourceReorder,
          className: "p-picklist-source-controls"
        }), /*#__PURE__*/React__default["default"].createElement(PickListSubList, {
          ref: function ref(el) {
            return _this2.sourceListElement = el;
          },
          list: this.props.source,
          selection: sourceSelection,
          onSelectionChange: function onSelectionChange(e) {
            return _this2.onSelectionChange(e, 'sourceSelection', _this2.props.onSourceSelectionChange);
          },
          itemTemplate: this.props.itemTemplate,
          header: this.props.sourceHeader,
          style: this.props.sourceStyle,
          className: "p-picklist-source-wrapper",
          listClassName: "p-picklist-source",
          metaKeySelection: this.props.metaKeySelection,
          tabIndex: this.props.tabIndex
        }), /*#__PURE__*/React__default["default"].createElement(PickListTransferControls, {
          onTransfer: this.onTransfer,
          source: this.props.source,
          target: this.props.target,
          sourceSelection: sourceSelection,
          targetSelection: targetSelection
        }), /*#__PURE__*/React__default["default"].createElement(PickListSubList, {
          ref: function ref(el) {
            return _this2.targetListElement = el;
          },
          list: this.props.target,
          selection: targetSelection,
          onSelectionChange: function onSelectionChange(e) {
            return _this2.onSelectionChange(e, 'targetSelection', _this2.props.onTargetSelectionChange);
          },
          itemTemplate: this.props.itemTemplate,
          header: this.props.targetHeader,
          style: this.props.targetStyle,
          className: "p-picklist-target-wrapper",
          listClassName: "p-picklist-target",
          metaKeySelection: this.props.metaKeySelection,
          tabIndex: this.props.tabIndex
        }), this.props.showTargetControls && /*#__PURE__*/React__default["default"].createElement(PickListControls, {
          list: this.props.target,
          selection: targetSelection,
          onReorder: this.onTargetReorder,
          className: "p-picklist-target-controls"
        }));
      }
    }]);

    return PickList;
  }(React.Component);

  _defineProperty(PickList, "defaultProps", {
    id: null,
    source: null,
    target: null,
    sourceHeader: null,
    targetHeader: null,
    style: null,
    className: null,
    sourceStyle: null,
    targetStyle: null,
    sourceSelection: null,
    targetSelection: null,
    showSourceControls: true,
    showTargetControls: true,
    metaKeySelection: true,
    tabIndex: 0,
    itemTemplate: null,
    onChange: null,
    onMoveToSource: null,
    onMoveAllToSource: null,
    onMoveToTarget: null,
    onMoveAllToTarget: null,
    onSourceSelectionChange: null,
    onTargetSelectionChange: null
  });

  exports.PickList = PickList;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, React, primereact.core, primereact.button);
