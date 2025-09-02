import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
      <Route path="/servicios" element={<ServicesPage />} />
      {/* Puedes agregar más rutas aquí */}

      </Routes>
    </>
  );
}
