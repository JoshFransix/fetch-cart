import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

function App() {
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
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
