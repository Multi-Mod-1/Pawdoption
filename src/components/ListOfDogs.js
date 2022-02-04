import React from "react";
import Shelf from "./Shelf";
import "./ListOfDogs.css";

function ListOfDogs() {
  const {dogsData} = require("../dogs.json");

  return (
    <div>
      {dogsData.map((dog, index) => {
        return(
          <a href={`/dog/${index}`}>
            <div className="gridBox">
              <div className="photo">
                  <img src={dog.imageUrl} alt={`picture of ${dog.name}`} className="photoStyle" />
              </div>
              <div className="textContent">
                <p className="name">{dog.name}</p>
                <p className="summary">{dog.summary}</p>
              </div>
            </div>
          </a>
        // <Shelf key={index} dogInfo={dog} />
      )})}
    </div>
  );
}

export default ListOfDogs;
