import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArticleCard from "./components/ArticleCard";

export default function index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ArticleCard />
    </div>
  );
}
