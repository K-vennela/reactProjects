import { useState, useEffect } from 'react';
import Listblogs from './Listblogs';
import UseFetchCustomHook from './useFetchCustomHook';

const Home = () => {
    const { data: blogs, pending, error } = UseFetchCustomHook("http://localhost:8000/blogs")
    
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }
    
    // passing function as a reference
    return (
        <div className="home">
            {blogs && <Listblogs blogs={blogs} />} 
      </div>
    );
  }
 
export default Home;