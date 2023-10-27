import React, { useState } from "react";
import "./style/freetutorial.css";
import PrimaryButton from "../../components/PrimaryButton";
import StarReating from "./StarReating";
import { GrFormView } from "react-icons/gr";

const data = [
  {
    reating: 3.2,
    review: 320,
    view: 2500,
    title: "Convert yith sketch zepltension",
    img: require("../../../assets/image.png"),
  },
  {
    reating: 4.2,
    review: 320,
    view: 2500,
    title: "Convert yout theming easily with sketch zeplin extension",
    img: require("../../../assets/image.png"),
  },
  {
    reating: 2.2,
    review: 320,
    view: 2500,
    title: "Convert your wn extension",
    img: require("../../../assets/image.png"),
  },
  {
    reating: 3.2,
    review: 350,
    view: 2500,
    title: "vert your web layo Conly with sketch zepl",
    img: require("../../../assets/image.png"),
  },
  {
    reating: 4.2,
    review: 320,
    view: 2500,
    title:
      "ayout theming easily Convert your web layout theming easily with sketch zeplin extension",
    img: require("../../../assets/image.png"),
  },
  {
    reating: 5.0,
    review: 320,
    view: 2500,
    title: "ah sketch zep Convert your web llin extension",
    img: require("../../../assets/image.png"),
  },
];
function FreeTutotrial() {
  const [currentPage, setCurrentPage] = useState(data.length);
  console.log(currentPage);

  const invisibleButtonClick = () => {
    setCurrentPage((pre) => {
      if (pre == 1) {
        return data.length;
      } else {
        return pre - 1;
      }
    });
  };

  const Slider = ({ data, currentPage, invisibleButtonClick }) => {
    return (
      <div className="silder">
        {data.map((item, index) => {
          return (
            <div
              className={`free__course ${
                currentPage == index + 1 ? "topPage" : ""
              } ${currentPage == index + 2 ? "secondTopPage" : ""}`}
              key={index}
            >
              <div className="img__conatiner">
                <img src={item.img} alt={item.title} />
                <div className="free__button">
                  <img
                    src={require("../../../assets/right_icon_white.png")}
                    alt="free"
                  />
                  <p>Free tutorial</p>
                </div>
              </div>
              <div className="rateing__container">
                <span>
                  <StarReating star={item.reating} />
                </span>
                <span>{`${item.reating}(${item.review} reviews)`}</span>
              </div>
              <h2>{item.title}</h2>
              <div
                className="invisible__button"
                onClick={invisibleButtonClick}
              />
              <div className="view__container">
                <div>
                  <GrFormView size={20} />
                </div>
                <p>{item.view} students watched</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="free__tutorial__section">
      <div>
        <Slider
          data={data}
          invisibleButtonClick={invisibleButtonClick}
          currentPage={currentPage}
        />
        <div className="free__tutorial_ditails">
          <p className="free__tutorial__text">Free tutorial</p>
          <h2>More than thousand of free tutorial upload every weeks</h2>
          <p>
            <span>
              Get your tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </span>
          </p>
          <div className="buttom">
            <PrimaryButton text={"Explore details"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeTutotrial;
