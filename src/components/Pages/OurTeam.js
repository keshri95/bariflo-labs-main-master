import { Grid } from "@material-ui/core";
import React from "react";
import "../CSS/OurTeam.css";
// import NameTags from "../NameTags";
import Navbar from "../Navbar";
import OurTeamCard from "../OurTeamCard";
import { OurTeamCardDetails } from "../OurTeamCardDetails";


function OurTeam() {
    return (
    <>
    {/* <Navbar first="HOME" second="OUR TEAM" third="CONTACT US"/> */}
    <Navbar first="HOME" second="OUR TEAM" third="CONTACT US" firstlink="/" secondlink = "/ourteam" thirdlink="/contactus"/>
      <div className="banner_for_our_team my-3">
        <div className="container">
          <div className="col col-10">
            <div className="col d-flex">
            <p className="display-5 bold text-light">Our Team</p>
          </div>
          <div className="col">
          <div className="our_team_dowm_paragraph">
            <p className="h5 text-light">We are a group of enthusiastic technocrats from diverse backgroud who carry out grounding breaking research in multi-disciplinary domains and offer turnkey solutions to customers</p>
          </div>
            </div>
        </div>
          </div>
      </div>

        <div className="our_team_body">
          <section>
            {/* <div className="select_name_div">
            {
            OurTeamCardDetails.map((slide, index)=>{
                var href = "#"+ slide.id;
                  return (
                  <NameTags href={href} name={slide.name} key={index}/>
                  )
              })
            }
            </div> */}
        

            <div className="our_team_container">
        
              {
                OurTeamCardDetails.map((slide, index) => {
                  return (
                    <OurTeamCard
                    image={slide.image}
                    name={slide.name}
                    desc={slide.desc}
                    para={slide.para}
                    key={index}
                    id={slide.id}
                    href={slide.href}
                    />
                    );
                  })}
            </div>
          </section>
        </div> 
    </>
  );
}

export default OurTeam;
