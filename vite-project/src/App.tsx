import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import DefaultPage from "./Pages/DefaultPage";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import ProductList from "./componentes/products/ProductList";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<DefaultPage />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/products" element={<ProductList />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
