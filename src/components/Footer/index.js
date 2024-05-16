import React from "react";
import { LuEye } from "react-icons/lu";
import logo from "../../assets/img/footer-logo.png";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--head">
            <div className="footer--head__logo">
              <img src={logo} alt="img" />
              <p>
                © 2018 – 2022, Культурный центр «Строгино» – учреждение культуры
                города Москваs
              </p>
              <h3><span><LuEye /></span> ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
