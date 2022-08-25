import { useEffect, createContext, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { getAllCharacters } from "./actions/characters";
import logo from "./assets/logo.png";
import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";
import Button from "./components/utils/Button";
import Modals from "./components/Modal/Modals";
Modal.setAppElement(document.getElementById("root"));

export const FormContext = createContext();
const mStyles = {
  overlay: {
    zIndex: 1020,
    height: "100%",
    background: "rgba(29, 29, 29, 0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "-75px",
  },
  content: {
    padding: "0",
    maxWidth: "727px",
    overflowY: "hidden",
    overflowX: "hidden",
    position: "relative",
  },
};

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  return (
    <FormContext.Provider value={setIsOpen}>
      <div className="Main">
        <Modal isOpen={modalIsOpen} style={mStyles}>
          <Modals />
        </Modal>
        <div className="Menu">
          <Nav setIsOpen={"x"} />
        </div>
        <div className="Nav">
          <img className="Logo" src={logo} alt="hp" />
          <div className="SelectFilter">Selecciona tu filtro</div>
        </div>
        <div className="Buttons">
          <Button />
        </div>
        <div className="Cards">
          <Card />
        </div>
      </div>
    </FormContext.Provider>
  );
}

export default App;
