import React from "react";
import add from "../../assets/add.png";
import check from "../../assets/check.png";
import trash from "../../assets/trash.png";
export default function Nav() {
  return (
    <div className="navContainer">
      <div className="navOptions">
        <p className="navOptionsFav" onClick={() => alert("favs")}>
          FAVORITOS
        </p>
        <img src={add} alt="add" />
        <div id="line" />
        <p className="navOptionsAdd" onClick={() => alert("add")}>
          AGREGAR
        </p>
        <img src={check} alt="add" />
      </div>
      <div className="navFavoritesActive">
        <div className="navFavoritesList">
          <img src="http://hp-api.herokuapp.com/images/harry.jpg" alt="harry" />
          <p>Harry Potter</p>
          <span id="garbage" onClick={() => alert("detele fav")}>
            <img src={trash} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}
