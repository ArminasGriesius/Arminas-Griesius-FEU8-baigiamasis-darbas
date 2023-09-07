export default function AddShopPage() {
  async function handleAddBlog() {
    const newBlog = {
      title: newBlogTitle,
      paragraph: newBlogParagraph,
      date: Date.now(),
    };
    try {
      const docRef = await addDoc(collection(db, "shops"), localBlogArr);
      console.log("Document written with ID: ", docRef.id);
      setLocalBlogArr((prevState) => [
        ...prevState,
        { ...newBlog, id: docRef.id },
      ]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div className="container">
      <h2>Add Shop Page</h2>
      <p>Welcome to Add Shop Page</p>
    </div>
  );
}
