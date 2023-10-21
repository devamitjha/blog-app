import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Post from "./pages/post/Post";
import Nopage from "./pages/nopage/Nopage";
import Category from "./pages/category/Category";
import Author from "./pages/author/Author";
import Login from "./component/user/Login";
import Register from "./component/user/Register";
function App() {
  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element = {<Home/>}/>
      <Route path="about" element = {<About/>}/>
      <Route path="post/:id" element = {<Post/>}/>
      <Route path="category/:id" element = {<Category/>}/>
      <Route path="author/:id" element = {<Author/>}/>
      <Route path="user/login" element = {<Login/>}/>
      <Route path="user/register" element = {<Register/>}/>
      <Route path="*" element = {<Nopage/>}/>
    </Route>
   </Routes>
  );
}

export default App;
