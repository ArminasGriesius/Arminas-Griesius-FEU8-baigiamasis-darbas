import { Link, NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useAuth } from "../../store/AuthProvider";
import css from "./Footer.module.css";

function logoutFire() {
  const auth = getAuth();

  signOut(auth)
    .then(() => {
      toast.success("You have logged out");
    })
    .catch((error) => {
      console.log("error ===", error);
    });
}

export default function Header() {
  const ctx = useAuth();
  console.log("ctx ===", ctx);
  return (
    <div className={css.footerContainer}>
      <header className={css.footer}>
        {/* <div className="container"> */}
        <Link className={css.navLink} to={"/"}>
          My <strong>Page</strong>
        </Link>
        <nav>
          {ctx.isUserLoggedIn && (
            <NavLink className={css.navLink} to={"/shops-page"}>
              Shops Page
            </NavLink>
          )}
          {ctx.isUserLoggedIn && (
            <NavLink className={css.navLink} to={"/add-shop-page"}>
              Add Shop
            </NavLink>
          )}
          {!ctx.isUserLoggedIn && (
            <NavLink className={css.navLink} to={"/login-page"}>
              Login
            </NavLink>
          )}
          {!ctx.isUserLoggedIn && (
            <NavLink className={css.navLink} to={"/register-page"}>
              Register
            </NavLink>
          )}
          {ctx.isUserLoggedIn && (
            <NavLink
              onClick={logoutFire}
              className={css.navLink}
              to={"/login-page"}
            >
              Logout
            </NavLink>
          )}
          {ctx.isUserLoggedIn && <p className={css.shownEmail}>{ctx.email}</p>}
        </nav>
        {/* </div> */}
      </header>
    </div>
  );
}