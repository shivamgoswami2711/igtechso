import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./style/home.css";
import WelcomeSection from "./components/WelcomeSection";
import Features from "./components/Features";
import InfoSection from "./components/InfoSection";
import DesigCourse from "./components/DesigCourse";
import Working from "./components/Working";
import PricingPlan from "./components/PricingPlan";
import FreeTutotrial from "./components/FreeTutotrial";
import FAQ from "./components/FAQ";
import PrimaryButton from "../components/PrimaryButton";

function Home() {
  return (
    <>
      <Header />
      <main>
        <WelcomeSection />
        <Features />
        <InfoSection />
        <DesigCourse />
        <Working />
        <PricingPlan />
        <FreeTutotrial />
        <FAQ />
        <div className="learn__design__Container">
          <h2 className="learn__design">
            Ready to learn design with Nia Matos
          </h2>
          <PrimaryButton text={"Start Learning Today"} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
