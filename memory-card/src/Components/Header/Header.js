import React from "react";
import "./Header.css"

const Header = ( {score, bestScore}) => {
  return <div className="header">
      <div className="title-description">
        <h1 className="title">Memory Card</h1>
        <p className="game-description">
        Test how good your memory is by clicking each time on a different image. <br/> 
        After every click the images will be shuffled.<br/>
        If you click on the same image twice, you lose.
        </p>
      </div>
      <div className="score">
        <h4 className="score">Score: {score} </h4>
        <h4 className="best-score">Best Score: {bestScore}</h4>
      </div>
  </div>;
};

export default Header;


