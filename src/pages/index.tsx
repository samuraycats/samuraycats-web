import { Fragment, lazy } from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SecurityRoute from "../routes/SecurityRoute";
import PublicLayout from "../layout/PublicLayout";


const LazyHome = lazy(() => import("pages/home"));
const LazyApp = lazy(() => import("pages/app"));
const LazyBlog = lazy(() => import("components/Blog"));
const LazyLogin = lazy(() => import("pages/login"));

export const getLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("user_data") ?? "")
  } catch {
    return null
  }
}

const InitialRoute = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/*"
            element={
              <SecurityRoute level="public">
                <PublicLayout>
                  <LazyBlog />
                </PublicLayout>
              </SecurityRoute>
            }
          />

          <Route path="/login"
            element={
              <SecurityRoute level="public">
                <PublicLayout>
                  <LazyLogin />
                </PublicLayout>
              </SecurityRoute>
            }
          />

          <Route
            path="/home/*"
            element={
              <SecurityRoute level="public">
                <PublicLayout>
                  <LazyHome />
                </PublicLayout>
              </SecurityRoute>
            }
          />


          <Route
            path="/app/*"
            element={
              <SecurityRoute level="public">
                <PublicLayout>
                  <LazyApp />
                </PublicLayout>
              </SecurityRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}



export default InitialRoute