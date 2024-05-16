import React from "react";
import gitar from "../../assets/img/jazz-musician.png";
import dancer from "../../assets/img/danser.png";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

const Afisha = () => {
  return (
    <>
    <div id="afisha">
        <div className="afisha">
          <h1>Афиша</h1>
          <div className="afisha--cards">
            <div className="afisha--cards__card">
              <div className="afisha--cards__card--text">
                <h3>ул. Маршала Катукова, д. 8</h3>
                <h5>Выступление</h5>
                <h2>“ЛЕБЕДИНОЕ ОЗЕРО”</h2>
                <h4>Смена: 20-24 августа</h4>
              </div>
              <img src={gitar} alt="img" />
            </div>
            <div className="afisha--cards__card">
              <div className="afisha--cards__card--text">
                <h3>ул. Маршала Катукова, д. 8</h3>
                <h5>Выступление</h5>
                <h2>“ЛЕБЕДИНОЕ ОЗЕРО”</h2>
                <h4>Смена: 20-24 августа</h4>
              </div>
              <img src={dancer} alt="img" />
            </div>
            <div className="afisha--cards__card">
              <div className="afisha--cards__card--text">
                <h3>ул. Маршала Катукова, д. 8</h3>
                <h5>Выступление</h5>
                <h2>“ЛЕБЕДИНОЕ ОЗЕРО”</h2>
                <h4>Смена: 20-24 августа</h4>
              </div>
              <img src={gitar} alt="img" />
            </div>
            <div className="afisha--cards__card">
              <div className="afisha--cards__card--text">
                <h3>ул. Маршала Катукова, д. 8</h3>
                <h5>Выступление</h5>
                <h2>“ЛЕБЕДИНОЕ ОЗЕРО”</h2>
                <h4>Смена: 20-24 августа</h4>
              </div>
              <img src={dancer} alt="img" />
            </div>
            <div className="afisha--cards__card">
              <div className="afisha--cards__card--text">
                <h3>ул. Маршала Катукова, д. 8</h3>
                <h5>Выступление</h5>
                <h2>“ЛЕБЕДИНОЕ ОЗЕРО”</h2>
                <h4>Смена: 20-24 августа</h4>
              </div>
              <img src={dancer} alt="img" />
            </div>
          </div>
        </div>
    </div>
    <div className="container">
      <div className="afishaDown">
        <span>Листать дальше</span>
        <div className="afishaDown--arrows">
        <FaArrowLeft />
        <FaArrowRight/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Afisha;
