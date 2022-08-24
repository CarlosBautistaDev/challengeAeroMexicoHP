import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite } from "../../actions/favorites";
import { FormContext } from "../../App";
import add from "../../assets/add.png";
import check from "../../assets/check.png";
import trash from "../../assets/trash.png";
export default function Nav() {
  const setIsOpen = useContext(FormContext);

  const { favorites } = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  function handleActiveMenu() {
    setActive(!active);
  }

  function handleDeleteFavorite(name) {
    dispatch(deleteFavorite(name));
  }

  function handleOpenAddCharacter() {
    setIsOpen(true);
  }
  return (
    <div className="navContainer">
      <div className="navOptions">
        <p className="navOptionsFav" onClick={handleActiveMenu}>
          FAVORITOS
        </p>
        <img src={add} alt="add" />
        <div id="line" />
        <p className="navOptionsAdd" onClick={handleOpenAddCharacter}>
          AGREGAR
        </p>
        <img src={check} alt="add" />
      </div>
      <div className={active ? "navFavoritesActive" : "navFavorites"}>
        {favorites.length > 0 ? (
          favorites.map((char) => (
            <div key={char.name} className="navFavoritesList">
              <img src={char.image} alt={char.name} />
              <p>{char.name}</p>
              <span
                id="garbage"
                onClick={() => {
                  handleDeleteFavorite(char.name);
                }}
              >
                <img src={trash} alt="" />
              </span>
            </div>
          ))
        ) : (
          <p className="navEmpty">NO HAY FAVORITOS</p>
        )}
      </div>
    </div>
  );
}
