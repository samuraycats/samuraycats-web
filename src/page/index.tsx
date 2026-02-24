import  { Fragment, lazy } from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SecurityRoute from "../routes/SecurityRoute";
import CleanLayout from "../layout/CleanLayout";
import PublicLayout from "../layout/PublicLayout";
PublicLayout

const LazySignIn = lazy(() => import("../page/home/LogIn"));
const LazyHome = lazy(() => import("../page/home"));
const LazyApp = lazy(() => import("../page/app"));

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
                  <LazyHome />
                </PublicLayout>
              </SecurityRoute>
            }
          />

          <Route
            path="/login"
            element={
              <SecurityRoute level="public">
                <CleanLayout>
                  <LazySignIn />
                </CleanLayout>
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