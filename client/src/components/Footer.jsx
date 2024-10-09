import React from 'react';
import Logo from '../img/logo.png'



const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo" />
      <span>Copyright &copy; 2024 by <b>HK2</b></span>
    </footer>
  );
}

export default Footer;