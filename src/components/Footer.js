import React from "react";
import "./CSS/Footer.css";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

function Footer() {
  return (
    <FooterBackColor>
      <div className="footer-container">
        <section className="footer-subscription pb-3">
          <p className="footer-subscription-heading">
            Mission is about people, not projects
          </p>
          <p className="footer-subscription-text">
            Stay Tuned for latest products
          </p>
          <div className="input-areas row">
            <div className="col">
              <form>
                <input
                  className="footer-input"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                />
                <Button variant="contained" color="primary" size="large">
                  Subscribe
                </Button>
                {/* <Button buttonStyle="btn btn--primary">Subscribe</Button> */}
              </form>
            </div>
          </div>
        </section>

        {/* -------------------- */}

        <div className="container">
          <div className="row py-5">
            <div className="col">
              <div className="col">
                <Link to="/" className="social-logo">
                  <img
                    src={require("./images/footer-logo.svg").default}
                    alt="bariflo-logo"
                  />
                  <span>BarifloLabs</span>
                  {/* <i className='fab fa-typo3' /> */}
                </Link>
              </div>
            </div>
            <div className="col">
              <p className="h5 text-light ">About Us</p>
              <div className="row footer-link">
                <li>
                  <Link to="/">How it works</Link>
                </li>
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">Investors</Link>
                </li>
                <li>
                  <Link to="/">Terms of Service</Link>
                </li>
              </div>
            </div>
            <div className="col">
              <p className="h5 text-light">Contact Us</p>
              <div className="row footer-link">
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Support</Link>
                </li>
                <li>
                  <Link to="/">Destinations</Link>
                </li>
                <li>
                  <Link to="/">Sponsorships</Link>
                </li>
              </div>
            </div>
            <div className="col">
              <p className="h5 text-light">Videos</p>
              <div className="row footer-link">
                <li>
                  <Link to="/">Submit Video</Link>
                </li>
                <li>
                  <Link to="/">Ambassadors</Link>
                </li>
                <li>
                  <Link to="/">Agency</Link>
                </li>
                <li>
                  <Link to="/">Influencer</Link>
                </li>
              </div>
            </div>
            <div className="col">
              <p className="h5 text-light">Social Media</p>
              <div className="row">
                <div className="col footer-link">
                  <div className="d-flex gap-3 icons">
                    <li>
                      <Link
                        className="social-icon-link Instagram"
                        to="/"
                        target="_blank"
                        aria-label="Instagram"
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="social-icon-link Instagram"
                        to="/"
                        target="_blank"
                        aria-label="LinkedIn"
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        aria-label="Youtube"
                      >
                        <i className="fab fa-youtube" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="social-icon-link twitter"
                        to="/"
                        target="_blank"
                        aria-label="Twitter"
                      >
                        <i className="fab fa-twitter fa-twitter-t" />
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-4 bg-dark">
          <div className="d-flex justify-content-center ">
            <p className="text-light">©Copyright © 2021 Bariflolabs</p>
          </div>
        </div>
        {/* 
  --------------------
*/}
      </div>
    </FooterBackColor>
  );
}

export default Footer;

const FooterBackColor = styled.div`
  background-color: #303133;
`;
