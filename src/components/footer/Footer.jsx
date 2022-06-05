import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#"className='footer__logo'>LANSAWING</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"></a>
        <a href="https://instagram.com"></a>
        <a href="https://Linkedin.com"></a>
        <a href="https://twitter.com"></a>
      </div>

      <div className="footer__copyriight">
        <small>&copy; LANSAWING Port. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer