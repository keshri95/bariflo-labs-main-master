import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { makeStyles, styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// const ExpandMore = styled((props) => {
// const { expand, ...other } = props;
//   return <IconButton {...other} />;
//     })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//   }),
// }));

function OurTeamCard(props) {
  const { name, desc, image, para, id, href, index } = props;
  // const [isFlipped, setIsFlipped] = useState(false);

  // const handleClick = () => {
  //   setIsFlipped(!isFlipped);

  // const [expanded, setExpanded] = useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // }
  return (
    <>
      {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"> */}
      {/* front card */}

      {/* Bootstrap card */}
      <div className="card" id={props.id}>
        <img src={props.image} alt="photo" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{props.desc}</h6>
          {/* <h5 className="card-title">{props.desc}</h5> */}
            <p className="card-text">{props.para}</p>
        </div>
        {/* <div className="card-body"> */}
        <div class="card-footer bg-transparent">
          <a href={props.href} target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin my_linkedin_logo" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* <div classNameName="our_team_card" id={props.id}>
          <div classNameName="our_team_content">
            <div classNameName="our_team_imgBx">
              <img src={props.image} alt="profile_picture" />
            </div>
            <div classNameName="our_team_contentBx">
              <h3>
                {props.name}
                <br /> <span>{props.desc}</span>
              </h3>
            </div>
          </div>
          <ul classNameName="sci"> */}
      {/* <li>
              <a href="https://www.facebook.com">
                <i classNameName="fa fa-facebook my_facebook_logo" aria-hidden="true" />
              </a>
            </li> */}
      {/* <li>
              <a href="https://www.twitter.com">
                <i classNameName="fa fa-twitter my_twitter_logo" aria-hidden="true" />
              </a>
            </li> */}
      {/* <li>
              <a href={props.href} target="_blank" rel="noreferrer">
                <i
                  classNameName="fa fa-linkedin my_linkedin_logo"
                  aria-hidden="true"
                />
              </a>
            </li> */}
      {/* <li>
              <a href="https://www.pinterest.com">
                <i classNameName="fa fa-pinterest my_pinterest_logo" aria-hidden="true" />
              </a>
            </li> */}
      {/* </ul> */}
      {/* <div classNameName="our_team_button_div">
            <button classNameName="our_team_button" onClick={handleClick}>
              Read More
            </button>
          </div> */}
      {/* </div> */}

      {/* back card */}
      {/* // <div classNameName="our_team_card">
        //   <div classNameName="our_team_content">
        //     <p classNameName="our_team_paragraph">{props.para}</p>
        //   </div>
        //   <div classNameName="our_team_button_div">
        //     <button classNameName="our_team_button_cancel" onClick={handleClick}>
        //       Cancel
        //     </button>
        //   </div>
        // </div> */}
      {/* // </ReactCardFlip> */}
    </>
  );
}

export default OurTeamCard;
