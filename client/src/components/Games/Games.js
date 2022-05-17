import React from "react";
import "./Games.css";
import Game from "../Game/Game.js";

function Games({ posts }) {
  return (
    <div className="contenedor">
      {posts && posts?.map((post, i) => <Game key={i} props={post}></Game>)}
    </div>
  );
}

export default Games;
