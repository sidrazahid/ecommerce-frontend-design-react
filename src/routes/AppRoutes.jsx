import { Routes, Route } from "react-router-dom";
import WebMain from "../pages/WebMain";
import WebList from "../pages/WebList";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/CartPage";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WebMain />} />
      <Route path="/list" element={<WebList />} />
      <Route path="/product" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default AppRoutes;
