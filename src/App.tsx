// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/ProductList";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Products />
          </>
        }
      />
    </Routes>
  );
}

export default App;
