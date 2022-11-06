import React from "react";
import { Helmet } from "react-helmet-async";
import User from "./users";
import NavBar from "../components/navbar";
import SEO from "../components/Seo";

const Home = () => {
  return (
    <>
      <SEO
        title="Learning React Helmet!"
        description="Beginner friendly page for learning React Helmet."
        name="Company name.'
        type='article."
      />
      <NavBar />
      <User />
    </>
  );
};
export default Home;
