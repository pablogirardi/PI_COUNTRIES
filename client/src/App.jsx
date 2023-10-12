//import Cards
import { Route, Routes, useLocation } from "react-router-dom";
import style from "./App.module.css";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing Page/LandingPage";
import Home from "./components/Home/Home";
import DetailCountry from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { useState } from "react";

function App() {
  const location = useLocation();

  return (
    <div className={style.App}>
      {location.pathname === "/home" ? <Nav></Nav> : null}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="/countries/:id" element={<DetailCountry />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
