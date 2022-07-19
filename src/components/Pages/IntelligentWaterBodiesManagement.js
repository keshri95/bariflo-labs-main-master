import React from "react";
import ProductWebPage from "../ProductWebPage";
import Navbar from "../Navbar";
import "../CSS/IntelligentWaterBodiesManagement.css";
import ReactPlayer from "react-player";

function IntelligentWaterBodiesManagement() {
  const heading = "Intelligent Water Bodies Management";
  const image =
    "https://bariflolabs.com/wp-content/uploads/2020/05/lance-anderson-G2SDLsJp3rg-unsplash-scaled.jpg";
  // const description = "Our patented sediment aeration device diffuses air at the sediment level where the majority of waste and aquatic species shelter and helps in maintaining dissolved oxygen at sediment oxygen boundary layer. It reduces the energy consumption upto 75% and capital cost by 20%. Our cost effective AI based monitoring device will provide data at various places across the waterbody along the water column and sediment water interface to identify practical problems, which existing technologies are devoid of. It can predict water quality parameters such as dissolved oxygen, un-ionized ammonia, phosphate, nitrite, nitrate, sulphide, pH and ORP.Our intelligent data analytics portal predicts issues at the water column starting from sediment and guide monitoring devices to activate aeration and monitoring processes. Our intelligent floating agriculture platform provides phytoremediation by taking out the majority of nitrogen, phosphorus content and reduces the growth of algae and water weeds.";
  const description = "";
  const backgroundImage =
    "https://bariflolabs.com/wp-content/uploads/2020/05/lance-anderson-G2SDLsJp3rg-unsplash-scaled.jpg";
  const urlEco = "https://www.youtube.com/watch?v=Rq5SEhs9lws";
  return (
    <>
      {/* <Navbar first="PRODUCT" second="BLOG" third="DEMO"/> */}
      <Navbar
        first="PRODUCT"
        second="BLOG"
        third="DEMO"
        firstlink="/IntelligentWaterbodiesManagementProducts"
        secondlink="/IntelligentWaterbodiesManagementBlog"
        thirdlink="/IntelligentWaterbodiesManagementDemo"
      />
      <ProductWebPage
        heading={heading}
        image={image}
        description={description}
        backgroundImage={backgroundImage}
      />

        <div className="Rejuvenation-left-box">
          <div className="container container-sm container-md container-lg container-xl">
            <div className="col">
              <div className="col">
                <p className="water-bodies-headings display-5">
                  What is Rejuvenation of water bodies?
                </p>
              </div>
              <div className="col">
                <h4 className="water-bodies-text fs-5">
                  Rejuvenation of water bodies means a complete restoration of
                  biological functioning and biodiversity of life forms within
                  the water body. TThese indicators evaluate the rejuvenation as
                  provided as a guideline by the Central Pollution Control Board
                  (CPCB) below for different usage of water bodies.
                </h4>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th className="text-light" scope="col">
                      Determined Use Case
                    </th>
                    <th className="text-light text-justify" scope="col">
                      Class of criteria
                    </th>
                    <th className="text-light text-justify" scope="col">
                      Criteria
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Drinking water source (without conventional treatment but
                      after disinfection){" "}
                    </td>
                    <td>A</td>
                    <td>
                      <ul>
                        <li>
                          Total Coliform Organism MPN/100 ml shall be 50 or​
                          less,
                        </li>
                        <li>pH between 6.5 to 8.5,</li>
                        <li>Dissolved Oxygen @6ml/l or more.​</li>
                        <li>
                          Biochemical Oxygen Demand: 5 days @200C should​ be
                          3mg/l or less
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Outdoor bathing</td>
                    <td>B</td>
                    <td>
                      <ul>
                        <li>
                          Total Coliform Organism MPN/100 ml shall be 2500 or
                          1000 (desirable),
                        </li>
                        <li>pH between 6.5 to 8.5, </li>
                        <li>Dissolved Oxygen @5ml/l or more.​</li>
                        <li>
                          Biochemical Oxygen Demand: 5 days @200C should be
                          3mg/l or less
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Propagation of wildlife & fisheries​</td>
                    <td>C</td>
                    <td>
                      <ul>
                        <li>pH between 6 to 9,</li>
                        <li>Dissolved Oxygen @4ml/l or more. </li>
                        <li>Free ammonia @1.2mg/l or less</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Irrigation, Industrial Cooling, Controlled Waste Disposal​
                    </td>
                    <td>D</td>
                    <td>
                      <ul>
                        <li>pH between 6 to 9,</li>
                        <li>
                          Electrical Conductivity at 250C micro mhos/cm
                          Max.2250.
                        </li>
                        <li>Sodium absorption Ratio max. 26 mg/l</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="col">
                <div className="col">
                  <p className="water-bodies-headings fs-4">
                    What is Restoration of water bodies?
                  </p>
                </div>
                <div className="col">
                  <p className="water-bodies-text fs-6">
                    The restoration of water bodies means bringing back the
                    biodiversity of the original system, that is the state of
                    the fisheries potential (past and present), and the
                    possibilities for enhancement of aesthetic qualities of the
                    natural ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>

        <div className="player-wrapper">
          <ReactPlayer className="react-player" width="100%" controls={true} url={urlEco} />
        </div>
      </div>
      {/* 
      <div className="Restoration_of_water_bodies">
        <div className="Restoration-right-box">
          <h4>
            The restoration of water bodies means bringing back the biodiversity
            of the original system, that is the state of the fisheries potential
            (past and present), and the possibilities for enhancement of
            aesthetic qualities of the natural ecosystem.
          </h4>
        </div>
        
        <div className="Restoration-left-box">
          <h1>What is Restoration of water bodies?</h1>
        </div>
      </div>

      <div className="Ecosystem-before-industrial-revolution">
        <div className="Ecosystem-before-industrial-revolution-heading">
          <h1>Ecosystem before industrial revolution</h1>
        </div>
        <div className="Ecosystem-before-industrial-revolution-image-box">
          <div className="Ecosystem-before-industrial-revolution-image">
            <img
              src={require("../images/ecosystemBefore.png").default}
              alt="ecosystem"
            />
            <img
              src={require("../images/ecosystemBeforeDiagram.png").default}
              alt="ecosystem"
            />
          </div>

        </div>
      </div> */}

      {/* <div className='Ecosystem-before-industrial-revolution'>
            <div className='Ecosystem-before-industrial-revolution-heading'>
                <h1>Ecosystem before industrial revolution</h1>
            </div>
            <div className='Ecosystem-before-industrial-revolution-Diagram-image-box'>
                <div className='Ecosystem-before-industrial-revolution-Diagram-image'>
                    <img src= {require('../images/ecosystemBeforeDiagram.png').default} alt='ecosystem'/>
                </div>
            </div>
        </div> */}

      {/* <div className="Ecosystem-after-industrial-revolution">
        <div className="Ecosystem-after-industrial-revolution-heading">
          <h1>Ecosystem After industrial revolution</h1>
        </div>
        <div className="Ecosystem-after-industrial-revolution-image-box">
          <div className="Ecosystem-after-industrial-revolution-image">
            <img
              src={require("../images/ecosystemAfter.png").default}
              alt="ecosystem"
            />
            <img
              src={require("../images/ecosystemAfterDiagram.png").default}
              alt="ecosystem"
            />
          </div>

        </div>
      </div> */}

      {/* <div className='Ecosystem-after-industrial-revolution'>
            <div className='Ecosystem-after-industrial-revolution-heading'>
                <h1>Ecosystem After industrial revolution</h1>
            </div>
            <div className='Ecosystem-after-industrial-revolution-image-box'>
                <div className='Ecosystem-after-industrial-revolution-image'>
                    <img src= {require('../images/ecosystemAfterDiagram.png').default} alt='ecosystem'/> 
                </div>
            </div>
        </div> */}
    </>
  );
}

export default IntelligentWaterBodiesManagement;