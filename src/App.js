import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
function App() {
  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element = {<Home/>}/>
      <Route path="about" element = {<About/>}/>
    </Route>
   </Routes>
  );
}

export default App;
