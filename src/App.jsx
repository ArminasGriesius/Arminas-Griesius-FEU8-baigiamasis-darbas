import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ShopsPage from "./pages/ShopsPage";
import Header from "./components/layout/Header";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AddShopPage from "./pages/AddShopPage";
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/shops-page"} element={<ShopsPage />}></Route>
        <Route path={"/add-shop-page"} element={<AddShopPage />}></Route>
        <Route path={"/register-page"} element={<RegisterPage />}></Route>
        <Route path={"/login-page"} element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}
