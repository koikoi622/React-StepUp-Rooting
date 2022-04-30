import { BrowserRouter, Link } from "react-router-dom";

import { Router } from "./router/Router";
import React, { useCallback, useState, useMemo } from "react";
import "./styles.css";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
};
