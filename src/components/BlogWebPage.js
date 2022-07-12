import React from "react";
import styled from "styled-components";
import "../components/CSS/Blog.css";

function BlogWebPage(props) {
  return (
    <>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img src={props.image} class="card-img-top" alt={props.photo} />
              <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogWebPage;
