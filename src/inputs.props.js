/**
 * Props associated to inputs
 */

import PropTypes from "prop-types";
import { SupportedFilters } from "./filters";
import { QueryParamPropTypes, QueryParamDefaultPropTypes } from "./params";

/**
 * Defines the common props for all inputs
 */
const CommonInputPropTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(SupportedFilters.map(item => item.filter)),
  name: PropTypes.string,
  queryParam: PropTypes.shape(QueryParamPropTypes),
  changeHandler: PropTypes.func
};

/**
 * Defines the default values for the common props
 */
const CommonInputDefaultProps = {
  label: "Filter",
  type: "text",
  name: "query",
  queryParam: QueryParamDefaultPropTypes,
  handleChange: () => {
    console.log("handleChange");
  }
};

/**
 * Defines the common props for the inputs with items
 */
const InputWithItemsPropTypes = props => {
  const { inputType } = props;

  return {
    label: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: SupportedFilters.filter(item => item.filter === inputType).map(
          item => item.paramValues
        )
      })
    )
  };
};

/**
 * Defines the range multi handle input prop types
 */
const InputRangeMultiHandlePropTypes = {
  ...CommonInputPropTypes,
  min: PropTypes.number,
  max: PropTypes.number,
  value: SupportedFilters.filter(
    item => item.filter === "range-multi-handle"
  ).map(item => item.paramValues)
};

/**
 * Defines the default props for the range multi handle input
 */
const InputRangeMultiHandleDefaultProps = {
  ...CommonInputDefaultProps,
  min: 0,
  max: 5,
  value: PropTypes.shape({
    min: 1,
    max: 4
  })
};

/**
 * Defines the select input prop types
 */
const InputSelectPropTypes = {
  ...CommonInputPropTypes,
  ...InputWithItemsPropTypes({ inputType: "select" })
};

/**
 * Defines the default props for the select input
 */
const InputSelectDefaultProps = {
  ...CommonInputDefaultProps,
  label: "Select",
  items: [
    {
      label: "Select 1",
      value: "select-1"
    },
    {
      label: "Select 2",
      value: "select-2"
    }
  ]
};

/**
 * Defines the radio input prop types
 */
const InputRadioPropTypes = {
  ...CommonInputPropTypes,
  ...InputWithItemsPropTypes({ inputType: "radio" })
};

/**
 * Defines the default props for the radio input
 */
const InputRadioDefaultProps = {
  ...CommonInputDefaultProps,
  label: "Radio",
  items: [
    {
      label: "Radio 1",
      value: "radio-1"
    }
  ]
};

/**
 * Defines the checkbox input prop types
 */
const InputCheckboxPropTypes = {
  ...CommonInputPropTypes,
  ...InputWithItemsPropTypes({ inputType: "checkbox" })
};

/**
 * Defines the default props for the checkbox input
 */
const InputCheckboxDefaultProps = {
  ...CommonInputDefaultProps,
  label: "Checkbox",
  items: [
    {
      label: "Checkbox 1",
      value: "checkbox-1"
    }
  ]
};

/**
 * Defines the text input prop types
 */
const InputTextPropTypes = {
  ...CommonInputPropTypes,
  value: PropTypes.string
};

/**
 * Defines the default props for the text input
 */
const InputTextDefaultProps = {
  ...CommonInputDefaultProps,
  value: ""
};

/**
 * Collects all input types into a proptype
 */
const InputPropTypes = {
  ...InputTextPropTypes,
  ...InputCheckboxPropTypes,
  ...InputSelectPropTypes,
  ...InputRadioPropTypes,
  ...InputRangeMultiHandlePropTypes
};

/**
 * Defines default props for all input types
 */
const InputDefaultProps = {
  ...InputTextDefaultProps,
  ...InputCheckboxDefaultProps,
  ...InputSelectDefaultProps,
  ...InputRadioDefaultProps,
  ...InputRangeMultiHandleDefaultProps
};

export {
  InputTextPropTypes,
  InputTextDefaultProps,
  InputCheckboxPropTypes,
  InputCheckboxDefaultProps,
  InputRadioPropTypes,
  InputRadioDefaultProps,
  InputSelectPropTypes,
  InputSelectDefaultProps,
  InputRangeMultiHandlePropTypes,
  InputRangeMultiHandleDefaultProps,
  InputPropTypes,
  InputDefaultProps
};
