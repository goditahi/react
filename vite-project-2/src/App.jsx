import React from "react";
import Navbar from "./components/navbar";
import Cards from "./components/cards";

const App = () => {
  return (
    <>
      <Navbar />
      <Cards
        image="https://images.pexels.com/photos/3330895/pexels-photo-3330895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        cardTitle="Hello world"
        link="Go visit"
      />
      <Cards
        image="https://images.pexels.com/photos/16154734/pexels-photo-16154734/free-photo-of-modern-skyscraper-towering-over-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        cardTitle="Hello New York"
        link="Visit me"
      />
    </>
  );
};

export default App;
