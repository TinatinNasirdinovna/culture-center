import React from "react";
import dancing from "../../assets/img/dancing-people.png";
import little_girl from "../../assets/img/little-girl.png";
import boy from "../../assets/img/boy.png";
import teacher from "../../assets/img/teacher.png";

const Directions = () => {
  return (
    <div id="directions">
      <div className="container">
        <div className="directions">
          <h1>Направления</h1>
          <div className="directions--cards">
            <div className="directions--cards__card">
              <img src={dancing} alt="img" />
              <div className="directions--cards__card--text">
                <h2>Для взрослых</h2>
                <button>ПОДРОБНЕЕ</button>
              </div>
            </div>
            <div className="directions--cards__card">
              <img src={little_girl} alt="img" />
              <div className="directions--cards__card--text">
                <h2>Для детей</h2>
                <button>ПОДРОБНЕЕ</button>
              </div>
            </div>
          </div>
          <h1>Услуги и цены</h1>
          <div className="directions--cards">
            <div className="directions--cards__card">
              <img src={teacher} alt="img" />
              <div className="directions--cards__card--text">
                <h2>Для взрослых</h2>
                <button>ПОДРОБНЕЕ</button>
              </div>
            </div>
            <div className="directions--cards__card">
              <img src={boy} alt="img" />
              <div className="directions--cards__card--text">
                <h2>Для детей</h2>
                <button>ПОДРОБНЕЕ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
