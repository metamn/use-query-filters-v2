import { convertStringToQueryParamObject } from "./params";

/**
 * Collects the query params from filters
 */
const getQueryParamsFromFilters = props => {
  const { filters } = props;

  console.log("x");

  return (
    filters &&
    filters.filter &&
    filters
      .filter(item => item.queryParam)
      .map(item => item.queryParam)
      .reduce((result, item) => {
        const { name, type } = item;

        result[name] = convertStringToQueryParamObject({ type: type });
        return result;
      }, {})
  );
};

export * from "./params";
export * from "./inputs.props";
export * from "./inputs.handlers";
export * from "./filters";
export * from "./InputText";
export * from "./InputCheckbox";
export * from "./InputSelect";
export * from "./InputRadio";
export * from "./InputRangeMultiHandle";

export { useQueryFilters, getQueryParamsFromFilters };
