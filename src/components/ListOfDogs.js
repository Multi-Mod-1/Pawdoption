import React from "react";
import Shelf from "./Shelf";

function ListOfDogs() {
  const {dogsData} = require("../dogs.json");

  return (
    <div>
      {dogsData.map((dog, index) => (
        <Shelf key={index} dogInfo={dog} />
      ))}
    </div>
  );
}

export default ListOfDogs;
