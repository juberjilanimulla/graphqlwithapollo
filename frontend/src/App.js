import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Movies from "./containers/Movies";
const App = () => {
  return (
    <>
      <Header />
      <Movies />
      <Footer />
    </>
  );
};

export default App;
