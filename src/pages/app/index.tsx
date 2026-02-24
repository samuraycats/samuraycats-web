import { lazy } from "react";
import { Route, Routes } from "react-router-dom"

const LazyBots = lazy(() => import("pages/app/bots"));
const LazyCustom = lazy(() => import("pages/app/custom"));
const LazyHybrid = lazy(() => import("pages/app/hibrid"));
const LazyMovil = lazy(() => import("pages/app/movil"));
const LazyWeb = lazy(() => import("pages/app/web"));

const App = () => {
  return (
    <Routes>
      <Route path="/bots"
        element={
          <LazyBots />
        }
      />
      <Route
        path="/web"
        element={<LazyWeb />
        }
      />

      <Route
        path="/movil"
        element={<LazyMovil />
        }
      />

      <Route
        path="/custom"
        element={<LazyCustom />
        }
      />

      <Route
        path="/hybrid"
        element={<LazyHybrid />
        }
      />

      <Route path="/*"
        element={
          <h1>Productos</h1>
        }
      />

    </Routes>
  )
}

export default App