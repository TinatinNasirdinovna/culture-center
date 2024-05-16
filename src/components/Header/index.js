import React from "react";
import logo from "../../assets/img/logo-header.png";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="img" />
          <div className="header--nav">
            <div className="header--nav__address">
              <IoLocationOutline />
              <span>Маршала Катукова, д.8</span>
            </div>
            <div className="header--nav__address">
              <FiPhone />
              <span>+7 (495) 750 05 00</span>
            </div>
          </div>
          <button>Заказать звонок</button>
        </div>
      </div>
      <div className="head">
        <div className="container head">
            <div className="head--nav">
                <a href="#">О центре</a>
                <a href="#">Афиша</a>
                <a href="#">Студии</a>
                <a href="#">Расписание</a>
                <a href="#">Пространства</a>
                <a href="#">Абонементы</a>
                <a href="#">Организаторам</a>
                <a href="#">Контакты</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
