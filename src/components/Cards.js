import  Button from "@material-ui/core/Button";
import React from "react";
import CardItem from "./CardItem";
import "./CSS/Cards.css";
function Cards() {
  return (
    <>

    <div class="container Stroy">
      <div class="col col-4">
        <div class="col">
          <div className="parent">
            <img className="image1" src={require("./images/story-one.png").default} alt="one" />
            <img className="image2" src={require("./images/story-two.png").default} alt="two" />
          </div>
        </div>
      </div>

        <div class="col col-8">
          <div className="d-flex">
            <h1>Our Story</h1>
          </div>
          <div class="col">
            <div class="col">
              <p class="long__paragraph">Bariflo Labs is an industry 4.0 compliant startup has developed water body management system based on Fluid dynamics, IOT, robotics, AI for aqua-farm management, urban water-body management. We offer technological solution for aquafarmers, co-operatives, villages, communities, cities &amp; industries at a variety of scales.</p>
            </div>
          </div>
          {/* <button class="btn btn-info btn-lg">Read More</button> */}
          <Button variant="outlined" size="large">Read More</Button>
        </div>
      </div>
     {/* <div className="cards_upper_part">
        <h1>Our Story</h1>
        <p className="long__paragraph">
          Bariflo Labs is an industry 4.0 compliant startup has developed water
          body management system based on Fluid dynamics, IOT, robotics, AI for
          aqua-farm management, urban water-body management. We offer
          technological solution for aquafarmers, co-operatives, villages,
          communities, cities & industries at a variety of scales.
        </p>
      </div> */}
      <div className="cards">
        <div className="cards__container">
            <p className="h3 text-light">Technology Verticals</p>
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://bariflolabs.com/wp-content/uploads/2020/05/lance-anderson-G2SDLsJp3rg-unsplash-scaled.jpg"
                text="Intelligent Water Bodies Management"
                // label="Click me"
                path="/IntelligentWaterBodiesManagement"
                />
              <CardItem
                src="https://bariflolabs.com/wp-content/uploads/2020/05/lance-anderson-G2SDLsJp3rg-unsplash-scaled.jpg"
                text="Intelligent Aqua Bodies Management"
                // label="Click me"
                path="/IntelligentAquaBodiesManagement"
                />
              <CardItem
                src="https://bariflolabs.com/wp-content/uploads/2019/10/blog-ww-1.jpg"
                text="Intelligent Aqua Vertical Farming"
                // label="Click me"
                path="/IntelligentAquaVerticalFarming"
              />
              <CardItem
                src="https://bariflolabs.com/wp-content/uploads/2019/10/blog-ww-1.jpg"
                text="Intelligent Biofloc Aqua Farming"
                // label="Click me"
                path="/IntelligentBioflocAquaFarming"
                />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

