import React from "react";
import google from "../../assets/img/google-play.png";
import appstore from "../../assets/img/appstore.png";
import girl from "../../assets/img/yellow-girl.png";
import bg from "../../assets/img/background.png";
import phone from "../../assets/img/phone.png";
const Questions = () => {
  return (
    <div id="questions">
      <div className="container">
        <div className="questions">
          <div className="questions--text">
            <p> Скачайте приложение для посетителей КЦ “Строгино”</p>
            <div className="questions--text__btns">
              <img src={google} alt="img" />
              <img src={appstore} alt="img" />
            </div>
          </div>
          <div className="questions--images">
              <img src={girl} alt="img" />
              <img src={bg} alt="img" />
              <img src={phone} alt="img" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
