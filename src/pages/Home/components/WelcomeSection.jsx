import React from "react";
import "./style/welcomeSection.css";
import StarReating from "./StarReating";
import { AiOutlineSearch } from "react-icons/ai";
import supported from "../../../assets/supported.png";
import pattern from "../../../assets/pattern.png";

function WelcomeSection() {
  return (
    <section id="WelcomeSection" className="secrion__first">
      {/* main heading */}
      <div className="main__heading__container">
        <div>
          <p className="heading__reating__box">
            <StarReating star={2} />
            <span>Trused by over 4,332 students</span>
          </p>
          <h1>Learn Design with Nia Matos</h1>
          <p className="Sub__heading">
            Get your blood tests delivered at let home collect sample from the
            victory of the managments that supplies best design system
            guidelines ever.
          </p>
          <div className="search__container">
            <input
              type="search"
              placeholder="Search Course Name"
              className="search__box"
            />
            <AiOutlineSearch className="search_icon" size={24} />
          </div>
          <div>
            <img src={supported} className="Suporrted" alt="Suporrted" />
          </div>
        </div>
      </div>
      {/* video */}
      <div className="video__container">
        <div className="pattern">
          <img src={pattern} alt="" />
        </div>
        <div className="video">
          <div>
            <iframe
              width="445"
              height="580"
              src="https://www.youtube.com/embed/BSuKSJgvCUE"
              title="How to Use Traqq Time Tracker (EASY)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
