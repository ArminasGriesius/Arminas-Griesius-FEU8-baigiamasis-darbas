import { Navigate, Route, Routes } from "react-router-dom";
import ShopsPage from "./pages/ShopsPage";
import Header from "./components/layout/Header";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AddShopPage from "./pages/AddShopPage";
import { Toaster } from "react-hot-toast";
import Footer from "./components/layout/Footer";
import { useAuth } from "./store/AuthProvider";
import InitPage from "./pages/InitPage";

export default function App() {
  const ctx = useAuth();
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path={"/"} element={<InitPage />}></Route>
        <Route
          path={"/shops-page"}
          element={
            ctx.isUserLoggedIn ? <ShopsPage /> : <Navigate to={"/login-page"} />
          }
        ></Route>
        <Route
          path={"/add-shop-page"}
          element={
            ctx.isUserLoggedIn ? (
              <AddShopPage />
            ) : (
              <Navigate to={"/login-page"} />
            )
          }
        ></Route>
        <Route
          path={"/register-page"}
          element={
            !ctx.isUserLoggedIn ? (
              <RegisterPage />
            ) : (
              <Navigate to={"/shops-page"} />
            )
          }
        ></Route>
        <Route path={"/login-page"} element={<LoginPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
