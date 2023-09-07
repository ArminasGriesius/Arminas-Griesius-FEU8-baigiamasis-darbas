import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { db } from "../firebase/firebase";

export default function AddShopPage() {
  const [localShopsArr, setLocalShopsArr] = useState([]);
  const [newInputTitle, setNewInputTitle] = useState("");

  const initialValues = {
    shopName: "",
    description: "",
    startYear: 0,
    town: "",
    imageUrl: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    shopName: Yup.string().min(4).max(255).required("Shop name is required"),
    description: Yup.string().min(4).required("Description is required"),
    startYear: Yup.number()
      .min(1970)
      .max(2025)
      .integer("Year must be an integer")
      .required("Start year is required"),
    town: Yup.string().required("Town is required").min(4),
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
      // toast.success("Add created");
    } catch (error) {
      console.error("Error adding document: ", error);
      // toast.error("something went wrong");
    }
  }

  return (
    <div className="container">
      <h2>Add Shop Page</h2>
      <p>Welcome to Add Shop Page</p>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="shopName"
          name="shopName"
          type="text"
          placeholder="Write new Shop Name"
          onChange={formik.handleChange}
          value={formik.values.shopName}
        />
        <textarea
          id="description"
          name="description"
          type="text"
          placeholder="Describe your shop"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <input
          id="startYear"
          name="startYear"
          type="number"
          placeholder="Started year"
          onChange={formik.handleChange}
          value={formik.values.startYear}
        />
        <input
          id="town"
          name="town"
          type="text"
          placeholder="Town"
          onChange={formik.handleChange}
          value={formik.values.town}
        />
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          placeholder="Image Url"
          onChange={formik.handleChange}
          value={formik.values.imageUrl}
        />
        <button type="submit">Add New Shop</button>
      </form>
    </div>
  );
}
