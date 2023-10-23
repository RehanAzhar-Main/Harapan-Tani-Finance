import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductPage from "./product";
import React  from 'react';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/product/products_and_services" element={ <ProductPage /> } />
            <Route path="/business-summary" element={ <ProductPage /> } />
            <Route path="/" element={ <ProductPage /> } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;