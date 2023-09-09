import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import css from "./RegisterPage.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function RegisterPage() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .required("Email is required"),
      password: Yup.string()
        .min(4, "Password must be at least 4 characters")
        .max(255)
        .required("password is required"),
    }),
    onSubmit: (values) => {
      console.log("supildytos reiksmes -", values);
    },
  });

  const auth = getAuth();
  const registerWithFirebase = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate("/shops-page", { replace: true });
        toast.success("Successfully registered, welcome!");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          toast.error("Email already exist");
        }
        console.log("errorCode ===", errorCode);
        const errorMessage = error.message;
        console.log("errorMessage ===", errorMessage);
      });
  };
  return (
    <div className="container">
      <h2 className={css.registerPageTitle}>Welcome to Register Page</h2>
      <div className={css.registerContainer}>
        <div>
          <h4>Want to become a member? Create an account and be able to: </h4>
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
        <form className={css.grid} onSubmit={formik.handleSubmit}>
          <h4 className={css.registerFormTitle}>Register Here</h4>
          <div>
            <label className={css.labels}>Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email here"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <p className={css.error}>{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label className={css.labels}>Your password</label>
            <input
              type="password"
              id="password"
              placeholder="Password here"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <p className={css.error}>{formik.errors.password}</p>
            )}
          </div>
          <button
            className={css.registerSubmitButton}
            type="submit"
            onClick={() =>
              registerWithFirebase(formik.values.email, formik.values.password)
            }
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
