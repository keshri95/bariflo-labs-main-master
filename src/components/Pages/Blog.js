import React from "react";
import BlogWebPage from "../BlogWebPage";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { BlogCardDetails } from "./BlogCardDetails";
import BlogCard from './BlogCard';
function Blog() {
  return (
    <>
         <Navbar
        first="PRODUCT"
        second="BLOG"
        third="DEMO"
        firstlink="/IntelligentWaterbodiesManagementProducts"
        secondlink="/IntelligentWaterbodiesManagementBlog"
        thirdlink="/IntelligentWaterbodiesManagementDemo"
      />
        <div className="container">
        <p>This is Blog</p>
        {BlogCardDetails.map((slide, index) => {
              return (
                <BlogCard
                  heading={slide.heading}
                  para={slide.para}
                  image={slide.image}
                  title={slide.title}
                  key={index}
                />
              );
            })}
          </div>
          {/* </body> */}
    </>
  );
}

export default Blog;
