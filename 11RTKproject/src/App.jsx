import Header from "./Header";
import Product from "./Product";
import {Route, Routes } from "react-router-dom";
import CartList from "./Services/CartList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </>
  );
}

export default App;