import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "james@bond.com",
      password: "123456",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Please enter a valid email").required(),
      password: Yup.string()
        .min(4, "Password must be at least 4 characters")
        .max(255)
        .required(),
    }),
    onSubmit: (values) => {
      console.log("supildytos reiksmes -", values);
      loginWithFire(values.email, values.password);
    },
  });

  function loginWithFire(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Login successful, welcome");

        const user = userCredential.user;
        console.log("user ===", user);
        navigate("/shops-page", { replace: true });
      })
      .catch((error) => {
        toast.error("Login failed, check email or password");
        console.warn(error.code, error.message);
        formik.resetForm();
      });
  }
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className={css.grid}>
          <h4 className={css.loginTitle}>Login</h4>
          <div>
            <label className={css.labels}>Enter Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />{" "}
            {formik.errors.email && formik.touched.email && (
              <p className={css.error}>{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label className={css.labels}>Enter password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />{" "}
            {formik.errors.password && formik.touched.password && (
              <p className={css.error}>{formik.errors.password}</p>
            )}
          </div>
          <button className={css.loginButton} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
