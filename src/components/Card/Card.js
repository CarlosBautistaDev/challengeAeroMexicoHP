import React from "react";
import { useSelector, useDispatch } from "react-redux";
import check from "../../assets/check.png";
import uncheck from "../../assets/uncheck.png";
import toUpperLetters from "../../functions/toUpperLetters";
import getStudentOrStaff from "../../functions/studentOrStaff";
import Load from "../../assets/loading.gif";
import { addNewFavorite } from "../../actions/favorites";
import Logo from "../../assets/logoDeft.png";

export default function Card() {
  const { characters } = useSelector((state) => state.characters);
  const { favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  function handleAddToFavorites(name) {
    dispatch(addNewFavorite(name));
  }
  const bgGradients = {
    Gryffindor: `linear-gradient(135deg, #FF0000 0%, #FED482 100%)`,
    Slytherin: `linear-gradient(135deg, #1C792B 0%, #82E95E 100%)`,
    Ravenclaw: `linear-gradient(135deg, #0597B7 0%, #66D1FF 100%)`,
    Hufflepuff: `linear-gradient(135deg, #FFC700 0%, #FFF388 100%)`,
    NA: `linear-gradient(135deg, #6200ff 0%, #bc88ff 100%)`,
  };

  return (
    <div className="cardContainer">
      {characters ? (
        characters.map((char) => (
          <div
            key={char.name}
            className="card"
            style={{ backgroundColor: `${!char.alive && "#CCCCCC"}` }}
          >
            <div
              className="profilePicture"
              style={{
                background: bgGradients[char.house ? char.house : "NA"],
              }}
            >
              <img src={char.image ? char.image : Logo} alt="img" />
            </div>
            <div className="profileInfo">
              <span className="profileInfoStatus">
                {char.alive ? "VIVO" : "FINADO"} / {getStudentOrStaff(char)}
                <div
                  className="profileBookmark"
                  onClick={() => {
                    handleAddToFavorites(char.name);
                  }}
                >
                  {favorites.find((fav) => fav.name === char.name) ? (
                    <img src={uncheck} alt="check" />
                  ) : (
                    <img src={check} alt="check" />
                  )}
                </div>
              </span>
              <span className="profileInfoName">{char.name}</span>
              <div className="profileInfoStatusMD">
                <strong>Cumpleaños: </strong>{" "}
                {char.dateOfBirth ? char.dateOfBirth : "NA"} <br />
                <strong>Género: </strong>{" "}
                {char.gender ? toUpperLetters(char.gender) : "NA"} <br />
                <strong>Color de ojos: </strong>{" "}
                {char.eyeColour ? toUpperLetters(char.eyeColour) : "NA"} <br />
                <strong>Color de pelo: </strong>{" "}
                {char.hairColour ? toUpperLetters(char.hairColour) : "NA"}{" "}
                <br />
              </div>
              <div className="profileInfoStatusSM">
                <span>
                  <strong>VIVO</strong> <br />
                  <strong>ESTUDIANTE</strong> <br />
                </span>
                <div
                  className="profileBookmarkSM"
                  onClick={() => {
                    handleAddToFavorites(char.name);
                  }}
                >
                  {favorites.find((fav) => fav.name === char.name) ? (
                   <img src={uncheck} alt="check" />
                  ) : (
                    <img src={check} alt="check" /> 
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <img src={Load} alt="loading..." />
      )}
    </div>
  );
}
