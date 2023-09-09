import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { db } from "../firebase/firebase";
import { toast } from "react-hot-toast";
import css from "./AddShopPage.module.css";

export default function AddShopPage() {
  const initialValues = {
    shopName: "",
    description: "",
    startYear: "",
    town: "",
    imageUrl: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    shopName: Yup.string()
      .min(4, "Shop name is too short")
      .max(255)
      .required("Shop name is required"),
    description: Yup.string()
      .min(6, "Description is too short")
      .required("Description is required"),
    startYear: Yup.number()
      .min(1970, "Shop is too old")
      .max(2025, "No shops of the future allowed")
      .integer("Year must be an integer")
      .required("Start year is required"),
    town: Yup.string()
      .required("Town is required")
      .min(4, "Minimum 4 characters"),
    imageUrl: Yup.string()
      .required("Main Image URL is required")
      .url("Invalid URL"),
  });

  // Formik configuration
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      // console.log('Form submitted with values:', values);
      const newAddShop = {
        ...values,
        // userUid: ctx.userUid,
      };
      console.log("newAddObjWithUid ===", newAddShop);
      sendDataToFireBase(newAddShop);
    },
  });
  console.log("formik.errors ===", formik.errors);

  async function sendDataToFireBase(dataToSend) {
    console.log("creating");
    try {
      const docRef = await addDoc(collection(db, "shops"), dataToSend);
      console.log("Document written with ID: ", docRef.id);
      toast.success("Shop created");
      formik.resetForm();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("something went wrong");
    }
  }

  return (
    <div className="container">
      <h2 className={css.addShopPageTitle}>You can add your shop HERE!!</h2>
      <div className={css.addShopPageContainer}>
        <div>
          <h4>How to create a shop? Follow instructions below: </h4>
          <ul>
            <li>
              <p>Enter your Shop Name, must be at least 4 characters.</p>
            </li>
            <li>
              <p>Writre a short description of your shop.</p>
            </li>
            <li>
              <p>
                Enter a year your shop was opened. Note: shops older than 1970
                are not allowed here.
              </p>
            </li>
            <li>
              <p>Enter the name of a town your shop was founded.</p>
            </li>
            <li>
              <p>Input the URL of your shop. Note: must be a valid URL.</p>
            </li>
            <li>
              <p>Press Submit button</p>
            </li>
          </ul>
          <p>
            And if you followed these instructions correctly, CONGRADULATIONS!!
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className={css.grid}>
            <h2 className={css.addShopFormTitle}>Add Shop Page</h2>
            <div>
              <label className={css.labels}>Shop name</label>
              <input
                id="shopName"
                name="shopName"
                type="text"
                placeholder="Write new Shop Name"
                onChange={formik.handleChange}
                value={formik.values.shopName}
              />
              {formik.errors.shopName && formik.touched.shopName && (
                <p className={css.error}>{formik.errors.shopName}</p>
              )}
            </div>
            <div>
              <label className={css.labels}>Description</label>
              <textarea
                id="description"
                name="description"
                type="text"
                placeholder="Describe your shop"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
              {formik.errors.description && formik.touched.description && (
                <p className={css.error}>{formik.errors.description}</p>
              )}
            </div>
            <div>
              <label className={css.labels}>Year started</label>
              <input
                id="startYear"
                name="startYear"
                type="number"
                placeholder="Started year"
                onChange={formik.handleChange}
                value={formik.values.startYear}
              />
              {formik.errors.startYear && formik.touched.startYear && (
                <p className={css.error}>{formik.errors.startYear}</p>
              )}
            </div>
            <div>
              <label className={css.labels}>Town</label>
              <input
                id="town"
                name="town"
                type="text"
                placeholder="Town"
                onChange={formik.handleChange}
                value={formik.values.town}
              />
              {formik.errors.town && formik.touched.town && (
                <p className={css.error}>{formik.errors.town}</p>
              )}
            </div>
            <div>
              <label className={css.labels}>Shop image</label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="text"
                placeholder="Image Url"
                onChange={formik.handleChange}
                value={formik.values.imageUrl}
              />
              {formik.errors.imageUrl && formik.touched.imageUrl && (
                <p className={css.error}>{formik.errors.imageUrl}</p>
              )}
            </div>
            <button className={css.submitButton} type="submit">
              Create your Shop!!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
