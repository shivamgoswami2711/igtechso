import React from "react";
import "./style/desigCourse.css";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import StarReating from "./StarReating";
import right_icon from "../../../assets/right_icon.png";

const data = [
  {
    reating: 4.0,
    review: 392,
    view: 3205,
    title:
      "Professional graphic design tutorial full course with exercise file",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    total_video: 7,
    hours: 4,
  },
  {
    reating: 4.0,
    review: 392,
    view: 3205,
    title:
      "Professional graphic design tutorial full course with exercise file",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    total_video: 7,
    hours: 4,
    details: [
      "How to reduce file pixel dimentions without loosing quality",
      "How to make logo pixel perfects with different extension",
      "Create vector file from restarize layer styles",
      "Make color gradient with photoshop build-in tools",
    ],
  },
  {
    reating: 4.0,
    review: 392,
    view: 3205,
    title:
      "Professional graphic design tutorial full course with exercise file",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    total_video: 7,
    hours: 4,
  },
  {
    reating: 4.0,
    review: 392,
    view: 3205,
    title:
      "Professional graphic design tutorial full course with exercise file",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managments.",
    total_video: 7,
    hours: 4,
  },
];

function DesigCourse() {
  return (
    <section className="desigCourse__section">
      <p className="desigCourse__text">Quality features</p>
      <h2>Tutorials that people love most</h2>
      <div className="desigCourse__Container__box">
        {data.map((item, index) => (
          <div key={index} className="desigCourse__Container">
            <div className="play__button__container">
              <BsFillPlayFill className="play__button" size={60} />
            </div>
            {/* details */}
            <div className="details">
              {/* rateing and review */}
              <div className="rateing">
                <span>
                  <StarReating star={item.reating} />
                </span>
                <span>
                  {`  ${item.reating} (${item.review} reviews) ${item.view} students watched`}
                </span>
              </div>
              {/* title */}
              <div className="title__container">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="detail_points">
                {item.details &&
                  item.details.map((points, index) => (
                    <div key={index}>
                      <div>
                        <img src={right_icon} alt={"right_icon"} />
                      </div>
                      <p>{points}</p>
                    </div>
                  ))}
              </div>
            </div>
            {/* button */}
            <div className="button__Container">
              <span className="button">
                <span>{`${item.total_video} Video Classes | ${item.hours} hrs`}</span>
              </span>
              <span>
                <AiOutlineDown size={24} style={{ color: "#02073E" }} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DesigCourse;
