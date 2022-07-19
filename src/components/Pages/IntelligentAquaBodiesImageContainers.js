import '../CSS/IntelligentAquaBodiesImageContainers.css';
function IntelligentAquaBodiesImageContainers(props){

    return (
      <div className="boxesImg">
        <div className="firstCol">
          <div className="wrapText">
            <img className="allImg" src={props.fImg} alt="aeration" />
            <p>{props.topicName}</p>
          </div>
          {/* <div className="wrapText">
            <img className="allImg" src={props.image} alt="monitor" />
            <p>{props.heading}</p>
          </div>
        </div>
        <div className="secCol">
          <div className="wrapText">
            <img className="allImg" src={props.image} alt="nutrin" />
            <p>Nutrient Control System</p>
          </div>
          <div className="img">
            <img src="/img/frame.png" alt="Frame" />
          </div>
        </div>
        <div className="thirdCol">
          <div className="wrapText">
            <img className="allImg" src={props.image} alt="ai" />
            <p>{props.heading}</p>
          </div>
          <div className="wrapText">
            <img className="allImg" src={props.image} alt="eclipse" />
            <p>{props.heading}</p>
          </div> */}
        </div>
      </div>
    )
}

export default IntelligentAquaBodiesImageContainers;