import Auth from "./components/account/Auth";
import React from "react";
import AddBlog from "./components/addBlog/AddBlog";
import BlogDetails from "./components/blogDetails/BlogDetails";
import Blogs from "./components/blogs/Blogs";
import Header from "./components/header/Header";
import UserBlogs from "./components/userBlogs/UserBlogs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
   <header>
   <Header/>
   </header>
     <main>
     <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/add' element={<AddBlog/>}/>
        <Route path='/myBlogs/:id' element={<BlogDetails/>}/>
        <Route path='/myBlogs' element={<UserBlogs/>}/>
      </Routes>
     </main>
      </>
  );
}

export default App;
