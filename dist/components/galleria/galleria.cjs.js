'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('primereact/core');
var reactTransitionGroup = require('react-transition-group');

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

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GalleriaItemComponent = /*#__PURE__*/function (_Component) {
  _inherits(GalleriaItemComponent, _Component);

  var _super = _createSuper$3(GalleriaItemComponent);

  function GalleriaItemComponent(props) {
    var _this;

    _classCallCheck(this, GalleriaItemComponent);

    _this = _super.call(this, props);
    _this.navForward = _this.navForward.bind(_assertThisInitialized(_this));
    _this.navBackward = _this.navBackward.bind(_assertThisInitialized(_this));
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.prev = _this.prev.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GalleriaItemComponent, [{
    key: "step",
    value: function step(index) {
      if (this.itemsContainer) {
        this.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(index * 100, "%, 0)") : "translate3d(".concat(index * 100, "%, 0, 0)");
        this.itemsContainer.style.transition = 'transform 500ms ease 0s';
      }
    }
  }, {
    key: "next",
    value: function next() {
      var nextItemIndex = this.props.activeItemIndex + 1;
      this.props.onActiveItemChange({
        index: this.props.circular && this.props.value.length - 1 === this.props.activeItemIndex ? 0 : nextItemIndex
      });
    }
  }, {
    key: "prev",
    value: function prev() {
      var prevItemIndex = this.props.activeItemIndex !== 0 ? this.props.activeItemIndex - 1 : 0;
      this.props.onActiveItemChange({
        index: this.props.circular && this.props.activeItemIndex === 0 ? this.props.value.length - 1 : prevItemIndex
      });
    }
  }, {
    key: "stopSlideShow",
    value: function stopSlideShow() {
      if (this.props.slideShowActive && this.props.stopSlideShow) {
        this.props.stopSlideShow();
      }
    }
  }, {
    key: "navBackward",
    value: function navBackward(e) {
      this.stopSlideShow();
      this.prev();

      if (e && e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "navForward",
    value: function navForward(e) {
      this.stopSlideShow();
      this.next();

      if (e && e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "onIndicatorClick",
    value: function onIndicatorClick(index) {
      this.stopSlideShow();
      this.props.onActiveItemChange({
        index: index
      });
    }
  }, {
    key: "onIndicatorMouseEnter",
    value: function onIndicatorMouseEnter(index) {
      if (this.props.changeItemOnIndicatorHover) {
        this.stopSlideShow();
        this.props.onActiveItemChange({
          index: index
        });
      }
    }
  }, {
    key: "onIndicatorKeyDown",
    value: function onIndicatorKeyDown(event, index) {
      if (event.which === 13) {
        this.stopSlideShow();
        this.props.onActiveItemChange({
          index: index
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoPlay) {
        this.props.startSlideShow();
      }
    }
  }, {
    key: "renderBackwardNavigator",
    value: function renderBackwardNavigator() {
      if (this.props.showItemNavigators) {
        var isDisabled = !this.props.circular && this.props.activeItemIndex === 0;
        var buttonClassName = classNames('p-galleria-item-prev p-galleria-item-nav p-link', {
          'p-disabled': isDisabled
        });
        return /*#__PURE__*/React__default["default"].createElement("button", {
          type: "button",
          className: buttonClassName,
          onClick: this.navBackward,
          disabled: isDisabled
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: "p-galleria-item-prev-icon pi pi-chevron-left"
        }), /*#__PURE__*/React__default["default"].createElement(core.Ripple, null));
      }

      return null;
    }
  }, {
    key: "renderForwardNavigator",
    value: function renderForwardNavigator() {
      if (this.props.showItemNavigators) {
        var isDisabled = !this.props.circular && this.props.activeItemIndex === this.props.value.length - 1;
        var buttonClassName = classNames('p-galleria-item-next p-galleria-item-nav p-link', {
          'p-disabled': isDisabled
        });
        return /*#__PURE__*/React__default["default"].createElement("button", {
          type: "button",
          className: buttonClassName,
          onClick: this.navForward,
          disabled: isDisabled
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: "p-galleria-item-next-icon pi pi-chevron-right"
        }), /*#__PURE__*/React__default["default"].createElement(core.Ripple, null));
      }

      return null;
    }
  }, {
    key: "renderCaption",
    value: function renderCaption() {
      if (this.props.caption) {
        var content = this.props.caption(this.props.value[this.props.activeItemIndex]);
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-galleria-caption"
        }, content);
      }

      return null;
    }
  }, {
    key: "renderIndicator",
    value: function renderIndicator(index) {
      var _this2 = this;

      var indicator = this.props.indicator && this.props.indicator(index);
      var isActive = this.props.activeItemIndex === index;
      var indicatorItemClassName = classNames('p-galleria-indicator', {
        'p-highlight': isActive
      });

      if (!indicator) {
        indicator = /*#__PURE__*/React__default["default"].createElement("button", {
          type: "button",
          tabIndex: -1,
          className: "p-link"
        }, /*#__PURE__*/React__default["default"].createElement(core.Ripple, null));
      }

      return /*#__PURE__*/React__default["default"].createElement("li", {
        className: indicatorItemClassName,
        key: 'p-galleria-indicator-' + index,
        tabIndex: 0,
        onClick: function onClick() {
          return _this2.onIndicatorClick(index);
        },
        onMouseEnter: function onMouseEnter() {
          return _this2.onIndicatorMouseEnter(index);
        },
        onKeyDown: function onKeyDown(e) {
          return _this2.onIndicatorKeyDown(e, index);
        }
      }, indicator);
    }
  }, {
    key: "renderIndicators",
    value: function renderIndicators() {
      if (this.props.showIndicators) {
        var indicatorsContentClassName = classNames('p-galleria-indicators p-reset', this.props.indicatorsContentClassName);
        var indicators = [];

        for (var i = 0; i < this.props.value.length; i++) {
          indicators.push(this.renderIndicator(i));
        }

        return /*#__PURE__*/React__default["default"].createElement("ul", {
          className: indicatorsContentClassName
        }, indicators);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var content = this.props.itemTemplate && this.props.itemTemplate(this.props.value[this.props.activeItemIndex]);
      var backwardNavigator = this.renderBackwardNavigator();
      var forwardNavigator = this.renderForwardNavigator();
      var caption = this.renderCaption();
      var indicators = this.renderIndicators();
      return /*#__PURE__*/React__default["default"].createElement("div", {
        ref: function ref(el) {
          return _this3.props.forwardRef(el);
        },
        className: "p-galleria-item-wrapper"
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "p-galleria-item-container"
      }, backwardNavigator, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "p-galleria-item"
      }, content), forwardNavigator, caption), indicators);
    }
  }]);

  return GalleriaItemComponent;
}(React.Component);

var GalleriaItem = /*#__PURE__*/React__default["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default["default"].createElement(GalleriaItemComponent, _extends({
    forwardRef: ref
  }, props));
});

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
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

var lastId = 0;
function UniqueComponentId () {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pr_id_';
  lastId++;
  return "".concat(prefix).concat(lastId);
}

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GalleriaThumbnailItem = /*#__PURE__*/function (_Component) {
  _inherits(GalleriaThumbnailItem, _Component);

  var _super = _createSuper$2(GalleriaThumbnailItem);

  function GalleriaThumbnailItem(props) {
    var _this;

    _classCallCheck(this, GalleriaThumbnailItem);

    _this = _super.call(this, props);
    _this.onItemClick = _this.onItemClick.bind(_assertThisInitialized(_this));
    _this.onItemKeyDown = _this.onItemKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GalleriaThumbnailItem, [{
    key: "onItemClick",
    value: function onItemClick(event) {
      this.props.onItemClick({
        originalEvent: event,
        index: this.props.index
      });
    }
  }, {
    key: "onItemKeyDown",
    value: function onItemKeyDown(event) {
      if (event.which === 13) {
        this.props.onItemClick({
          originalEvent: event,
          index: this.props.index
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.props.template && this.props.template(this.props.item);
      var itemClassName = classNames(this.props.className, 'p-galleria-thumbnail-item', {
        'p-galleria-thumbnail-item-current': this.props.current,
        'p-galleria-thumbnail-item-active': this.props.active,
        'p-galleria-thumbnail-item-start': this.props.start,
        'p-galleria-thumbnail-item-end': this.props.end
      });
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: itemClassName
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "p-galleria-thumbnail-item-content",
        tabIndex: this.props.active ? 0 : null,
        onClick: this.onItemClick,
        onKeyDown: this.onItemKeyDown
      }, content));
    }
  }]);

  return GalleriaThumbnailItem;
}(React.Component);

_defineProperty(GalleriaThumbnailItem, "defaultProps", {
  index: null,
  template: null,
  item: null,
  current: false,
  active: false,
  start: false,
  end: false,
  className: null,
  onItemClick: null
});

var GalleriaThumbnails = /*#__PURE__*/function (_Component2) {
  _inherits(GalleriaThumbnails, _Component2);

  var _super2 = _createSuper$2(GalleriaThumbnails);

  function GalleriaThumbnails(props) {
    var _this2;

    _classCallCheck(this, GalleriaThumbnails);

    _this2 = _super2.call(this, props);
    _this2.state = {
      numVisible: props.numVisible,
      totalShiftedItems: 0,
      page: 0
    };
    _this2.navForward = _this2.navForward.bind(_assertThisInitialized(_this2));
    _this2.navBackward = _this2.navBackward.bind(_assertThisInitialized(_this2));
    _this2.onTransitionEnd = _this2.onTransitionEnd.bind(_assertThisInitialized(_this2));
    _this2.onTouchStart = _this2.onTouchStart.bind(_assertThisInitialized(_this2));
    _this2.onTouchMove = _this2.onTouchMove.bind(_assertThisInitialized(_this2));
    _this2.onTouchEnd = _this2.onTouchEnd.bind(_assertThisInitialized(_this2));
    _this2.onItemClick = _this2.onItemClick.bind(_assertThisInitialized(_this2));
    _this2.attributeSelector = UniqueComponentId();
    return _this2;
  }

  _createClass(GalleriaThumbnails, [{
    key: "step",
    value: function step(dir) {
      var totalShiftedItems = this.state.totalShiftedItems + dir;

      if (dir < 0 && -1 * totalShiftedItems + this.state.numVisible > this.props.value.length - 1) {
        totalShiftedItems = this.state.numVisible - this.props.value.length;
      } else if (dir > 0 && totalShiftedItems > 0) {
        totalShiftedItems = 0;
      }

      if (this.props.circular) {
        if (dir < 0 && this.props.value.length - 1 === this.props.activeItemIndex) {
          totalShiftedItems = 0;
        } else if (dir > 0 && this.props.activeItemIndex === 0) {
          totalShiftedItems = this.state.numVisible - this.props.value.length;
        }
      }

      if (this.itemsContainer) {
        DomHandler.removeClass(this.itemsContainer, 'p-items-hidden');
        this.itemsContainer.style.transform = this.props.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.state.numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.state.numVisible), "%, 0, 0)");
        this.itemsContainer.style.transition = 'transform 500ms ease 0s';
      }

      this.setState({
        totalShiftedItems: totalShiftedItems
      });
    }
  }, {
    key: "stopSlideShow",
    value: function stopSlideShow() {
      if (this.props.slideShowActive && this.props.stopSlideShow) {
        this.props.stopSlideShow();
      }
    }
  }, {
    key: "getMedianItemIndex",
    value: function getMedianItemIndex() {
      var index = Math.floor(this.state.numVisible / 2);
      return this.state.numVisible % 2 ? index : index - 1;
    }
  }, {
    key: "navBackward",
    value: function navBackward(e) {
      this.stopSlideShow();
      var prevItemIndex = this.props.activeItemIndex !== 0 ? this.props.activeItemIndex - 1 : 0;
      var diff = prevItemIndex + this.state.totalShiftedItems;

      if (this.state.numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.state.totalShiftedItems !== 0 || this.props.circular)) {
        this.step(1);
      }

      this.props.onActiveItemChange({
        index: this.props.circular && this.props.activeItemIndex === 0 ? this.props.value.length - 1 : prevItemIndex
      });

      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "navForward",
    value: function navForward(e) {
      this.stopSlideShow();
      var nextItemIndex = this.props.activeItemIndex + 1;

      if (nextItemIndex + this.state.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.state.totalShiftedItems < this.getTotalPageNumber() - 1 || this.props.circular)) {
        this.step(-1);
      }

      this.props.onActiveItemChange({
        index: this.props.circular && this.props.value.length - 1 === this.props.activeItemIndex ? 0 : nextItemIndex
      });

      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(event) {
      this.stopSlideShow();
      var selectedItemIndex = event.index;

      if (selectedItemIndex !== this.props.activeItemIndex) {
        var diff = selectedItemIndex + this.state.totalShiftedItems;
        var dir = 0;

        if (selectedItemIndex < this.props.activeItemIndex) {
          dir = this.state.numVisible - diff - 1 - this.getMedianItemIndex();

          if (dir > 0 && -1 * this.state.totalShiftedItems !== 0) {
            this.step(dir);
          }
        } else {
          dir = this.getMedianItemIndex() - diff;

          if (dir < 0 && -1 * this.state.totalShiftedItems < this.getTotalPageNumber() - 1) {
            this.step(dir);
          }
        }

        this.props.onActiveItemChange({
          index: selectedItemIndex
        });
      }
    }
  }, {
    key: "onTransitionEnd",
    value: function onTransitionEnd() {
      if (this.itemsContainer) {
        DomHandler.addClass(this.itemsContainer, 'p-items-hidden');
        this.itemsContainer.style.transition = '';
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

      if (this.props.isVertical) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    }
  }, {
    key: "changePageOnTouch",
    value: function changePageOnTouch(e, diff) {
      if (diff < 0) {
        // left
        this.navForward(e);
      } else {
        // right
        this.navBackward(e);
      }
    }
  }, {
    key: "getTotalPageNumber",
    value: function getTotalPageNumber() {
      return this.props.value.length > this.state.numVisible ? this.props.value.length - this.state.numVisible + 1 : 0;
    }
  }, {
    key: "createStyle",
    value: function createStyle() {
      if (!this.thumbnailsStyle) {
        this.thumbnailsStyle = document.createElement('style');
        document.body.appendChild(this.thumbnailsStyle);
      }

      var innerHTML = "\n            .p-galleria-thumbnail-items[".concat(this.attributeSelector, "] .p-galleria-thumbnail-item {\n                flex: 1 0 ").concat(100 / this.state.numVisible, "%\n            }\n        ");

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
          innerHTML += "\n                    @media screen and (max-width: ".concat(res.breakpoint, ") {\n                        .p-galleria-thumbnail-items[").concat(this.attributeSelector, "] .p-galleria-thumbnail-item {\n                            flex: 1 0 ").concat(100 / res.numVisible, "%\n                        }\n                    }\n                ");
        }
      }

      this.thumbnailsStyle.innerHTML = innerHTML;
    }
  }, {
    key: "calculatePosition",
    value: function calculatePosition() {
      if (this.itemsContainer && this.responsiveOptions) {
        var windowWidth = window.innerWidth;
        var matchedResponsiveData = {
          numVisible: this.props.numVisible
        };

        for (var i = 0; i < this.responsiveOptions.length; i++) {
          var res = this.responsiveOptions[i];

          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }

        if (this.state.numVisible !== matchedResponsiveData.numVisible) {
          this.setState({
            numVisible: matchedResponsiveData.numVisible
          });
        }
      }
    }
  }, {
    key: "bindDocumentListeners",
    value: function bindDocumentListeners() {
      var _this3 = this;

      if (!this.documentResizeListener) {
        this.documentResizeListener = function () {
          _this3.calculatePosition();
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
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.itemsContainer) {
        this.itemsContainer.setAttribute(this.attributeSelector, '');
      }

      this.createStyle();
      this.calculatePosition();

      if (this.props.responsiveOptions) {
        this.bindDocumentListeners();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var totalShiftedItems = this.state.totalShiftedItems;

      if (prevState.numVisible !== this.state.numVisible || prevProps.activeItemIndex !== this.props.activeItemIndex) {
        if (this.props.activeItemIndex <= this.getMedianItemIndex()) {
          totalShiftedItems = 0;
        } else if (this.props.value.length - this.state.numVisible + this.getMedianItemIndex() < this.props.activeItemIndex) {
          totalShiftedItems = this.state.numVisible - this.props.value.length;
        } else if (this.props.value.length - this.state.numVisible < this.props.activeItemIndex && this.state.numVisible % 2 === 0) {
          totalShiftedItems = this.props.activeItemIndex * -1 + this.getMedianItemIndex() + 1;
        } else {
          totalShiftedItems = this.props.activeItemIndex * -1 + this.getMedianItemIndex();
        }

        if (totalShiftedItems !== this.state.totalShiftedItems) {
          this.setState({
            totalShiftedItems: totalShiftedItems
          });
        }

        this.itemsContainer.style.transform = this.props.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.state.numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.state.numVisible), "%, 0, 0)");

        if (prevProps.activeItemIndex !== this.props.activeItemIndex) {
          DomHandler.removeClass(this.itemsContainer, 'p-items-hidden');
          this.itemsContainer.style.transition = 'transform 500ms ease 0s';
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.responsiveOptions) {
        this.unbindDocumentListeners();
      }
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this4 = this;

      return this.props.value.map(function (item, index) {
        var firstIndex = _this4.state.totalShiftedItems * -1,
            lastIndex = firstIndex + _this4.state.numVisible - 1,
            isActive = firstIndex <= index && lastIndex >= index,
            start = firstIndex === index,
            end = lastIndex === index,
            current = _this4.props.activeItemIndex === index;
        return /*#__PURE__*/React__default["default"].createElement(GalleriaThumbnailItem, {
          key: index,
          index: index,
          template: _this4.props.itemTemplate,
          item: item,
          active: isActive,
          start: start,
          end: end,
          onItemClick: _this4.onItemClick,
          current: current
        });
      });
    }
  }, {
    key: "renderBackwardNavigator",
    value: function renderBackwardNavigator() {
      if (this.props.showThumbnailNavigators) {
        var isDisabled = !this.props.circular && this.props.activeItemIndex === 0 || this.props.value.length <= this.state.numVisible;
        var buttonClassName = classNames('p-galleria-thumbnail-prev p-link', {
          'p-disabled': isDisabled
        }),
            iconClassName = classNames('p-galleria-thumbnail-prev-icon pi', {
          'pi-chevron-left': !this.props.isVertical,
          'pi-chevron-up': this.props.isVertical
        });
        return /*#__PURE__*/React__default["default"].createElement("button", {
          className: buttonClassName,
          onClick: this.navBackward,
          disabled: isDisabled
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: iconClassName
        }), /*#__PURE__*/React__default["default"].createElement(core.Ripple, null));
      }

      return null;
    }
  }, {
    key: "renderForwardNavigator",
    value: function renderForwardNavigator() {
      if (this.props.showThumbnailNavigators) {
        var isDisabled = !this.props.circular && this.props.activeItemIndex === this.props.value.length - 1 || this.props.value.length <= this.state.numVisible;
        var buttonClassName = classNames('p-galleria-thumbnail-next p-link', {
          'p-disabled': isDisabled
        }),
            iconClassName = classNames('p-galleria-thumbnail-next-icon pi', {
          'pi-chevron-right': !this.props.isVertical,
          'pi-chevron-down': this.props.isVertical
        });
        return /*#__PURE__*/React__default["default"].createElement("button", {
          className: buttonClassName,
          onClick: this.navForward,
          disabled: isDisabled
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          className: iconClassName
        }), /*#__PURE__*/React__default["default"].createElement(core.Ripple, null));
      }

      return null;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this5 = this;

      var items = this.renderItems();
      var height = this.props.isVertical ? this.props.contentHeight : '';
      var backwardNavigator = this.renderBackwardNavigator();
      var forwardNavigator = this.renderForwardNavigator();
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "p-galleria-thumbnail-container"
      }, backwardNavigator, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "p-galleria-thumbnail-items-container",
        style: {
          'height': height
        }
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        ref: function ref(el) {
          return _this5.itemsContainer = el;
        },
        className: "p-galleria-thumbnail-items",
        onTransitionEnd: this.onTransitionEnd,
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd
      }, items)), forwardNavigator);
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.renderContent();
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "p-galleria-thumbnail-wrapper"
      }, content);
    }
  }]);

  return GalleriaThumbnails;
}(React.Component);

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

      var props = _objectSpread$1(_objectSpread$1(_objectSpread$1({}, mutableProps), this.props.options || {}), immutableProps);

      return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.CSSTransition, props, this.props.children);
    }
  }]);

  return CSSTransition;
}(React.Component);

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Galleria = /*#__PURE__*/function (_Component) {
  _inherits(Galleria, _Component);

  var _super = _createSuper(Galleria);

  function Galleria(props) {
    var _this;

    _classCallCheck(this, Galleria);

    _this = _super.call(this, props);
    _this.state = {
      visible: false,
      slideShowActive: false
    };

    if (!_this.props.onItemChange) {
      _this.state = _objectSpread(_objectSpread({}, _this.state), {}, {
        activeIndex: props.activeIndex
      });
    }

    _this.onActiveItemChange = _this.onActiveItemChange.bind(_assertThisInitialized(_this));
    _this.show = _this.show.bind(_assertThisInitialized(_this));
    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
    _this.startSlideShow = _this.startSlideShow.bind(_assertThisInitialized(_this));
    _this.stopSlideShow = _this.stopSlideShow.bind(_assertThisInitialized(_this));
    _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
    _this.onEntering = _this.onEntering.bind(_assertThisInitialized(_this));
    _this.onEntered = _this.onEntered.bind(_assertThisInitialized(_this));
    _this.onExit = _this.onExit.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    _this.galleriaRef = /*#__PURE__*/React__default["default"].createRef();
    return _this;
  }

  _createClass(Galleria, [{
    key: "activeItemIndex",
    get: function get() {
      return this.props.onItemChange ? this.props.activeIndex : this.state.activeIndex;
    }
  }, {
    key: "onActiveItemChange",
    value: function onActiveItemChange(event) {
      if (this.props.onItemChange) {
        this.props.onItemChange(event);
      } else {
        this.setState({
          activeIndex: event.index
        });
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.setState({
        visible: true
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.setState({
        visible: false
      });
    }
  }, {
    key: "onEnter",
    value: function onEnter() {
      DomHandler.addClass(document.body, 'p-overflow-hidden');
    }
  }, {
    key: "onEntering",
    value: function onEntering() {
      ZIndexUtils.set('modal', this.mask, this.props.baseZIndex);
      DomHandler.addClass(this.mask, 'p-component-overlay');
    }
  }, {
    key: "onEntered",
    value: function onEntered() {
      this.props.onShow && this.props.onShow();
    }
  }, {
    key: "onExit",
    value: function onExit() {
      DomHandler.removeClass(document.body, 'p-overflow-hidden');
      DomHandler.addClass(this.mask, 'p-galleria-mask-leave');
    }
  }, {
    key: "onExited",
    value: function onExited() {
      ZIndexUtils.clear(this.mask);
      this.props.onHide && this.props.onHide();
    }
  }, {
    key: "isAutoPlayActive",
    value: function isAutoPlayActive() {
      return this.state.slideShowActive;
    }
  }, {
    key: "startSlideShow",
    value: function startSlideShow() {
      var _this2 = this;

      this.interval = setInterval(function () {
        var activeIndex = _this2.props.circular && _this2.props.value.length - 1 === _this2.activeItemIndex ? 0 : _this2.activeItemIndex + 1;

        _this2.onActiveItemChange({
          index: activeIndex
        });
      }, this.props.transitionInterval);
      this.setState({
        slideShowActive: true
      });
    }
  }, {
    key: "stopSlideShow",
    value: function stopSlideShow() {
      if (this.interval) {
        clearInterval(this.interval);
      }

      this.setState({
        slideShowActive: false
      });
    }
  }, {
    key: "getPositionClassName",
    value: function getPositionClassName(preClassName, position) {
      var positions = ['top', 'left', 'bottom', 'right'];
      var pos = positions.find(function (item) {
        return item === position;
      });
      return pos ? "".concat(preClassName, "-").concat(pos) : '';
    }
  }, {
    key: "isVertical",
    value: function isVertical() {
      return this.props.thumbnailsPosition === 'left' || this.props.thumbnailsPosition === 'right';
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.slideShowActive) {
        this.stopSlideShow();
      }

      ZIndexUtils.clear(this.mask);
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      if (this.props.header) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-galleria-header"
        }, this.props.header);
      }

      return null;
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      if (this.props.footer) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-galleria-footer"
        }, this.props.footer);
      }

      return null;
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var _this3 = this;

      var isVertical = this.isVertical();
      var thumbnailsPosClassName = this.props.showThumbnails && this.getPositionClassName('p-galleria-thumbnails', this.props.thumbnailsPosition);
      var indicatorPosClassName = this.props.showIndicators && this.getPositionClassName('p-galleria-indicators', this.props.indicatorsPosition);
      var galleriaClassName = classNames('p-galleria p-component', this.props.className, {
        'p-galleria-fullscreen': this.props.fullScreen,
        'p-galleria-indicator-onitem': this.props.showIndicatorsOnItem,
        'p-galleria-item-nav-onhover': this.props.showItemNavigatorsOnHover && !this.props.fullScreen
      }, thumbnailsPosClassName, indicatorPosClassName);
      var closeIcon = this.props.fullScreen && /*#__PURE__*/React__default["default"].createElement("button", {
        type: "button",
        className: "p-galleria-close p-link",
        onClick: this.hide
      }, /*#__PURE__*/React__default["default"].createElement("span", {
        className: "p-galleria-close-icon pi pi-times"
      }), /*#__PURE__*/React__default["default"].createElement(core.Ripple, null));
      var header = this.renderHeader();
      var footer = this.renderFooter();
      var element = /*#__PURE__*/React__default["default"].createElement("div", {
        ref: this.galleriaRef,
        id: this.props.id,
        className: galleriaClassName,
        style: this.props.style
      }, closeIcon, header, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "p-galleria-content"
      }, /*#__PURE__*/React__default["default"].createElement(GalleriaItem, {
        ref: function ref(el) {
          return _this3.previewContent = el;
        },
        value: this.props.value,
        activeItemIndex: this.activeItemIndex,
        onActiveItemChange: this.onActiveItemChange,
        itemTemplate: this.props.item,
        circular: this.props.circular,
        caption: this.props.caption,
        showIndicators: this.props.showIndicators,
        changeItemOnIndicatorHover: this.props.changeItemOnIndicatorHover,
        indicator: this.props.indicator,
        showItemNavigators: this.props.showItemNavigators,
        autoPlay: this.props.autoPlay,
        slideShowActive: this.state.slideShowActive,
        startSlideShow: this.startSlideShow,
        stopSlideShow: this.stopSlideShow
      }), this.props.showThumbnails && /*#__PURE__*/React__default["default"].createElement(GalleriaThumbnails, {
        value: this.props.value,
        activeItemIndex: this.activeItemIndex,
        onActiveItemChange: this.onActiveItemChange,
        itemTemplate: this.props.thumbnail,
        numVisible: this.props.numVisible,
        responsiveOptions: this.props.responsiveOptions,
        circular: this.props.circular,
        isVertical: isVertical,
        contentHeight: this.props.verticalThumbnailViewPortHeight,
        showThumbnailNavigators: this.props.showThumbnailNavigators,
        autoPlay: this.props.autoPlay,
        slideShowActive: this.state.slideShowActive,
        stopSlideShow: this.stopSlideShow
      })), footer);
      return element;
    }
  }, {
    key: "renderGalleria",
    value: function renderGalleria() {
      var _this4 = this;

      var element = this.renderElement();

      if (this.props.fullScreen) {
        var maskClassName = classNames('p-galleria-mask', {
          'p-galleria-visible': this.state.visible
        });
        var galleriaWrapper = /*#__PURE__*/React__default["default"].createElement("div", {
          ref: function ref(el) {
            return _this4.mask = el;
          },
          className: maskClassName
        }, /*#__PURE__*/React__default["default"].createElement(CSSTransition, {
          nodeRef: this.galleriaRef,
          classNames: "p-galleria",
          in: this.state.visible,
          timeout: {
            enter: 150,
            exit: 150
          },
          options: this.props.transitionOptions,
          unmountOnExit: true,
          onEnter: this.onEnter,
          onEntering: this.onEntering,
          onEntered: this.onEntered,
          onExit: this.onExit,
          onExited: this.onExited
        }, element));
        return /*#__PURE__*/React__default["default"].createElement(core.Portal, {
          element: galleriaWrapper
        });
      } else {
        return element;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.value && this.props.value.length > 0 && this.renderGalleria();
    }
  }]);

  return Galleria;
}(React.Component);

_defineProperty(Galleria, "defaultProps", {
  id: null,
  value: null,
  activeIndex: 0,
  fullScreen: false,
  item: null,
  thumbnail: null,
  indicator: null,
  caption: null,
  className: null,
  style: null,
  header: null,
  footer: null,
  numVisible: 3,
  responsiveOptions: null,
  showItemNavigators: false,
  showThumbnailNavigators: true,
  showItemNavigatorsOnHover: false,
  changeItemOnIndicatorHover: false,
  circular: false,
  autoPlay: false,
  transitionInterval: 4000,
  showThumbnails: true,
  thumbnailsPosition: "bottom",
  verticalThumbnailViewPortHeight: "300px",
  showIndicators: false,
  showIndicatorsOnItem: false,
  indicatorsPosition: "bottom",
  baseZIndex: 0,
  transitionOptions: null,
  onItemChange: null
});

exports.Galleria = Galleria;
