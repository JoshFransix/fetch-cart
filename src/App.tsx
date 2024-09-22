import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [products] = useState(JSON.parse(localStorage.getItem("allProducts")!));
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Landing />
            <Products />
          </>
        }
      />
      <Route
        path="/product/:id"
        element={<ProductDetail products={products} />}
      />
    </Routes>
  );
}

export default App;
