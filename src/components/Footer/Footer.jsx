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
              <a href="./contacto">3115254580</a>
            </div>
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <a href="./contacto">Crearte@gmail.com</a>
            </div>
            <div className="contact-item">
              <MdContactMail  className="contact-icon" />
              <a href="./contacto">Contactenos</a>
              </div>
            </div>
          </div>
          <div className="social-media">
            <a href="./contacto"><FaFacebook className="social-icon" /></a>
            <a href="./contacto"><FaYoutube className="social-icon" /></a>
            <a href="./contacto"><FaInstagram className="social-icon" /></a>
            <a href="./contacto"><FaXTwitter className="social-icon" /></a>
          </div>
          <hr/>
          <div className="footer-bottom">
            ©2024 CreArte. Todos los derechos reservados.
        </div>
      </footer>
    );
  }
  
  export default Footer;

