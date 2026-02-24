import { lazy } from "react";

import { Route, Routes } from "react-router-dom";

const LazyLegal = lazy(() => import("pages/home/legal"));
const LazyCompany = lazy(() => import("pages/home/company"));

const HomeRoutes = () => {

  return (
    <Routes>
      <Route path="/legal/*"
        element={
          <LazyLegal />
        }
      />

      <Route path="/company/*"
        element={
          <LazyCompany />
        }
      />
    </Routes>
  )
}

export default HomeRoutes;