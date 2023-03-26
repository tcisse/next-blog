import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArticleCard from "./components/ArticleCard";
import Newsletter from "./components/Newsletter";

export default function index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ArticleCard />
      {/* <Newsletter /> */}
    </div>
  );
}
