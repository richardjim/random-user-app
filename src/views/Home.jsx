import React from "react";
import User from "./users";
import NavBar from "../components/navbar";
import SEO from "../components/Seo";

const Home = () => {
  return (
    <>
      <SEO
        title="Random User Page"
        description="List of Random Users"
        name="AltSchool Africa Test'
        type='article."
      />
   
      <NavBar />
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <div className="mx-auto shadow border p-8 m-10">
          <h1 className="text-3xl font-bold">Random User App</h1>
        </div>
        <User />
      </div>
    
    </>
  );
};
export default Home;
