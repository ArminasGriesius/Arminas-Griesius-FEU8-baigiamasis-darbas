import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="container flex justify-between items-center">
      <Link className="text-2xl" to={"/"}>
        My <strong>Page</strong>
      </Link>
      <nav>
        <NavLink
          className={"text-lg px-3 py-2 hover:bg-slate-200"}
          to={"/shops-page"}
        >
          Shops Page
        </NavLink>
        <NavLink
          className={"text-lg px-3 py-2 hover:bg-slate-200"}
          to={"/add-shop-page"}
        >
          Add Shop
        </NavLink>
        <NavLink
          className={"text-lg px-3 py-2 hover:bg-slate-200"}
          to={"/login-page"}
        >
          Login
        </NavLink>
        <NavLink
          className={"text-lg px-3 py-2 hover:bg-slate-200"}
          to={"/register-page"}
        >
          Register
        </NavLink>
      </nav>
    </header>
  );
}
