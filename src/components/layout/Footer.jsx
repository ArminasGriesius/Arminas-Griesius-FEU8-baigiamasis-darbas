import css from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={css.footerContainer}>
      <footer className="container">
        <div className={css.footer}>
          <div className={css.sideLine}>
            <h4>About us</h4>
            <p>We started with HTML and CSS</p>
            <p>Second came JavaScript</p>
            <p>A bit of Git</p>
            <p>And finally, React</p>
          </div>
          <div className={css.sideLine}>
            <h4>Help center</h4>
            <p>We had recordings that we could watch</p>
            <p>Indian programmers tutorials</p>
            <p>W3Schools</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>Please don't</p>
            <p>No phone number available</p>
            <p>No email available</p>
          </div>
        </div>
        <div className={css.icons}>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-envelope"></i>
          <i className="fa fa-phone"></i>
          <i className="fa fa-instagram"></i>
        </div>
      </footer>
    </div>
  );
}
