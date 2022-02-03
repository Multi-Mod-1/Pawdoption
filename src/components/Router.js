import React from "react";
import {Routes, Route} from "react-router-dom";
import ListOfDogs from "./ListOfDogs";
import SinglePage from "./SinglePage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListOfDogs />} />
        <Route path="/dog" element={<SinglePage />} />
      </Routes>
    </>
  );
}

export default Router;
