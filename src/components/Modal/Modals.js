import React, { useContext, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { FormContext } from "../../App";
import { useChange } from "../../customHooks/useChange";

import close from "../../assets/close.png";
import { addNewCharacter } from "../../actions/characters";

export default function Form() {
  const [image, setImage] = useState("");

  const setIsOpen = useContext(FormContext);
  const dispatch = useDispatch();
  const pictureRef = useRef(null);

  let hogwartsStudent = false;
  let hogwartsStaff = false;

  const [
    { name, dateOfBirth, eyeColour, hairColour, gender, position },
    handleInputChange,
    reset,
  ] = useChange({
    name: "",
    dateOfBirth: "",
    eyeColour: "",
    hairColour: "",
    gender: "",
    position: "",
  });

  function handleCloseAddCharacter() {
    setIsOpen(false);
  }

  function handleFormSubmint(e) {
    e.preventDefault();

    if (position === "student") {
      hogwartsStudent = true;
    } else if (position === "staff") {
      hogwartsStaff = true;
    }

    const data = {
      name,
      dateOfBirth,
      eyeColour,
      hairColour,
      gender,
      hogwartsStudent,
      hogwartsStaff,
      image,
    };

    dispatch(addNewCharacter(data));
    setImage("");
    reset();
    setIsOpen(false);
  }

  async function handleFileInputChange(e) {
    const file =
      e.currentTarget.files && e.currentTarget.files.length
        ? e.currentTarget.files[0]
        : null;
    const img = file ? URL.createObjectURL(file) : "";
    setImage(img);
  }
  if (pictureRef && pictureRef.current) {
    pictureRef.current.value = null;
  }

  return (
    <div className="modal">
      <div className="modalHeader">
        <p>Agrega un personaje</p>
        <span id="close" onClick={handleCloseAddCharacter}>
          <img src={close} alt="close" />
        </span>
      </div>
      <form onSubmit={handleFormSubmint}>
        <div className="inputText">
          <div>
            <p>NOMBRE </p>
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p>CUMPLEAÑOS </p>
            <input
              type="date"
              name="dateOfBirth"
              autoComplete="off"
              value={dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p>COLOR DE OJOS </p>
            <input
              type="text"
              name="eyeColour"
              autoComplete="off"
              value={eyeColour}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p>COLOR DE PELO </p>
            <input
              type="text"
              name="hairColour"
              autoComplete="off"
              value={hairColour}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="inputRadio">
          <div>
            <p>GENERO </p>
            <span id="radio_inputs">
              <input
                type="radio"
                id="radio"
                name="gender"
                value="male"
                onChange={handleInputChange}
              />
              <span id="radio_title"> Hombre </span>
              <input
                type="radio"
                id="radio"
                name="gender"
                value="female"
                onChange={handleInputChange}
              />
              <span id="radio_title"> Mujer </span>
            </span>
          </div>

          <div>
            <p>POSICIÓN </p>
            <span id="radio_inputs">
              <input
                type="radio"
                id="radio"
                name="position"
                value="student"
                onChange={handleInputChange}
              />
              <span id="radio_title"> Estudiante </span>
              <input
                type="radio"
                id="radio"
                name="position"
                value="staff"
                onChange={handleInputChange}
              />
              <span id="radio_title"> Staff </span>
            </span>
          </div>
        </div>

        <div className="inputFile">
          <span>FOTOGRAFIA </span>
          <input
            type="file"
            name="image"
            accept=".jpg"
            onChange={handleFileInputChange}
          />
        </div>

        <div className="modalButton">
          <button className="modalButtonSave" type="submit">
            GUARDAR
          </button>
        </div>
      </form>
    </div>
  );
}
