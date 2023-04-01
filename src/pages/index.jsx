import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArticleCard from "./components/ArticleCard";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";
import ArticleBody from "./components/ArticleBody";

export default function index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ArticleCard />
      <Newsletter />
      <Footer />
      {/* <Routes>
        <Route path="article-body" element={<ArticleBody />} />
      </Routes> */}
    </div>
  );
}
