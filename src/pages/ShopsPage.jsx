import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import css from "./ShopsPage.module.css";
export default function ShopsPage() {
  const [localShopsArr, setLocalShopsArr] = useState([]);
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogParagraph, setNewBlogParagraph] = useState("");

  async function getBlogsFromFirebase() {
    try {
      const querySnapshot = await getDocs(collection(db, "shops"));
      const shopsBack = [];
      querySnapshot.forEach((shop) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(shop.id, " => ", shop.data());
        shopsBack.push({
          id: shop.id,
          ...shop.data(),
        });
      });
      setLocalShopsArr(shopsBack);
    } catch (error) {
      console.log("something went wrong", error);
    }
  }
  useEffect(() => {
    getBlogsFromFirebase();
    console.log("localShopsArr ===", localShopsArr);
  }, []);
  return (
    <div className="container">
      <h2>Shops Page</h2>
      <p>Welcome to Shops Page</p>
      <ul className={css.shopList}>
        {localShopsArr.map((sObj) => (
          <li className="card" key={sObj.id}>
            <h4>{sObj.shopName}</h4>
            <p>{sObj.town}</p>
            <p>{sObj.startYear}</p>
            <p>{sObj.description}</p>
            <img src={sObj.imageUrl} alt="Shop picture" />
          </li>
        ))}
      </ul>
    </div>
  );
}
