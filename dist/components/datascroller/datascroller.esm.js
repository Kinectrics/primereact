import React, { Component } from 'react';

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var DataScroller = /*#__PURE__*/function (_Component) {
  _inherits(DataScroller, _Component);

  var _super = _createSuper(DataScroller);

  function DataScroller(props) {
    var _this;

    _classCallCheck(this, DataScroller);

    _this = _super.call(this, props);
    _this.state = {};
    _this.dataToRender = [];
    _this.value = _this.props.value;
    _this.first = 0;
    return _this;
  }

  _createClass(DataScroller, [{
    key: "handleDataChange",
    value: function handleDataChange() {
      if (this.props.lazy) {
        this.dataToRender = this.value;
        this.setState({
          dataToRender: this.dataToRender
        });
      } else {
        this.load();
      }
    }
  }, {
    key: "load",
    value: function load() {
      if (this.props.lazy) {
        if (this.props.onLazyLoad) {
          this.props.onLazyLoad(this.createLazyLoadMetadata());
        }

        this.first = this.first + this.props.rows;
      } else {
        if (this.value) {
          for (var i = this.first; i < this.first + this.props.rows; i++) {
            if (i >= this.value.length) {
              break;
            }

            this.dataToRender.push(this.value[i]);
          }

          this.first = this.first + this.props.rows;
          this.setState({
            dataToRender: this.dataToRender
          });
        }
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.first = 0;
      this.dataToRender = [];
      this.setState({
        dataToRender: this.dataToRender
      });
      this.load();
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return !this.dataToRender || this.dataToRender.length === 0;
    }
  }, {
    key: "createLazyLoadMetadata",
    value: function createLazyLoadMetadata() {
      return {
        first: this.first,
        rows: this.props.rows
      };
    }
  }, {
    key: "bindScrollListener",
    value: function bindScrollListener() {
      var _this2 = this;

      if (this.props.inline) {
        this.scrollFunction = function () {
          var scrollTop = _this2.contentElement.scrollTop,
              scrollHeight = _this2.contentElement.scrollHeight,
              viewportHeight = _this2.contentElement.clientHeight;

          if (scrollTop >= scrollHeight * _this2.props.buffer - viewportHeight) {
            _this2.load();
          }
        };

        this.contentElement.addEventListener('scroll', this.scrollFunction);
      } else {
        this.scrollFunction = function () {
          var docBody = document.body,
              docElement = document.documentElement,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop,
              winHeight = docElement.clientHeight,
              docHeight = Math.max(docBody.scrollHeight, docBody.offsetHeight, winHeight, docElement.scrollHeight, docElement.offsetHeight);

          if (scrollTop >= docHeight * _this2.props.buffer - winHeight) {
            _this2.load();
          }
        };

        window.addEventListener('scroll', this.scrollFunction);
      }
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener() {
      if (this.scrollFunction) {
        if (this.props.inline) {
          this.contentElement.removeEventListener('scroll', this.scrollFunction);
          this.contentElement = null;
        } else if (!this.props.loader) {
          window.removeEventListener('scroll', this.scrollFunction);
        }
      }

      this.scrollFunction = null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.load();

      if (!this.props.loader) {
        this.bindScrollListener();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var newValue = this.props.value;

      if (newValue && this.value !== newValue) {
        this.value = newValue;
        this.handleDataChange();
      }

      if (prevProps.loader !== this.props.loader && this.props.loader) {
        this.unbindScrollListener();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.scrollFunction) {
        this.unbindScrollListener();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var className = classNames('p-datascroller p-component', this.props.className, {
        'p-datascroller-inline': this.props.inline
      });
      var header = this.props.header && /*#__PURE__*/React.createElement("div", {
        className: "p-datascroller-header"
      }, " ", this.props.header),
          footer = this.props.footer && /*#__PURE__*/React.createElement("div", {
        className: "p-datascroller-footer"
      }, " ", this.props.footer, " "),
          content = /*#__PURE__*/React.createElement("div", {
        ref: function ref(el) {
          return _this3.contentElement = el;
        },
        className: "p-datascroller-content",
        style: {
          'maxHeight': this.props.scrollHeight
        }
      }, /*#__PURE__*/React.createElement("ul", {
        className: "p-datascroller-list"
      }, this.state.dataToRender && this.state.dataToRender.map(function (val, i) {
        var listItemContent = _this3.props.itemTemplate ? _this3.props.itemTemplate(val) : val;
        return /*#__PURE__*/React.createElement("li", {
          key: i + '_datascrollitem'
        }, listItemContent);
      })));
      return /*#__PURE__*/React.createElement("div", {
        id: this.props.id,
        className: className
      }, header, content, footer);
    }
  }]);

  return DataScroller;
}(Component);

_defineProperty(DataScroller, "defaultProps", {
  id: null,
  value: null,
  rows: 0,
  inline: false,
  scrollHeight: null,
  loader: false,
  buffer: 0.9,
  style: null,
  className: null,
  onLazyLoad: null,
  itemTemplate: null,
  header: null,
  footer: null,
  lazy: false
});

export { DataScroller };
