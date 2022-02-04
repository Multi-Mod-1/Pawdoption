import React from "react";
import {Routes, Route} from "react-router-dom";
import ListOfDogs from "./ListOfDogs";
import SinglePage from "./SinglePage";
import AdoptionForm from "./AdoptionForm";
import About from "./About";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListOfDogs />} />
        <Route path="/dog/:id" element={<SinglePage />} />
        <Route path="/dog/:id/form" element={<AdoptionForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Router;
