
export const Footer = () => {
  return (
    <>
      <div className="contentFooter">
        <div className="footer-container">
          <p className="pfooter">Street Level</p>
          <div className="footer-links">
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms & Conditions</a>
          </div>
          <div className="footer-icons">
            <a href="#" className="icon-link">
              <img src="/facebook.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="#" className="icon-link">
              <img src="/instagram.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="#" className="icon-link">
              <img src="/twitter.png" alt="Twitter" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
