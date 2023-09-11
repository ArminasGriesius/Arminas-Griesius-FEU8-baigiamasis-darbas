import LoginForm from "../components/auth/LoginForm";
import css from "./LoginPage.module.css";
export default function LoginPage() {
  return (
    <div className="container">
      <h2 className={css.loginPageTitle}>Login Page</h2>
      <div className={css.loginContainer}>
        <LoginForm />
        <div className={css.loginPageText}>
          <h4>Already a member? Login and enjoy! </h4>
          <ul>
            <li>
              <p>See the list of shops available</p>
            </li>
            <li>
              <p>Create your own shop</p>
            </li>
            <li>
              <p>See and be able to press Logout NavLink</p>
            </li>
          </ul>
          <p>
            And even more options available when i'm better at React, so stay
            tuned!!
          </p>
        </div>
      </div>
    </div>
  );
}
