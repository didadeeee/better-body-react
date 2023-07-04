import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="social-links">
            <a href="https://www.facebook.com/betterbodyco">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/betterbodyco/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCM6HeRjJyV8ViVoStrUAM2Q">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="mailto:contact@betterbody.co">
              <i className="far fa-envelope"></i>
            </a>
          </div>
          <div className="generic-links">
            <a href="https://betterbody.co/pages/about">About Us</a>
            <a href="https://betterbody.co/pages/shop">Shopping</a>
          </div>
        </div>
        <p>&copy; 2023 Better Body Co. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
