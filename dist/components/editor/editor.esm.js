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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Editor = /*#__PURE__*/function (_Component) {
  _inherits(Editor, _Component);

  var _super = _createSuper(Editor);

  function Editor() {
    _classCallCheck(this, Editor);

    return _super.apply(this, arguments);
  }

  _createClass(Editor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      import('quill').then(function (module) {
        if (module && module.default) {
          _this.quill = new module.default(_this.editorElement, {
            modules: _objectSpread({
              toolbar: _this.toolbarElement
            }, _this.props.modules),
            placeholder: _this.props.placeholder,
            readOnly: _this.props.readOnly,
            theme: _this.props.theme,
            formats: _this.props.formats
          });

          if (_this.props.value) {
            _this.quill.setContents(_this.quill.clipboard.convert(_this.props.value));
          }

          _this.quill.on('text-change', function (delta, source) {
            var html = _this.editorElement.children[0].innerHTML;

            var text = _this.quill.getText();

            if (html === '<p><br></p>') {
              html = null;
            }

            if (_this.props.onTextChange) {
              _this.props.onTextChange({
                htmlValue: html,
                textValue: text,
                delta: delta,
                source: source
              });
            }
          });

          _this.quill.on('selection-change', function (range, oldRange, source) {
            if (_this.props.onSelectionChange) {
              _this.props.onSelectionChange({
                range: range,
                oldRange: oldRange,
                source: source
              });
            }
          });
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.value !== prevProps.value && this.quill && !this.quill.hasFocus()) {
        if (this.props.value) this.quill.setContents(this.quill.clipboard.convert(this.props.value));else this.quill.setText('');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var containerClass = classNames('p-component p-editor-container', this.props.className);
      var toolbarHeader = null;

      if (this.props.headerTemplate) {
        toolbarHeader = /*#__PURE__*/React.createElement("div", {
          ref: function ref(el) {
            return _this2.toolbarElement = el;
          },
          className: "p-editor-toolbar"
        }, this.props.headerTemplate);
      } else {
        toolbarHeader = /*#__PURE__*/React.createElement("div", {
          ref: function ref(el) {
            return _this2.toolbarElement = el;
          },
          className: "p-editor-toolbar"
        }, /*#__PURE__*/React.createElement("span", {
          className: "ql-formats"
        }, /*#__PURE__*/React.createElement("select", {
          className: "ql-header",
          defaultValue: "0"
        }, /*#__PURE__*/React.createElement("option", {
          value: "1"
        }, "Heading"), /*#__PURE__*/React.createElement("option", {
          value: "2"
        }, "Subheading"), /*#__PURE__*/React.createElement("option", {
          value: "0"
        }, "Normal")), /*#__PURE__*/React.createElement("select", {
          className: "ql-font"
        }, /*#__PURE__*/React.createElement("option", null), /*#__PURE__*/React.createElement("option", {
          value: "serif"
        }), /*#__PURE__*/React.createElement("option", {
          value: "monospace"
        }))), /*#__PURE__*/React.createElement("span", {
          className: "ql-formats"
        }, /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "ql-bold",
          "aria-label": "Bold"
        }), /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "ql-italic",
          "aria-label": "Italic"
        }), /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "ql-underline",
          "aria-label": "Underline"
        })), /*#__PURE__*/React.createElement("span", {
          className: "ql-formats"
        }, /*#__PURE__*/React.createElement("select", {
          className: "ql-color"
        }), /*#__PURE__*/React.createElement("select", {
          className: "ql-background"
        })), /*#__PURE__*/React.createElement("span", {
          className: "ql-formats"
        }, /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "ql-list",
          value: "ordered",
          "aria-label": "Ordered List"
        }), /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "ql-list",
          value: "bullet",
          "aria-label": "Unordered List"
        }), /*#__PURE__*/React.createElement("select", {
          className: "ql-align"
        }, /*#__PURE__*/React.createElement("option", {
          defaultValue: true
        }), /*#__PURE__*/React.createElement("option", {
          value: "center"
        }), /*#__PURE__*/React.createElement("option", {
          value: "right"
        }), /*#__PURE__*/React.createElement("option", {
          value: "justify"
        }))), /*#__PURE__*/React.createElement("span", {
          className: "ql-formats"
        }, /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "ql-link",
          "aria-label": "Insert Link"
        }), /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "ql-image",
          "aria-label": "Insert Image"
        }), /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "ql-code-block",
          "aria-label": "Insert Code Block"
        })), /*#__PURE__*/React.createElement("span", {
          className: "ql-formats"
        }, /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "ql-clean",
          "aria-label": "Remove Styles"
        })));
      }

      var content = /*#__PURE__*/React.createElement("div", {
        ref: function ref(el) {
          return _this2.editorElement = el;
        },
        className: "p-editor-content",
        style: this.props.style
      });
      return /*#__PURE__*/React.createElement("div", {
        id: this.props.id,
        className: containerClass
      }, toolbarHeader, content);
    }
  }]);

  return Editor;
}(Component);

_defineProperty(Editor, "defaultProps", {
  id: null,
  value: null,
  style: null,
  className: null,
  placeholder: null,
  readOnly: false,
  modules: null,
  formats: null,
  theme: 'snow',
  headerTemplate: null,
  onTextChange: null,
  onSelectionChange: null
});

export { Editor };
