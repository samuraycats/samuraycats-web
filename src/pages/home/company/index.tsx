import { lazy } from "react";
import { Route, Routes } from "react-router-dom"

const LazyAbout = lazy(() => import("pages/home/company/About"));
const LazyFaq = lazy(() => import("pages/home/company/Faq"));
const LazyPolice = lazy(() => import("pages/home/company/Police"));

const App = () => {
  return (
    <Routes>
      <Route path="/about" element={<LazyAbout />} />
      <Route path="/faq" element={<LazyFaq />} />
      <Route path="/policy" element={<LazyPolice />} />
    </Routes>
  )
}

export default App