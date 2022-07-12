import React from "react";
import styled from "styled-components";
import "../../App.css";
import Body from "../Body";
import Cards from "../Cards";
import "../CSS/Home.css";
import Navbar from "../Navbar";

function Home() {
  // const suppoetImages = [
  //   {
  //     id: 1,
  //     src: "/assets/thub.svg",
  //     alt: "thub-logo",
  //   },
  //   {
  //     id: 2,
  //     src: "/assets/nit.svg",
  //     alt: "nit-logo",
  //   },
  //   {
  //     id: 3,
  //     src: "/assets/ciba.svg",
  //     alt: "ciba-logo",
  //   },
  //   {
  //     id: 4,
  //     src: "/assets/book.svg",
  //     alt: "book-logo",
  //   },
  //   {
  //     id: 5,
  //     src: "/assets/dlabs.svg",
  //     alt: "dlabs-logo",
  //   },
  //   {
  //     id: 6,
  //     src: "/assets/six.svg",
  //     alt: "six-logo",
  //   },
  //   {
  //     id: 7,
  //     src: "/assets/thub.svg",
  //     alt: "thub-logo",
  //   },
  //   {
  //     id: 8,
  //     src: "/assets/vit.svg",
  //     alt: "vit-logo",
  //   },
  // ];
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
      <Body />
      <div className="about_company section-spacing">
        <div className="about_overlay">
          <div className="about_container">
            <div className="about_row">
              <div className="container">
                <div className="py-3">
                  <div className="about_text">
                    <div className="about_theme_title_one">
                      <h2>Our Vision</h2>
                      <hr />
                    </div>
                    <p className="our_vision_para">
                      Aspire to be market leader in water body management in the
                      direction of aquafarming by Focusing on employment
                      generation &amp; creation of wealth by leveraging
                      developed technology utilising surface water reserve.
                    </p>
                    <div className="col">
                      <h3 className="col">Mission is about people</h3>
                      <p className="col">
                        Develop sustainable technology and processes for
                        aquaculture farming by solving critical water issues and
                        disease issues which will benifit traditional to
                        institutional farming.
                      </p>
                    </div>
                  </div>
                  <div className="about_video">
                    <iframe
                      width="100%"
                      src="https://www.youtube.com/embed/9Z3kDQ0OCCo"
                      title="video"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards />

      <div className="callout-banner py-5">
        <div className="container">
          <div className="col">
            <div className="row">
              <p className="h2 text-light">
                Provide solutions for the realiable growth
              </p>
            </div>
            <div className="row">
              <p className="text-light text-justify paragraph">
                Bariflo Labs is an industry 4.0 compliant startup has developed
                water body management system based on Fluid dynamics, IOT,
                robotics, AI for aqua-farm management, urban water-body
                management. We offer technological solution for
                aquafarmers,co-operatives,villages,communities,cities &amp;
                industries at a variety of scales.Due to detachment of society
                on surface water bodies such as ponds, lakes, estuaries and
                overexploitation of groundwater due to agricultural, industry
                activities have created critical water stress on urban and rural
                civilization. We, at Bariflo Labs, are solving the water quality
                degradation of lakes, reservoirs by developing a profitable
                socio-technological business model by implementing robotic
                technology developed using the concept of environmental
                hydraulics, Ai, IoT and upgrading traditional methods.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="callout-banner section-spacing">
        <div className="clearfix">
          <div className="title_div">
            <h3 className="title">
              Provide solutions for the realiable growth
            </h3>
          </div>
          <div className="white_line"></div>
          <div className="paragraph_div">
            <p className="paragraph">
              Bariflo Labs is an industry 4.0 compliant startup has developed
              water body management system based on Fluid dynamics, IOT,
              robotics, AI for aqua-farm management, urban water-body
              management. We offer technological solution for
              aquafarmers,co-operatives,villages,communities,cities &amp;
              industries at a variety of scales.Due to detachment of society on
              surface water bodies such as ponds, lakes, estuaries and
              overexploitation of groundwater due to agricultural, industry
              activities have created critical water stress on urban and rural
              civilization. We, at Bariflo Labs, are solving the water quality
              degradation of lakes, reservoirs by developing a profitable
              socio-technological business model by implementing robotic
              technology developed using the concept of environmental
              hydraulics, Ai, IoT and upgrading traditional methods.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="three_icons_div">
        <div className="hand-holding-heart">
          <i
            aria-hidden="true"
            className="fas fa-hand-holding-heart fa-3x "
          ></i>
          <h3>Carp Health Management</h3>
        </div>

        <div className="water">
          <i aria-hidden="true" className="fas fa-water fa-3x"></i>
          <h3>Sedimention Aeration</h3>
        </div>

        <div className="recycle">
          <i aria-hidden="true" className="fas fa-recycle fa-3x"></i>
          <h3>Recycling</h3>
        </div>
      </div> */}

      {/* <div className="about_company section-spacing">
        <div className="about_overlay">
          <div className="about_container">
            <div className="about_row">
              <div className="about_text">
                <div className="about_theme_title_one">
                  <h2>OUR VISION</h2>
                  <hr />
                </div>
                <p className="our_vision_para">
                  Aspire to be market leader in water body management in the
                  direction of aquafarming by Focusing on employment generation
                  &amp; creation of wealth by leveraging developed technology
                  utilising surface water reserve.
                </p>
                <h3 className="mission">
                  Mission is about people not projects
                </h3>
                <p className="our_mission_para">
                  Develop sustainable technology and processes for aquaculture
                  farming by solving critical water issues and disease issues
                  which will benifit traditional to institutional farming.
                </p>
              </div>
              <div className="about_video">
                <iframe
                  width="420"
                  height="315"
                  src="https://www.youtube.com/embed/9Z3kDQ0OCCo"
                  title="video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container py-5">
        <div className="col">
          <div className="row">
            <p className="h2 text-dark">Our Support System</p>
          </div>
          <div className="row">
            <p>Our project are supported by startup Odhisha</p>
          </div>
        </div>
        <SupportImages>
          {/* {suppoetImages.map((list, index
          ) => (
            <div>
              <img key={index.id} src={`${list.toLowerCase()}.svg`} alt={list.alt}/>
            </div>
          ))} */}
          <div>
            <img src="/assets/thub.svg" alt="thub-logo" />
          </div>
          <div>
            <img src="/assets/nit.svg" alt="nit-logo" />
          </div>
          <div>
            <img src="/assets/KIIT_logo.png" style={{width:"52%"}} alt="kiit-logo" />
          </div>
          <div>
            <img src="/assets/ciba.svg" alt="ciba-logo" />
          </div>
          <div>
            <img src="/assets/book.svg" alt="book-logo" />
          </div>
          <div>
            <img src="/assets/dlabs.svg" alt="dlabs-logo" />
          </div>
          <div>
            <img src="/assets/six.svg" alt="six-logo" />
          </div>
          <div>
            <img src="/assets/vit.svg" alt="vit-logo" />
          </div>
        </SupportImages>
      </div>

      {/* <div className="container">
        <div className="support_grid">
          <div className="support_heading">
            <h1>OUR SUPPORT SYSTEM</h1>
          </div>
          <div className="support_paragraph">
            <p>Our project are supported by startup Odhisha</p>
          </div>
          <Patents>
            <div className="support_images">
              <img src="/images/thub.svg" alt="thub-logo"></img>
            </div>
            <div className="support_images">
              <img src="/images/nit.svg" alt="nit-logo"></img>
            </div>
            <div className="support_images">
              <img src="/images/book.svg" alt="book-logo"></img>
            </div>
            <div className="support_images">
              <img src="/images/dlabs.svg" alt="meity-logo"></img>
            </div>
            <div className="support_images">
              <img src="/images/six.svg" alt="t-hub-logo"></img>
            </div>
            <div className="support_images">
              <img src="/images/ciba.svg" alt="ciba-logo"></img>
            </div>
            <div className="support_images">
              <img src="/images/vit.svg" alt="vit-logo"></img>
            </div>
          </Patents>
        </div>
      </div> */}
    </>
  );
}

export default Home;

// const Patents = styled.div`
//   display: flex;
//   overflow-x: hidden;
//   align-items: center;
// `;

const SupportImages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-contents: center;
  gap: 10px;
  justify-items: center;
`;
