import React from "react";
import "./style/workingSection.css";
import upArrow from "../../../assets/arrowup.png";
import downArrow from "../../../assets/arrowDown.png";

function Working() {
  return (
    <section className="working__section">
      <p className="working__text">Whats the function</p>
      <h2>Let's see how it works</h2>
      <div className="work__phase__container">
        <div className="work__phase">
          <div className="phase__container">
            <div className="phase">01 </div>
            <div>
              <img src={downArrow} alt="down Arrow path" />
            </div>
          </div>
          <div className="details">
            <h1>Set disbursement Instructions</h1>
            <p>
              Get your blood tests delivered at home collect a sample from the
              your blood tests.
            </p>
          </div>
        </div>
        <div className="work__phase">
          <div className="phase__container">
            <div className="phase">02 </div>
            <div>
              <img src={upArrow} alt="down Arrow path" />
            </div>
          </div>
          <div className="details">
            <h1>Set disbursement Instructions</h1>
            <p>
              Get your blood tests delivered at home collect a sample from the
              your blood tests.
            </p>
          </div>
        </div>
        <div className="work__phase">
          <div className="phase__container">
            <div className="phase">03 </div>
            <div>
              <img src={downArrow} alt="down Arrow path" />
            </div>
          </div>
          <div className="details">
            <h1>Set disbursement Instructions</h1>
            <p>
              Get your blood tests delivered at home collect a sample from the
              your blood tests.
            </p>
          </div>
        </div>
        <div className="work__phase">
          <div className="phase__container">
            <div className="phase">04 </div>
            <div>
                <div></div>
              {/* <img src="" alt="down Arrow path" /> */}
            </div>
          </div>
          <div className="details">
            <h1>Set disbursement Instructions</h1>
            <p>
              Get your blood tests delivered at home collect a sample from the
              your blood tests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Working;
