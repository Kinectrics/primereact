this.primereact = this.primereact || {};
this.primereact.panelmenu = (function (exports, React, reactTransitionGroup) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
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

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
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

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var PanelMenuSub = /*#__PURE__*/function (_Component) {
    _inherits(PanelMenuSub, _Component);

    var _super = _createSuper(PanelMenuSub);

    function PanelMenuSub(props) {
      var _this;

      _classCallCheck(this, PanelMenuSub);

      _this = _super.call(this, props);
      _this.state = {
        activeItem: _this.findActiveItem()
      };
      return _this;
    }

    _createClass(PanelMenuSub, [{
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

        var activeItem = this.state.activeItem;
        var active = this.isItemActive(item);

        if (active) {
          item.expanded = false;
          this.setState({
            activeItem: this.props.multiple ? activeItem.filter(function (a_item) {
              return a_item !== item;
            }) : null
          });
        } else {
          if (!this.props.multiple && activeItem) {
            activeItem.expanded = false;
          }

          item.expanded = true;
          this.setState({
            activeItem: this.props.multiple ? [].concat(_toConsumableArray(activeItem || []), [item]) : item
          });
        }
      }
    }, {
      key: "findActiveItem",
      value: function findActiveItem() {
        if (this.props.model) {
          if (this.props.multiple) {
            return this.props.model.filter(function (item) {
              return item.expanded;
            });
          } else {
            var activeItem = null;
            this.props.model.forEach(function (item) {
              if (item.expanded) {
                if (!activeItem) activeItem = item;else item.expanded = false;
              }
            });
            return activeItem;
          }
        }

        return null;
      }
    }, {
      key: "isItemActive",
      value: function isItemActive(item) {
        return this.state.activeItem && (this.props.multiple ? this.state.activeItem.indexOf(item) > -1 : this.state.activeItem === item);
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
      value: function renderSubmenu(item, active) {
        var submenuWrapperClassName = classNames('p-toggleable-content', {
          'p-toggleable-content-collapsed': !active
        });
        var submenuContentRef = /*#__PURE__*/React__default["default"].createRef();

        if (item.items) {
          return /*#__PURE__*/React__default["default"].createElement(CSSTransition, {
            nodeRef: submenuContentRef,
            classNames: "p-toggleable-content",
            timeout: {
              enter: 1000,
              exit: 450
            },
            in: active,
            unmountOnExit: true
          }, /*#__PURE__*/React__default["default"].createElement("div", {
            ref: submenuContentRef,
            className: submenuWrapperClassName
          }, /*#__PURE__*/React__default["default"].createElement(PanelMenuSub, {
            model: item.items,
            multiple: this.props.multiple
          })));
        }

        return null;
      }
    }, {
      key: "renderMenuitem",
      value: function renderMenuitem(item, index) {
        var _this2 = this;

        var active = this.isItemActive(item);
        var className = classNames('p-menuitem', item.className);
        var linkClassName = classNames('p-menuitem-link', {
          'p-disabled': item.disabled
        });
        var iconClassName = classNames('p-menuitem-icon', item.icon);
        var submenuIconClassName = classNames('p-panelmenu-icon pi pi-fw', {
          'pi-angle-right': !active,
          'pi-angle-down': active
        });
        var icon = item.icon && /*#__PURE__*/React__default["default"].createElement("span", {
          className: iconClassName
        });
        var label = item.label && /*#__PURE__*/React__default["default"].createElement("span", {
          className: "p-menuitem-text"
        }, item.label);
        var submenuIcon = item.items && /*#__PURE__*/React__default["default"].createElement("span", {
          className: submenuIconClassName
        });
        var submenu = this.renderSubmenu(item, active);
        var content = /*#__PURE__*/React__default["default"].createElement("a", {
          href: item.url || '#',
          className: linkClassName,
          target: item.target,
          onClick: function onClick(event) {
            return _this2.onItemClick(event, item, index);
          },
          role: "menuitem",
          "aria-disabled": item.disabled
        }, submenuIcon, icon, label);

        if (item.template) {
          var defaultContentOptions = {
            onClick: function onClick(event) {
              return _this2.onItemClick(event, item, index);
            },
            className: linkClassName,
            labelClassName: 'p-menuitem-text',
            iconClassName: iconClassName,
            submenuIconClassName: submenuIconClassName,
            element: content,
            props: this.props,
            leaf: !item.items,
            active: active
          };
          content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
        }

        return /*#__PURE__*/React__default["default"].createElement("li", {
          key: item.label + '_' + index,
          className: className,
          style: item.style,
          role: "none"
        }, content, submenu);
      }
    }, {
      key: "renderItem",
      value: function renderItem(item, index) {
        if (item.separator) return this.renderSeparator(index);else return this.renderMenuitem(item, index);
      }
    }, {
      key: "renderMenu",
      value: function renderMenu() {
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
        var className = classNames('p-submenu-list', this.props.className);
        var menu = this.renderMenu();
        return /*#__PURE__*/React__default["default"].createElement("ul", {
          className: className,
          role: "tree"
        }, menu);
      }
    }]);

    return PanelMenuSub;
  }(React.Component);

  _defineProperty(PanelMenuSub, "defaultProps", {
    model: null,
    multiple: false
  });

  var PanelMenu = /*#__PURE__*/function (_Component2) {
    _inherits(PanelMenu, _Component2);

    var _super2 = _createSuper(PanelMenu);

    function PanelMenu(props) {
      var _this4;

      _classCallCheck(this, PanelMenu);

      _this4 = _super2.call(this, props);
      _this4.state = {
        id: props.id,
        activeItem: _this4.findActiveItem()
      };
      return _this4;
    }

    _createClass(PanelMenu, [{
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

        var activeItem = this.state.activeItem;
        var active = this.isItemActive(item);

        if (active) {
          item.expanded = false;
          this.setState({
            activeItem: this.props.multiple ? activeItem.filter(function (a_item) {
              return a_item !== item;
            }) : null
          });
        } else {
          if (!this.props.multiple && activeItem) {
            activeItem.expanded = false;
          }

          item.expanded = true;
          this.setState({
            activeItem: this.props.multiple ? [].concat(_toConsumableArray(activeItem || []), [item]) : item
          });
        }
      }
    }, {
      key: "findActiveItem",
      value: function findActiveItem() {
        if (this.props.model) {
          if (this.props.multiple) {
            return this.props.model.filter(function (item) {
              return item.expanded;
            });
          } else {
            var activeItem = null;
            this.props.model.forEach(function (item) {
              if (item.expanded) {
                if (!activeItem) activeItem = item;else item.expanded = false;
              }
            });
            return activeItem;
          }
        }

        return null;
      }
    }, {
      key: "isItemActive",
      value: function isItemActive(item) {
        return this.state.activeItem && (this.props.multiple ? this.state.activeItem.indexOf(item) > -1 : this.state.activeItem === item);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!this.state.id) {
          this.setState({
            id: UniqueComponentId()
          });
        }
      }
    }, {
      key: "renderPanel",
      value: function renderPanel(item, index) {
        var _this5 = this;

        var active = this.isItemActive(item);
        var className = classNames('p-panelmenu-panel', item.className);
        var headerClassName = classNames('p-component p-panelmenu-header', {
          'p-highlight': active,
          'p-disabled': item.disabled
        });
        var submenuIconClassName = classNames('p-panelmenu-icon pi', {
          'pi-chevron-right': !active,
          ' pi-chevron-down': active
        });
        var iconClassName = classNames('p-menuitem-icon', item.icon);
        var submenuIcon = item.items && /*#__PURE__*/React__default["default"].createElement("span", {
          className: submenuIconClassName
        });
        var itemIcon = item.icon && /*#__PURE__*/React__default["default"].createElement("span", {
          className: iconClassName
        });
        var label = item.label && /*#__PURE__*/React__default["default"].createElement("span", {
          className: "p-menuitem-text"
        }, item.label);
        var contentWrapperClassName = classNames('p-toggleable-content', {
          'p-toggleable-content-collapsed': !active
        });
        var menuContentRef = /*#__PURE__*/React__default["default"].createRef();
        var content = /*#__PURE__*/React__default["default"].createElement("a", {
          href: item.url || '#',
          className: "p-panelmenu-header-link",
          onClick: function onClick(e) {
            return _this5.onItemClick(e, item);
          },
          "aria-expanded": active,
          id: this.state.id + '_header',
          "aria-controls": this.state.id + 'content',
          "aria-disabled": item.disabled
        }, submenuIcon, itemIcon, label);

        if (item.template) {
          var defaultContentOptions = {
            onClick: function onClick(event) {
              return _this5.onItemClick(event, item);
            },
            className: 'p-panelmenu-header-link',
            labelClassName: 'p-menuitem-text',
            submenuIconClassName: submenuIconClassName,
            iconClassName: iconClassName,
            element: content,
            props: this.props,
            leaf: !item.items,
            active: active
          };
          content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
        }

        return /*#__PURE__*/React__default["default"].createElement("div", {
          key: item.label + '_' + index,
          className: className,
          style: item.style
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: headerClassName,
          style: item.style
        }, content), /*#__PURE__*/React__default["default"].createElement(CSSTransition, {
          nodeRef: menuContentRef,
          classNames: "p-toggleable-content",
          timeout: {
            enter: 1000,
            exit: 450
          },
          in: active,
          unmountOnExit: true,
          options: this.props.transitionOptions
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          ref: menuContentRef,
          className: contentWrapperClassName,
          role: "region",
          id: this.state.id + '_content',
          "aria-labelledby": this.state.id + '_header'
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-panelmenu-content"
        }, /*#__PURE__*/React__default["default"].createElement(PanelMenuSub, {
          model: item.items,
          className: "p-panelmenu-root-submenu",
          multiple: this.props.multiple
        })))));
      }
    }, {
      key: "renderPanels",
      value: function renderPanels() {
        var _this6 = this;

        if (this.props.model) {
          return this.props.model.map(function (item, index) {
            return _this6.renderPanel(item, index);
          });
        }

        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var className = classNames('p-panelmenu p-component', this.props.className);
        var panels = this.renderPanels();
        return /*#__PURE__*/React__default["default"].createElement("div", {
          id: this.props.id,
          className: className,
          style: this.props.style
        }, panels);
      }
    }]);

    return PanelMenu;
  }(React.Component);

  _defineProperty(PanelMenu, "defaultProps", {
    id: null,
    model: null,
    style: null,
    className: null,
    multiple: false,
    transitionOptions: null
  });

  exports.PanelMenu = PanelMenu;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, React, ReactTransitionGroup);
