"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputCheckbox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _inputs = require("./inputs.props");

var _inputs2 = require("./inputs.handlers");

var _Filters = require("../example/src/components/Filters");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
 * @see https://reactjs.org/docs/forms.html#handling-multiple-inputs
 */
var InputCheckbox = function InputCheckbox(props) {
  var label = props.label,
      queryParam = props.queryParam,
      items = props.items;
  var name = queryParam.name,
      queryParamType = queryParam.type;
  /**
   * Loads the global query params and the setter function
   */

  var _useContext = (0, _react.useContext)(_Filters.QueryParamsContext),
      queryParams = _useContext.queryParams,
      setQueryParams = _useContext.setQueryParams;
  /**
   * Loads the value of the query param
   *
   * // TODO this will still give a warning "A component is changing an uncontrolled input of type checkbox to be controlled." - once, then will go away
   */


  var currentValue = queryParams[name] || [];
  return _react["default"].createElement("div", {
    className: "InputCheckbox"
  }, _react["default"].createElement("div", {
    className: "Label"
  }, label), _react["default"].createElement("div", {
    className: "Items"
  }, items && items.map(function (item, index) {
    var itemLabel = item.label,
        value = item.value;
    return _react["default"].createElement("div", {
      className: "Checkbox",
      key: index
    }, _react["default"].createElement("input", {
      type: "checkbox",
      id: value,
      name: name,
      checked: currentValue.find(function (item) {
        return item === value;
      }),
      onChange: function onChange(event) {
        return (0, _inputs2.inputCheckboxHandleChange)({
          name: name,
          event: event,
          set: setQueryParams,
          queryParamType: queryParamType,
          currentValue: currentValue
        });
      }
    }), _react["default"].createElement("label", {
      htmlFor: name
    }, itemLabel));
  })));
};

exports.InputCheckbox = InputCheckbox;
InputCheckbox.propTypes = _inputs.InputCheckboxPropTypes;
InputCheckbox.defaultProps = _inputs.InputCheckboxDefaultProps;
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputRadio = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _inputs = require("./inputs.props");

var _inputs2 = require("./inputs.handlers");

var _Filters = require("../example/src/components/Filters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
 */
var InputRadio = function InputRadio(props) {
  var label = props.label,
      queryParam = props.queryParam,
      items = props.items;
  var name = queryParam.name;
  /**
   * Loads the global query params and the setter function
   */

  var _useContext = (0, _react.useContext)(_Filters.QueryParamsContext),
      queryParams = _useContext.queryParams,
      setQueryParams = _useContext.setQueryParams;
  /**
   * Loads the value of the query param
   */


  var currentValue = queryParams[name] || "";
  return _react["default"].createElement("div", {
    className: "InputRadio"
  }, _react["default"].createElement("div", {
    className: "Label"
  }, label), _react["default"].createElement("div", {
    className: "Items"
  }, items && items.map && items.map(function (item, index) {
    var label = item.label,
        value = item.value;
    return _react["default"].createElement("div", {
      className: "Radio",
      key: index
    }, _react["default"].createElement("input", {
      type: "radio",
      value: value,
      name: name,
      checked: currentValue === value,
      onChange: function onChange(event) {
        return inputRadioHandleChange({
          name: name,
          event: event,
          set: setQueryParams
        });
      }
    }), _react["default"].createElement("label", {
      htmlFor: name
    }, label));
  })));
};

exports.InputRadio = InputRadio;
InputRadio.propTypes = _inputs.InputRadioPropTypes;
InputRadio.defaultProps = _inputs.InputRadioDefaultProps;
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputRangeMultiHandle = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactInputRange = _interopRequireDefault(require("react-input-range"));

var _inputs = require("./inputs.props");

var _inputs2 = require("./inputs.handlers");

var _Filters = require("../example/src/components/Filters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Displays the component
 *
 * - There is no such a standard HTML element so a plugin is used
 *
 * @see https://github.com/davidchin/react-input-range
 */
var InputRangeMultiHandle = function InputRangeMultiHandle(props) {
  var label = props.label,
      qp = props.queryParam,
      min = props.min,
      max = props.max,
      value = props.value;
  var name = qp.name;
  /**
   * Loads the global query params and the setter function
   */

  var _useContext = (0, _react.useContext)(_Filters.QueryParamsContext),
      queryParams = _useContext.queryParams,
      setQueryParams = _useContext.setQueryParams;
  /**
   * Loads the value of the query param
   */


  var queryParam = queryParams[name] || [];
  /**
   * Sets up the holder for the new query param value
   */

  var newQueryParam = {};
  /**
   * Sets up the min/max initial values
   */

  var initialValue = value;

  if (queryParam.length !== 0) {
    initialValue = queryParam.reduce(function (accumulator, currentValue, index) {
      accumulator[Object.keys(value)[index]] = currentValue;
      return accumulator;
    }, {});
  }
  /**
   * Saves the current slider values into a state to update them instantly on user interaction
   */


  var _useState = (0, _react.useState)(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      currentValue = _useState2[0],
      setCurrentValue = _useState2[1];
  /**
   * Sets the new query param value
   */


  (0, _react.useEffect)(function () {
    newQueryParam[name] = Object.values(currentValue);
  }, [currentValue, name, newQueryParam]);
  return _react["default"].createElement("div", {
    className: "InputRangeMultiHandle"
  }, _react["default"].createElement("div", {
    className: "Label"
  }, label), _react["default"].createElement(_reactInputRange["default"], {
    className: "InputRange",
    maxValue: max,
    minValue: min,
    value: currentValue,
    onChange: function onChange(currentValue) {
      return setCurrentValue(currentValue);
    },
    onChangeComplete: function onChangeComplete() {
      return setQueryParams(newQueryParam);
    }
  }));
};

exports.InputRangeMultiHandle = InputRangeMultiHandle;
InputRangeMultiHandle.propTypes = _inputs.InputRangeMultiHandlePropTypes;
InputRangeMultiHandle.defaultProps = _inputs.InputRangeMultiHandleDefaultProps;
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputSelect = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _inputs = require("./inputs.props");

var _inputs2 = require("./inputs.handlers");

var _Filters = require("../example/src/components/Filters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
 */
var InputSelect = function InputSelect(props) {
  var label = props.label,
      queryParam = props.queryParam,
      items = props.items;
  var name = queryParam.name;
  /**
   * Loads the global query params and the setter function
   */

  var _useContext = (0, _react.useContext)(_Filters.QueryParamsContext),
      queryParams = _useContext.queryParams,
      setQueryParams = _useContext.setQueryParams;
  /**
   * Loads the value of the query param
   */


  var currentValue = queryParams[name] || "";
  return _react["default"].createElement("div", {
    className: "InputSelect"
  }, _react["default"].createElement("label", {
    htmlFor: name
  }, label), _react["default"].createElement("select", {
    name: name,
    value: currentValue,
    multiple: false,
    onChange: function onChange(event) {
      return (0, _inputs2.inputSelectHandleChange)({
        name: name,
        event: event,
        set: setQueryParams
      });
    }
  }, items && items.map && items.map(function (item, index) {
    var label = item.label,
        value = item.value;
    return _react["default"].createElement("option", {
      key: index,
      value: value
    }, label);
  })));
};

exports.InputSelect = InputSelect;
InputSelect.propTypes = _inputs.InputSelectPropTypes;
InputSelect.defaultProps = _inputs.InputSelectDefaultProps;
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputText = void 0;

var _react = _interopRequireWildcard(require("react"));

var _inputs = require("./inputs.props");

var _inputs2 = require("./inputs.handlers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Displays the component
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
 * @see https://reactjs.org/docs/forms.html
 */
var InputText = function InputText(props) {
  var label = props.label,
      queryParam = props.queryParam,
      value = props.value,
      queryParamsContext = props.queryParamsContext;
  var name = queryParam.name;
  /**
   * Loads the global query params and the setter function
   */

  var _useContext = (0, _react.useContext)(queryParamsContext),
      queryParams = _useContext.queryParams,
      setQueryParams = _useContext.setQueryParams;
  /**
   * Loads the value of the query param
   */


  var currentValue = queryParams[name] || value;
  return _react["default"].createElement("div", {
    className: "InputText"
  }, _react["default"].createElement("label", {
    htmlFor: name
  }, label), _react["default"].createElement("input", {
    type: "text",
    name: name,
    value: currentValue,
    onChange: function onChange(event) {
      return (0, _inputs2.inputTextHandleChange)({
        name: name,
        event: event,
        set: setQueryParams
      });
    }
  }));
};

exports.InputText = InputText;
InputText.propTypes = _inputs.InputTextPropTypes;
InputText.defaultProps = _inputs.InputTextDefaultProps;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupportedQueryValues = exports.areFiltersWellDefined = exports.isFilterWellDefined = exports.SupportedFilters = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Everything related to managing the filters
 */

/**
 * Defines which filter types are supported.
 * - Also defines which query param type is supported by a filter.
 * - Also defines how the query value should look like
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 * @see https://github.com/pbeshai/use-query-params#param-types
 */
var SupportedFilters = [{
  filter: "text",
  paramTypes: ["StringParam"],
  paramValues: _propTypes["default"].string
}, {
  filter: "checkbox",
  paramTypes: ["DelimitedArrayParam", "DelimitedNumericArrayParam"],
  paramValues: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
}, {
  filter: "select",
  paramTypes: ["StringParam"],
  paramValues: _propTypes["default"].string
}, {
  filter: "radio",
  paramTypes: ["StringParam"],
  paramValues: _propTypes["default"].string
}, {
  filter: "range-multi-handle",
  paramTypes: ["DelimitedNumericArrayParam"],
  paramValues: _propTypes["default"].shape({
    min: _propTypes["default"].number,
    max: _propTypes["default"].number
  })
}];
/**
 * Defines how query values should look like
 *
 * - It is manually collected from `SupportedFilters`
 */

exports.SupportedFilters = SupportedFilters;

var SupportedQueryValues = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].shape({
  min: _propTypes["default"].number,
  max: _propTypes["default"].number
})]);
/**
 * Checks if a filter is well defined.
 */


exports.SupportedQueryValues = SupportedQueryValues;

var isFilterWellDefined = function isFilterWellDefined(props) {
  var filter = props.filter;
  var queryParam = filter.queryParam,
      input = filter.input;
  var queryParamType = queryParam.type;
  var inputType = input.type;
  /**
   * Checks the filter type
   */

  var f = SupportedFilters.find(function (item) {
    return item.filter === inputType;
  });

  if (!f) {
    console.log("Unsupported filter type: ", inputType);
    return false;
  }
  /**
   * Checks the param type
   */


  var wellDefined = f.paramTypes.find(function (item) {
    return item === queryParamType;
  });

  if (!wellDefined) {
    console.log("This filter (".concat(inputType, ") doesn't supports this query param type: "), queryParamType);
    return false;
  }

  return true;
};
/**
 * Checks if all filters are well defined
 */


exports.isFilterWellDefined = isFilterWellDefined;

var areFiltersWellDefined = function areFiltersWellDefined(props) {
  var filters = props.filters;
  var wellDefined = filters.find(function (filter) {
    var f = filter.filter,
        paramTypes = filter.paramTypes;
    var paramType = paramTypes[0];
    var props = {
      queryParam: {
        type: paramType
      },
      input: {
        type: f
      }
    };
    return !isFilterWellDefined({
      filter: props
    });
  });
  return wellDefined === undefined;
};

exports.areFiltersWellDefined = areFiltersWellDefined;
"use strict";

var _filters = require("./filters");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

test("Checks if a filter is well defined.", function () {
  var supported = _filters.SupportedFilters[0];
  var filter = supported.filter,
      paramTypes = supported.paramTypes;
  var paramType = paramTypes[0];
  var props = {
    queryParam: {
      type: paramType
    },
    input: {
      type: filter
    }
  };
  expect((0, _filters.isFilterWellDefined)({
    filter: props
  })).toStrictEqual(true);
});
test("Fails when the filter's param type is not well defined.", function () {
  var supported = _filters.SupportedFilters[0];
  var filter = supported.filter;
  var props = {
    queryParam: {
      type: "random"
    },
    input: {
      type: filter
    }
  };
  expect((0, _filters.isFilterWellDefined)({
    filter: props
  })).toStrictEqual(false);
});
test("Fails when the filter's type is not well defined.", function () {
  var supported = _filters.SupportedFilters[0];
  var paramTypes = supported.paramTypes;
  var paramType = paramTypes[0];
  var props = {
    queryParam: {
      type: paramType
    },
    input: {
      type: "random"
    }
  };
  expect((0, _filters.isFilterWellDefined)({
    filter: props
  })).toStrictEqual(false);
});
test("Checks if all filters are well defined.", function () {
  var supported = _filters.SupportedFilters;
  expect((0, _filters.areFiltersWellDefined)({
    filters: supported
  })).toStrictEqual(true);
});
test("Fails if one of the filters is not well defined.", function () {
  var notSupported = [].concat(_toConsumableArray(_filters.SupportedFilters), [{
    filter: "random",
    paramTypes: ["StringParam"]
  }]);
  expect((0, _filters.areFiltersWellDefined)({
    filters: notSupported
  })).toStrictEqual(false);
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  UseQueryFilters: true,
  getQueryParamsFromFilters: true
};
exports.getQueryParamsFromFilters = exports.UseQueryFilters = void 0;

var _params = require("./params");

Object.keys(_params).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _params[key];
    }
  });
});

var _inputs = require("./inputs.props");

Object.keys(_inputs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inputs[key];
    }
  });
});

var _inputs2 = require("./inputs.handlers");

Object.keys(_inputs2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inputs2[key];
    }
  });
});

var _filters = require("./filters");

Object.keys(_filters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _filters[key];
    }
  });
});

var _InputText = require("./InputText");

Object.keys(_InputText).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputText[key];
    }
  });
});

var _InputCheckbox = require("./InputCheckbox");

Object.keys(_InputCheckbox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputCheckbox[key];
    }
  });
});

var _InputSelect = require("./InputSelect");

Object.keys(_InputSelect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputSelect[key];
    }
  });
});

var _InputRadio = require("./InputRadio");

Object.keys(_InputRadio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputRadio[key];
    }
  });
});

var _InputRangeMultiHandle = require("./InputRangeMultiHandle");

Object.keys(_InputRangeMultiHandle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputRangeMultiHandle[key];
    }
  });
});

var UseQueryFilters = function UseQueryFilters() {
  return "useQueryFilters";
};
/**
 * Collects the query params from filters
 */


exports.UseQueryFilters = UseQueryFilters;

var getQueryParamsFromFilters = function getQueryParamsFromFilters(props) {
  var filters = props.filters;
  return filters && filters.filter && filters.filter(function (item) {
    return item.queryParam;
  }).map(function (item) {
    return item.queryParam;
  }).reduce(function (result, item) {
    var name = item.name,
        type = item.type;
    result[name] = (0, _params.convertStringToQueryParamObject)({
      type: type
    });
    return result;
  }, {});
};

exports.getQueryParamsFromFilters = getQueryParamsFromFilters;
"use strict";

var _index = require("./index");

var _useQueryParams = require("use-query-params");

var _mocks = require("./mocks");

test("Collects the query params from filters", function () {
  expect((0, _index.getQueryParamsFromFilters)({
    filters: _mocks.filters2
  })).toStrictEqual({
    q: _useQueryParams.StringParam,
    risk: _useQueryParams.DelimitedNumericArrayParam
  });
});
test("Fails collecting query params from filters if a query param is not supported", function () {
  expect((0, _index.getQueryParamsFromFilters)({
    filters: _mocks.filters1
  })).toStrictEqual({
    q: _useQueryParams.StringParam,
    location: null
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputCheckboxHandleChange = exports.inputSelectHandleChange = exports.inputRadioHandleChange = exports.inputTextHandleChange = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Event handlers associated to the inputs
 */

/**
 * Handles events associated to a checkbox input
 */
var inputCheckboxHandleChange = function inputCheckboxHandleChange(props) {
  var name = props.name,
      event = props.event,
      set = props.set,
      queryParamType = props.queryParamType,
      currentValue = props.currentValue;
  var target = event.target;
  var checked = target.checked,
      id = target.id;
  /**
   * Defines the type of the new query param value
   *
   * - on DelimitedNumericArrayParam it must be integer, otherwise string
   */

  var idTyped = queryParamType === "DelimitedNumericArrayParam" ? parseInt(id) : id;
  /**
   * Sets the new query param value
   */

  var newQueryParam = {};
  newQueryParam[name] = checked ? [].concat(_toConsumableArray(currentValue), [idTyped]) : currentValue.filter(function (item) {
    return item !== idTyped;
  });
  set(newQueryParam);
};
/**
 * Handles events associated to a common set of inputs (text, radio, select ...)
 */


exports.inputCheckboxHandleChange = inputCheckboxHandleChange;

var commonHandleChange = function commonHandleChange(props) {
  var name = props.name,
      event = props.event,
      set = props.set;
  var target = event.target;
  var value = target.value;
  var newQueryParam = {};
  newQueryParam[name] = value;
  set(newQueryParam);
};
/**
 * Handles events associated to a text input
 */


var inputSelectHandleChange = function inputSelectHandleChange(props) {
  return commonHandleChange(props);
};
/**
 * Handles events associated to a radio input
 */


exports.inputSelectHandleChange = inputSelectHandleChange;

var inputRadioHandleChange = function inputRadioHandleChange(props) {
  return commonHandleChange(props);
};
/**
 * Handles events associated to a text input
 */


exports.inputRadioHandleChange = inputRadioHandleChange;

var inputTextHandleChange = function inputTextHandleChange(props) {
  return commonHandleChange(props);
};

exports.inputTextHandleChange = inputTextHandleChange;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputDefaultProps = exports.InputPropTypes = exports.InputRangeMultiHandleDefaultProps = exports.InputRangeMultiHandlePropTypes = exports.InputSelectDefaultProps = exports.InputSelectPropTypes = exports.InputRadioDefaultProps = exports.InputRadioPropTypes = exports.InputCheckboxDefaultProps = exports.InputCheckboxPropTypes = exports.InputTextDefaultProps = exports.InputTextPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _filters = require("./filters");

var _params = require("./params");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Defines the common props for all inputs
 */
var CommonInputPropTypes = {
  label: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(_filters.SupportedFilters.map(function (item) {
    return item.filter;
  })),
  name: _propTypes["default"].string,
  queryParam: _propTypes["default"].shape(_params.QueryParamPropTypes),
  changeHandler: _propTypes["default"].func
};
/**
 * Defines the default values for the common props
 */

var CommonInputDefaultProps = {
  label: "Filter",
  type: "text",
  name: "query",
  queryParam: _params.QueryParamDefaultPropTypes,
  handleChange: function handleChange() {
    console.log("handleChange");
  }
};
/**
 * Defines the common props for the inputs with items
 */

var InputWithItemsPropTypes = function InputWithItemsPropTypes(props) {
  var inputType = props.inputType;
  return {
    label: _propTypes["default"].string,
    items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      label: _propTypes["default"].string,
      value: _filters.SupportedFilters.filter(function (item) {
        return item.filter === inputType;
      }).map(function (item) {
        return item.paramValues;
      })
    }))
  };
};
/**
 * Defines the range multi handle input prop types
 */


var InputRangeMultiHandlePropTypes = _objectSpread({}, CommonInputPropTypes, {
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  value: _filters.SupportedFilters.filter(function (item) {
    return item.filter === "range-multi-handle";
  }).map(function (item) {
    return item.paramValues;
  })
});
/**
 * Defines the default props for the range multi handle input
 */


exports.InputRangeMultiHandlePropTypes = InputRangeMultiHandlePropTypes;

var InputRangeMultiHandleDefaultProps = _objectSpread({}, CommonInputDefaultProps, {
  min: 0,
  max: 5,
  value: _propTypes["default"].shape({
    min: 1,
    max: 4
  })
});
/**
 * Defines the select input prop types
 */


exports.InputRangeMultiHandleDefaultProps = InputRangeMultiHandleDefaultProps;

var InputSelectPropTypes = _objectSpread({}, CommonInputPropTypes, {}, InputWithItemsPropTypes({
  inputType: "select"
}));
/**
 * Defines the default props for the select input
 */


exports.InputSelectPropTypes = InputSelectPropTypes;

var InputSelectDefaultProps = _objectSpread({}, CommonInputDefaultProps, {
  label: "Select",
  items: [{
    label: "Select 1",
    value: "select-1"
  }, {
    label: "Select 2",
    value: "select-2"
  }]
});
/**
 * Defines the radio input prop types
 */


exports.InputSelectDefaultProps = InputSelectDefaultProps;

var InputRadioPropTypes = _objectSpread({}, CommonInputPropTypes, {}, InputWithItemsPropTypes({
  inputType: "radio"
}));
/**
 * Defines the default props for the radio input
 */


exports.InputRadioPropTypes = InputRadioPropTypes;

var InputRadioDefaultProps = _objectSpread({}, CommonInputDefaultProps, {
  label: "Radio",
  items: [{
    label: "Radio 1",
    value: "radio-1"
  }]
});
/**
 * Defines the checkbox input prop types
 */


exports.InputRadioDefaultProps = InputRadioDefaultProps;

var InputCheckboxPropTypes = _objectSpread({}, CommonInputPropTypes, {}, InputWithItemsPropTypes({
  inputType: "checkbox"
}));
/**
 * Defines the default props for the checkbox input
 */


exports.InputCheckboxPropTypes = InputCheckboxPropTypes;

var InputCheckboxDefaultProps = _objectSpread({}, CommonInputDefaultProps, {
  label: "Checkbox",
  items: [{
    label: "Checkbox 1",
    value: "checkbox-1"
  }]
});
/**
 * Defines the text input prop types
 */


exports.InputCheckboxDefaultProps = InputCheckboxDefaultProps;

var InputTextPropTypes = _objectSpread({}, CommonInputPropTypes, {
  value: _propTypes["default"].string
});
/**
 * Defines the default props for the text input
 */


exports.InputTextPropTypes = InputTextPropTypes;

var InputTextDefaultProps = _objectSpread({}, CommonInputDefaultProps, {
  value: ""
});
/**
 * Collects all input types into a proptype
 */


exports.InputTextDefaultProps = InputTextDefaultProps;

var InputPropTypes = _objectSpread({}, InputTextPropTypes, {}, InputCheckboxPropTypes, {}, InputSelectPropTypes, {}, InputRadioPropTypes, {}, InputRangeMultiHandlePropTypes);
/**
 * Defines default props for all input types
 */


exports.InputPropTypes = InputPropTypes;

var InputDefaultProps = _objectSpread({}, InputTextDefaultProps, {}, InputCheckboxDefaultProps, {}, InputSelectDefaultProps, {}, InputRadioDefaultProps, {}, InputRangeMultiHandleDefaultProps);

exports.InputDefaultProps = InputDefaultProps;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filters2 = exports.filters1 = void 0;
var filters1 = [{
  label: "Search",
  queryParam: {
    name: "q",
    type: "StringParam"
  },
  input: {
    type: "text",
    value: ""
  }
}, {
  label: "Location",
  queryParam: {
    name: "location",
    type: "ArrayParam"
  },
  input: {
    type: "checkbox",
    items: [{
      label: "Canada",
      value: "ca"
    }, {
      label: "Mexico",
      value: "mx"
    }]
  }
}];
exports.filters1 = filters1;
var filters2 = [{
  label: "Search",
  queryParam: {
    name: "q",
    type: "StringParam"
  },
  input: {
    type: "text",
    value: ""
  }
}, {
  label: "Risk rating",
  queryParam: {
    name: "risk",
    type: "DelimitedNumericArrayParam"
  },
  input: {
    type: "range-multi-handle",
    min: 0,
    max: 5,
    value: {
      min: 1,
      max: 4
    }
  }
}];
exports.filters2 = filters2;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryParamPropTypes = exports.QueryParamDefaultPropTypes = exports.convertStringToQueryParamObject = exports.isParamTypeAsStringSupported = exports.SupportedParamTypesAsString = exports.SupportedParamTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useQueryParams = require("use-query-params");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Everything related to managing params from use-query-params
 */

/**
 * Defines the query param prop types
 */
var QueryParamPropTypes = {
  name: _propTypes["default"].String,
  type: _propTypes["default"].string
};
/**
 * Defines the query param default props
 */

exports.QueryParamPropTypes = QueryParamPropTypes;
var QueryParamDefaultPropTypes = {
  name: "queryParamName",
  type: "StringParam"
};
/**
 * Defines which param types are usable / implemented from `use-query-params`
 *
 * @see https://github.com/pbeshai/use-query-params#param-types
 */

exports.QueryParamDefaultPropTypes = QueryParamDefaultPropTypes;
var SupportedParamTypes = [_useQueryParams.StringParam, _useQueryParams.DelimitedNumericArrayParam, _useQueryParams.DelimitedArrayParam];
/**
 * Defines the string correspondent to a param type
 *
 * - The filters will use these values to define the param types.
 */

exports.SupportedParamTypes = SupportedParamTypes;
var SupportedParamTypesAsString = ["StringParam", "DelimitedNumericArrayParam", "DelimitedArrayParam"];
/**
 * Checks if a param type string is supported
 */

exports.SupportedParamTypesAsString = SupportedParamTypesAsString;

var isParamTypeAsStringSupported = function isParamTypeAsStringSupported(props) {
  var paramTypeAsString = props.paramTypeAsString;
  return SupportedParamTypesAsString.indexOf(paramTypeAsString);
};
/**
 * Returns a query param type object from a string
 */


exports.isParamTypeAsStringSupported = isParamTypeAsStringSupported;

var convertStringToQueryParamObject = function convertStringToQueryParamObject(props) {
  var type = props.type;
  var index = isParamTypeAsStringSupported({
    paramTypeAsString: type
  });

  if (index === -1) {
    console.log("Invalid param type:", type);
    return null;
  }

  return SupportedParamTypes[index];
};

exports.convertStringToQueryParamObject = convertStringToQueryParamObject;
"use strict";

var _params = require("./params");

var _useQueryParams = require("use-query-params");

test("Checks if a param type string is supported", function () {
  var supported = _params.SupportedParamTypesAsString[0];
  expect((0, _params.isParamTypeAsStringSupported)({
    paramTypeAsString: supported
  })).toStrictEqual(0);
});
test("Returns error when a param type string is not supported", function () {
  var supported = "random";
  expect((0, _params.isParamTypeAsStringSupported)({
    paramTypeAsString: supported
  })).toStrictEqual(-1);
});
test("Returns a query param type object from a string", function () {
  expect((0, _params.convertStringToQueryParamObject)({
    type: "StringParam"
  })).toStrictEqual(_useQueryParams.StringParam);
});
