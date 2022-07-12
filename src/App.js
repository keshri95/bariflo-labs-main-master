import React, { Fragment } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
// import Navbar from './components/Navbar';
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import OurTeam from "./components/Pages/OurTeam";
import ContactUs from "./components/Pages/ContactUs";
import IntelligentWaterBodiesManagement from "./components/Pages/IntelligentWaterBodiesManagement";
import IntelligentAquaBodiesManagement from "./components/Pages/IntelligentAquaBodiesManagement";
import IntelligentAquaVerticalFarming from "./components/Pages/IntelligentAquaVerticalFarming";
import IntelligentBioflocAquaFarming from "./components/Pages/IntelligentBioflocAquaFarming";
import ScrollToTop from "./components/ScrollToTop";
import IntelligentWaterbodiesManagementProducts from "./components/Pages/IntelligentWaterbodiesManagementProducts";
import IntelligentAquaBodiesManagementProducts from "./components/Pages/IntelligentAquaBodiesManagementProducts";
// import Blog from "./components/Pages/Blog";

function App() {
  return (
    <>
      <React.Fragment>
        {/* <Router> */}
        <ScrollToTop>
          <Routes>
            {/* <Navbar /> */}
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="ourteam" element={<OurTeam />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route
              path="IntelligentWaterBodiesManagement"
              element={<IntelligentWaterBodiesManagement />}
            />
            <Route
              path="IntelligentAquaBodiesManagement"
              element={<IntelligentAquaBodiesManagement />} />
              {/* <Route path="blog" element={<Blog />} /> */}
            {/* </Route> */}
            <Route
              path="IntelligentAquaVerticalFarming"
              element={<IntelligentAquaVerticalFarming />}
            />
            <Route
              path="IntelligentBioflocAquaFarming"
              element={<IntelligentBioflocAquaFarming />}
            />
            <Route
              path="IntelligentWaterbodiesManagementProducts"
              element={<IntelligentWaterbodiesManagementProducts />}
            />
            <Route
              path="IntelligentAquabodiesManagementProducts"
              element={<IntelligentAquaBodiesManagementProducts />}
            />
          </Routes>
          {/* <Outlet /> */}
        </ScrollToTop>
        <Footer />
        {/* </Router> */}
      </React.Fragment>
    </>
  );
}

export default App;
