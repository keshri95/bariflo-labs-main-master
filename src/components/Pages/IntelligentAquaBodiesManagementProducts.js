import React from "react";
import "../CSS/IntelligentWaterBodiesManagementProducts.css";
import IntelligentWaterBodiesManagementCards from "../IntelligentWaterBodiesManagementCards";
import Navbar from "../Navbar";
function IntelligentAquaBodiesManagementProducts() {
  return (
    <>
      <Navbar
        first="HOME"
        second="OUR TEAM"
        third="CONTACT US"
        firstlink="/"
        secondlink="/ourteam"
        thirdlink="/contactus"
      />
      {/* <div className="Intelligent-water-bodies-management-card-container"> */}
         {/* <div className="heading">
        <div className="header-contain">
          <div className="container">
            <p className="display-4 text-light">
              Intelligent Water Bodies Management Products
            </p>
          </div>
        </div> 
        </div> */}


        {/* Heading */}

        <div className="container-fluid header-contain">
          <div className="row">
            <div className="col-12">
              <p className="display-2 text-light text-start d-flex flex-column justify-content-center">
                Intelligent Water Bodies Management Products
              </p>
            </div>
          </div>
        </div>
      {/* </div> */}

      <IntelligentWaterBodiesManagementCards
        heading="Aeration System"
        image={require("../images/aerationSystem.png").default}
        information="Information"
        firstpoint="Ensure > 4ppm DO at sediment"
        secondpoint="Impact area of > 100mt2"
        thirdpoint="Increase in primary and natural production by 50%"
        fourthpoint="Suitable for rejuvenation and aquafarming"
        fifthpoint="Captures carbon and water credits"
        sixthpoint="Remote operation and monitoring"
      />
      <IntelligentWaterBodiesManagementCards
        heading="Monitoring System"
        image={require("../images/monitoringSystem.png").default}
        information="Information"
        firstpoint="Monitoring the water column and sediment respiration rate"
        secondpoint="AI model for prediction of growth of species of interest"
        thirdpoint="Remote operation and monitoring"
        fourthpoint="Calculates carbon and water credits"
        fifthpoint="Solar based auto-maneuverable device"
        sixthpoint="toxic gases"
      />
      <IntelligentWaterBodiesManagementCards
        heading="Nutrient Control System"
        image={require("../images/nutrientControlSystem.png").default}
        information="Information"
        firstpoint="Cleaning the surface weed, algae"
        secondpoint="Fumigation of lake for mosquito repellant"
        thirdpoint="Dispension of blanket for reduction of evapotranspiration"
        fourthpoint="Remote operation and monitoring"
        fifthpoint="Battery operated auto-maneuverable device"
        sixthpoint="Helps in carbon sequestration"
      />
      <IntelligentWaterBodiesManagementCards
        heading="AI- IoT Data analytics"
        image={require("../images/ai-iotdataanalytics.png").default}
        information="Information"
        firstpoint="Display the water parameters"
        secondpoint="Display the weather information"
        thirdpoint="Helps in carbon credit prediction and capture"
        fourthpoint="Control of devices remotely"
        fifthpoint=""
        sixthpoint=""
      />
    </>
  );
}

export default IntelligentAquaBodiesManagementProducts;
