import React from "react";
import {Routes, Route} from "react-router-dom";
import ListOfDogs from "./ListOfDogs";
import SinglePage from "./SinglePage";
import AdoptionForm from "./AdoptionForm";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListOfDogs />} />
        <Route path="/dog" element={<SinglePage />} />
        <Route path="form" element={<AdoptionForm />} />
      </Routes>
    </>
  );
}

export default Router;
