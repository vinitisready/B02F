import React from "react";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Header/Header.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Features from "./components/Features/Features.jsx";
import Services from "./components/Services/Services.jsx";
import Advantages from "./components/Advantages/Advantages.jsx";
import Faqs from "./components/Faqs/Faqs.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
 
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Statistics />
      <Banner />
      <Features />
      <Services />
      <Advantages />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;