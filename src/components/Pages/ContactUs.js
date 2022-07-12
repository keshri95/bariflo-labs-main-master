import { Button } from "@material-ui/core";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../CSS/ContactUs.css";
import Navbar from "../Navbar";
// import Map from "./Map";

function ContactUs() {
  //   const [state, setState] = useState({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });

  //   const { name, email, subject, message } = state;
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (!name || !email || !subject || !message) {
  //       toast.error("Please provide value in each input field");
  //     } else {
  //       firebaseDB.child("contacts").push(state);
  //       setState({ name: "", email: "", subject: "", message: "" });
  //       toast.success("Form Submitted Successfully");
  //     }
  //   };

  //   const handleInputChange = (e) => {
  //     let { name, value } = e.target;
  //     setState({ ...state, [name]: value });
  //   };
  return (
    <>
     <Navbar first="HOME" second="OUR TEAM" third="CONTACT US" firstlink="/" secondlink = "/ourteam" thirdlink="/contactus"/>
      <div className="get_a_demo_container">
        <div className="container">
        {/* <div className="get_a_demo_heading"> */}
          <div className="col col-10">
            <div className="col">
            <p className="display-5 text-light">Get a Demo</p>
          </div>
            <div className="col">
              <p className="h5 text-light"> Bariflo Labs wants to grow with the aqua farmers. We want to share our knowledge and resources by piloting our patented technologies: Lotus (Aeration), hyacinth (feeder),Alga (monitoring) &Vibro ( recycling) in the farm ponds. We look forward to support you and your venture by deploying these devices to eliminate your problems for enhancing your productivity.</p>
            </div>
          </div>
      {/* </div> */}
      </div>
    </div>

      <section className="contact-section py-3">
        <div className="container">
          <ToastContainer position="top-center" />
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                      <h3 className="mb-4">Send us a message</h3>
                      <form
                        id="contactForm"
                        className="contactForm"
                        //   onSubmit={handleSubmit}
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                //   onChange={handleInputChange}
                                //   value={name}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                            <label htmlFor="email">Eamil</label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                //   onChange={handleInputChange}
                                //   value={email}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                //   onChange={handleInputChange}
                                //   value={subject}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                            <label htmlFor="message">Message</label>
                              <textarea
                                type="text"
                                className="form-control"
                                name="message"
                                cols="30"
                                rows="4"
                                //   onChange={handleInputChange}
                                //   value={message}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mt-3">
                              {/* <button
                                type="submit"
                                value="Send Message"
                                className="btn">Send Message</button> */}
                                <Button variant="contained" size="large" color="primary">Send Message</Button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <div className="map-responsive">
                    <iframe title="location" src="https://www.google.co.in/maps/place/Bariflo+Labs/@12.9639933,79.1254774,13z/data=!3m1!4b1!4m5!3m4!1s0x3bad479eaaaaaaab:0x7594a2ce5b283f29!8m2!3d12.9639956!4d79.1604971?hl=en-GB" width="600" height="450" frameborder="0" aria-hidden="false" tabindex="0">
                    </iframe>
                    </div>


                      <p className="h3">Let's Connect</p>
                      {/* <p className="mb-4">
                        For more details please fill out the form below & we
                        will get back to you shortly!
                      </p> */}
                      <div className="dbox w-100 d-flex align-items-start">
                        {/* <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div> */}
                        <div className="text pl-3">
                          <p>
                             <span>Address:</span> 
                              VIT TBI, Vellore Campus,
                            Tiruvalam Rd, Katpadi, Vellore, Tamil Nadu 632014
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        {/* <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div> */}
                        <div className="text pl-3">
                          <p>
                            <span>Phone:</span>
                            <a href="tel://7328021033"> 7328021033</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        {/* <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div> */}
                        <div className="text pl-3">
                          <p>
                            <span>Email:</span>
                            <a href="mailto:info@yoursite.com">
                              care@bariflolabs.com, bariflolabs@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        {/* <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div> */}
                        <div className="text pl-3">
                          <p>
                            <span>Website:</span>
                            <a href="https://bariflo.teceads.co.in">
                              bariflo.teceads.co.in
                            </a>
                          </p>
                        </div>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default ContactUs;
