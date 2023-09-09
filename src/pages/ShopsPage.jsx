import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import css from "./ShopsPage.module.css";

// import css from "./ShopsPage.module.css";
export default function ShopsPage() {
  const [localShopsArr, setLocalShopsArr] = useState([]);

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
  async function handleDelete(shopId) {
    console.log("delete", shopId);

    await deleteDoc(doc(db, "shops", shopId));
    const updatedLocalShopsArr = localShopsArr.filter(
      (shop) => shop.id !== shopId
    );

    setLocalShopsArr(updatedLocalShopsArr);
  }

  useEffect(() => {
    getBlogsFromFirebase();
    console.log("localShopsArr ===", localShopsArr);
  }, []);
  return (
    <div className="container">
      <h2 className={css.shopsPageTitle}>Shops Page</h2>
      {localShopsArr.length === 0 ? (
        <div>
          <h2 className={css.noShops}>
            Sorry, at this moment all the shops are closed :/
          </h2>
          <img
            className={css.noShopImg}
            src="https://media.istockphoto.com/id/1127624893/vector/store-closed.jpg?s=612x612&w=0&k=20&c=yY7qtwK9TYmaIlc-CEQxkPpdI4nswTHAAP1z7MopO-A="
            alt="Shops are closed"
          />
        </div>
      ) : (
        <ul className={css.shopList}>
          {localShopsArr.map((sObj) => (
            <li className="card" key={sObj.id}>
              <img
                className={css.shopImg}
                src={sObj.imageUrl}
                alt="Shop picture"
              />
              <div className={css.shopInfo}>
                <h4 className={css.shopTitle}>{sObj.shopName}</h4>
                <p className={css.about}>About us: {sObj.description}</p>
                <div className={css.townAndYear}>
                  <p className={css.town}>Based in: {sObj.town}</p>
                  <p className={css.year}>Since: {sObj.startYear}</p>
                </div>
                <button
                  className={css.deleteButton}
                  onClick={() => handleDelete(sObj.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
