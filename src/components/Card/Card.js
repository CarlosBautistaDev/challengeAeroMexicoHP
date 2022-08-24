import React from "react";
import check from "../../assets/check.png";
export default function Card() {
  return (
    <div className="cardContainer">
      <div className="card" style={{ backgroundColor: "#fff" }}>
        <div className="profilePicture" style={{ background: "#FED482" }}>
          <img
            src={"http://hp-api.herokuapp.com/images/harry.jpg"}
            alt="Harry"
          />
        </div>
        <div className="profileInfo">
          <span className="profileInfoStatus">
            VIVO / ESTUDIANTE
            <div
              className="profileBookmark"
              onClick={() => alert("Agregado a favoritos")}
            >
              <img src={check} alt="check" />
            </div>
          </span>
          <span className="profileInfoName">Harry Potterr</span>
          <div className="profileInfoStatusMD">
            <strong>Cumpleaños: </strong> 01-02-1989
            <br />
            <strong>Género: </strong> Male <br />
            <strong>Color de ojos: </strong>Green
            <br />
            <strong>Color de pelo: </strong> Black
            <br />
          </div>
          <div className="profileInfoStatusSM">
            <span>
              <strong>VIVO</strong> <br />
              <strong>ESTUDIANTE</strong> <br />
            </span>
          </div>
        </div>
      </div>
      <div className="card" style={{ backgroundColor: "#ccc" }}>
        <div className="profilePicture" style={{ background: "#3cad4d" }}>
          <img
            src={"http://hp-api.herokuapp.com/images/hermione.jpeg"}
            alt="Harry"
          />
        </div>
        <div className="profileInfo">
          <span className="profileInfoStatus">
            VIVO / ESTUDIANTE
            <div
              className="profileBookmark"
              onClick={() => alert("Agregado a favoritos")}
            >
              <img src={check} alt="check" />
            </div>
          </span>
          <span className="profileInfoName">Hermione Granger</span>
          <div className="profileInfoStatusMD">
            <strong>Cumpleaños: </strong> 01-02-1989
            <br />
            <strong>Género: </strong> Male <br />
            <strong>Color de ojos: </strong>Green
            <br />
            <strong>Color de pelo: </strong> Black
            <br />
          </div>
          <div className="profileInfoStatusSM">
            <span>
              <strong>VIVO</strong> <br />
              <strong>ESTUDIANTE</strong> <br />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
