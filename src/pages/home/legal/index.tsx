import { lazy } from "react";
import { Route, Routes } from "react-router-dom"

const LazyContact = lazy(() => import("pages/home/legal/Contact"));
const LazyPrivacy = lazy(() => import("pages/home/legal/Privacy"));
const LazyTerms = lazy(() => import("pages/home/legal/Terms"));

const App = () => {
  return (
    <Routes>
      <Route path="/contact" element={<LazyContact />} />
      <Route path="/privacy" element={<LazyPrivacy />} />
      <Route path="/terms" element={<LazyTerms />} />
    </Routes>
  )
}

export default App