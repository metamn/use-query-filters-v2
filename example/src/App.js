import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

import Filters from "./components/Filters";
import { UseQueryFilters } from "use-query-filters";

const App = () => {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <UseQueryFilters />
      </QueryParamProvider>
    </Router>
  );
};

export default App;
