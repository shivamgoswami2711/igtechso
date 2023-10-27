import React from "react";
import "./style/infoSection.css";
import PrimaryButton from "../../components/PrimaryButton";

const Box = ({ heading, text, color }) => {
  return (
    <div className="box">
      <div>
        <h2 style={{ color }}>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

function InfoSection() {
  return (
    <section className="info__section">
      <div className="info_box_container">
        <div>
          <div className="box__container">
            <Box
              heading={"80K+"}
              text={"We have more than students"}
              color={"#EF9E48"}
            />
            <Box
              heading={"90+"}
              text={"Daily updated blogpost maintain"}
              color={"#FA578E"}
            />
          </div>
          <div className="box__container">
            <Box
              heading={"150+"}
              text={"Free online tutorials videos avaialble"}
              color={"#FF753A"}
            />
            <Box
              heading={"& 3M"}
              text={"Job posted everydays with  qualification"}
              color={"#E682FF"}
            />
          </div>
        </div>
      </div>
      <div className="detail">
        <p className="core__features__text">Core features</p>
        <h2 className="core__features__title">Smart Jackpots? that you may love this anytime & anywhere</h2>
        <p className="sub__title">
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
          Get your tests delivered at let home collect sample.
        </p>
        <PrimaryButton text={"Explore details"} />
      </div>
    </section>
  );
}

export default InfoSection;
