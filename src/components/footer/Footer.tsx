import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__devider"></div>
      <div className="footer__item">
        <h3>About us</h3>
        <p>Careers</p>
        <p>Blog</p>
        <p>Investor Relations</p>
      </div>
      <div className="footer__item">
        <h3>Make Money with Us</h3>
        <p>Sell products on Amazon</p>
        <p>Become an Affiliate</p>
        <p>Self-Publish with Us</p>
      </div>
      <div className="footer__item">
        <h3>Let Us Help You</h3>
        <p>Your Account</p>
        <p>Your Orders</p>
        <p>Help</p>
      </div>
    </footer>
  );
};

export default Footer;
