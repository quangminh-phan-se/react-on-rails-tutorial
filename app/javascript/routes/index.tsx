import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Recipe from "../components/Recipe";
import NewRecipe from "../components/NewRecipe";
import NotFound from "../components/NotFound";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/recipe" element={<NewRecipe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);