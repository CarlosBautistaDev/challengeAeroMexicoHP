import { useEffect, createContext } from "react";
import { useDispatch } from "react-redux";

import { getAllCharacters } from "./actions/characters";
import logo from "./assets/logo.png";
import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";
import Button from "./components/utils/Button";

export const FormContext = createContext();

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  return (
    <FormContext.Provider >

    <div className="Main">
      <div className="Menu">
        <Nav />
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
