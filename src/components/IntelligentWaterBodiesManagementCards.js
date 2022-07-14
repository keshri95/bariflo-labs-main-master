import React from "react";

function IntelligentWaterBodiesManagementCards(props) {
  return (
    <div>
      <div className="container-fluid my-1 img-bg">

        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-6 textData">
            <ul className="layoutsChange lh-lg">
              <p className="h4">{props.heading}</p>
              <li>{props.firstpoint}</li>
              <li>{props.secondpoint}</li>
              {props.thirdpoint === "" ? " " : <li>{props.thirdpoint}</li>}
              {props.fourthpoint === "" ? " " : <li>{props.fourthpoint}</li>}

              {props.fifthpoint === "" ? " " : <li>{props.fifthpoint}</li>}

              {props.sixthpoint === "" ? " " : <li>{props.sixthpoint}</li>}
            </ul>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <img className="cardImg" src={props.image} alt="random" />
          </div>
        </div>
      </div>
      {/* <div class="boxesImg">
      <div class="firstCol">
        <div class="wrapText">
          <img class="allImg" src={props.image} alt="aeration" />
          <p>{props.heading}</p>
        </div>
        <div class="wrapText">
          <img class="allImg" src="/img/monitor.svg" alt="monitor" />
          <p>Monitoring System</p>
        </div>
      </div>
      <div class="secCol">
        <div class="wrapText">
          <img class="allImg" src="/img/nutrin.svg" alt="nutrin" />
          <p>Nutrient Control System</p>
        </div>
        <div class="img">
          <img src="/img/frame.png" alt="Frame" />
        </div>
      </div>
      <div class="thirdCol">
        <div class="wrapText">
          <img class="allImg" src="/img/ai.svg" alt="ai" />
          <p>AI- IoT Data analytics</p>
        </div>
        <div class="wrapText">
          <img class="allImg" src="img/eclipse.svg" alt="eclipse" />
          <p>SMART CHECK TRAY</p>
        </div>
      </div>
    </div> */}
      {/* <div className="img-bg"> */}

      {/*   Testing

        <div className="container-fluid my-1">
          <div className="row">
            <div className="col-12 col-md-6 text-bg p-5">
              <ul>
                <p className=" h4">{props.heading}</p>
                <li>{props.firstpoint}</li>
                <li>{props.secondpoint}</li>
                {props.thirdpoint === "" ? " " : <li>{props.thirdpoint}</li>}
                {props.fourthpoint === "" ? " " : <li>{props.fourthpoint}</li>}

                {props.fifthpoint === "" ? " " : <li>{props.fifthpoint}</li>}

                {props.sixthpoint === "" ? " " : <li>{props.sixthpoint}</li>}
              </ul>
            </div>
            <div className="col-12 col-md-6 text-center img-bg">
              <img className="cardImg" src={props.image} alt="random" />
            </div>
          </div>
        </div> */}

      {/* </div> */}

      {/* <div class="Wrap">
        <div class="Data">
          <img src="img/monitor.svg" alt="random" />
        </div>
        <div>
          <p class="title">Monitoring System</p>
          <ul class="Intelligent-water-bodies-management-products-bullet-points">
            <li>Monitoring the water column and sediment respiration rate</li>
            <li>AI model for prediction of growth of species of interest</li>
            <li>Remote operation and monitoring</li>
            <li>Calculates carbon and water credits</li>
            <li>Captures carbon and water credits</li>
            <li>Solar based auto-maneuverable device toxic gase</li>
          </ul>
        </div>
      </div>

      <div class="Wrap">
        <div class="Data">
          <p class="title">Nutrient Control System</p>
          <ul class="Intelligent-water-bodies-management-products-bullet-points">
            <li>Cleaning the surface weed, algae</li>
            <li>Fumigation of lake for mosquito repellant</li>
            <li>Dispension of blanket for reduction of</li>
            <li>evapotranspiration</li>
            <li>Remote operation and monitoring</li>
            <li>Battery operated auto-maneuverable device</li>
            <li>Helps in carbon sequestration</li>
          </ul>
        </div>
        <div>
          <img src="/img/nutrin.svg" alt="random" />
        </div>
      </div>

      <div class="Wrap">
        <div class="Data">
          <img src="/img/ai.svg" alt="random" />
        </div>
        <div>
          <p class="title">AI- IoT div analytics</p>
          <ul class="Intelligent-water-bodies-management-products-bullet-points">
            <li>Display the water parameters</li>
            <li>Display the weather information</li>
            <li>Helps in carbon credit prediction and capture</li>
            <li>Control of devices remotely</li>
          </ul>
        </div>
      </div> */}
      {/* <div className="Intelligent-water-bodies-management-products-container">
        <div className="Intelligent-water-bodies-management-products-heading">
          <h1>{props.heading}</h1>
        </div>
        <div className="Intelligent-water-bodies-management-products-image-box">
          <img src={props.image} alt="aeration-system" />
        </div>

        <div className="Intelligent-water-bodies-management-products-information">
          <h1>{props.information}</h1>
        </div>

        <div className="Intelligent-water-bodies-management-products-bullet-points-box">
          <div>
            <ul className="Intelligent-water-bodies-management-products-bullet-points">
              <li>{props.firstpoint}</li>
              <li>{props.secondpoint}</li>

              {props.thirdpoint === "" ? " " : <li>{props.thirdpoint}</li>}

              {props.fourthpoint === "" ? " " : <li>{props.fourthpoint}</li>}

              {props.fifthpoint === "" ? " " : <li>{props.fifthpoint}</li>}

              {props.sixthpoint === "" ? " " : <li>{props.sixthpoint}</li>}
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default IntelligentWaterBodiesManagementCards;
