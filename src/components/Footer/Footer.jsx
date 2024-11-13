import React from "react";
import './Footer.css';
import logo from '../../assets/img/logo.png';
import { FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdPhone, MdEmail,MdContactMail  } from 'react-icons/md';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="logo">
            <a href="/">
            <img src={logo} alt="CreArte Logo" className="logo-image" />
            </a>
          </div>
          <div className="slogan">
            INNOVACIÓN PARA TODOS
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <MdPhone className="contact-icon" />
              3115254580
            </div>
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              Crearte@gmail.com
            </div>
            <div className="contact-item">
              <MdContactMail  className="contact-icon" />
              Contactenos
              </div>
            </div>
          </div>
          <div className="social-media">
            <FaFacebook className="social-icon" />
            <FaYoutube className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaXTwitter className="social-icon" />
          </div>
          <hr/>
          <div className="footer-bottom">
            ©2024 CreArte. Todos los derechos reservados.
        </div>
      </footer>
    );
  }
  
  export default Footer;

/* Comentario para que me acepte los cambios */