import React, { useCallback, useState } from "react";
import "../style/pricingplan.css";
import PrimaryButton from "../../components/PrimaryButton";

const PlanButton = ({ onClick, selected, Text, value }) => (
  <div
    onClick={() => onClick(value)}
    className={selected === value ? "seleted plan" : "plan"}
  >
    <p>{Text}</p>
  </div>
);

const PlanCard = ({ data, selecteplan }) => {
  return (
    <div className={`plan__card ${data.recommended ? "recommended" : ""}`}>
      <div>
        {data.recommended ? (
          <div className="recommended__text__container">
            <span className="recommended__text">Recommended</span>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="price__plan__box">
        <div>
          <h3 className="plan_Name">{data.plan}</h3>
          <p className="plan_sub__title">{data.subTitle}</p>
        </div>
        <div>
          {data.price[selecteplan] > 0 ? (
            <>
              <p className="starting_price__text">Starting from</p>
              <p className="price_text">
                {`${data.price[selecteplan]}/${selecteplan}`}
              </p>
            </>
          ) : null}
        </div>
      </div>
      <div>
        {data.feature &&
          data.feature.map((item, index) => (
            <div className="potins_container" key={index}>
              <div>
                {item.available ? (
                  <img
                    src={require("../../../assets/right_icon_color.png")}
                    alt=""
                  />
                ) : (
                  <img src={require("../../../assets/wrong_icon.png")} alt="" />
                )}
              </div>
              <div>{item.feature}</div>
            </div>
          ))}
      </div>
      <div className="Button__container">
        <PrimaryButton text={data.button} />
      </div>
    </div>
  );
};

const data = [
  {
    plan: "Free Plan",
    subTitle: "For Small teams or office",
    button: "Start free trail",
    recommended: false,
    price: {
      monthly: 0,
      yearly: 0,
    },
    feature: [
      {
        available: true,
        feature: "Ultimate access to all course, exercises and assessments",
      },
      {
        available: true,
        feature:
          "Free acess for all kind of exercise corrections with downloads.",
      },
      {
        available: true,
        feature:
          "Total assessment corrections with free download access system",
      },
      {
        available: false,
        feature: "Unlimited download of courses on the mobile app contents",
      },
      {
        available: false,
        feature: "Download and print courses and exercises in PDF",
      },
    ],
  },
  {
    plan: "Premium",
    subTitle: "For startup enterprise",
    recommended: true,
    button: "Subscribe Now",
    price: {
      monthly: 49.0,
      yearly: 200,
    },
    feature: [
      {
        available: true,
        feature: "Ultimate access to all course, exercises and assessments",
      },
      {
        available: true,
        feature:
          "Free acess for all kind of exercise corrections with downloads.",
      },
      {
        available: true,
        feature:
          "Total assessment corrections with free download access system",
      },
      {
        available: true,
        feature: "Unlimited download of courses on the mobile app contents",
      },
      {
        available: true,
        feature: "Download and print courses and exercises in PDF",
      },
    ],
  },
];

function PricingPlan() {
  const [selecteplan, setSelecteplan] = useState("yearly");
  return (
    <section className="pricing__plan__section">
      <p className="pricing__text">Quality features</p>
      <h2>Tutorials that people love most</h2>
      <div>
        <div className="section__button">
          <PlanButton
            onClick={setSelecteplan}
            selected={selecteplan}
            Text={"Monthly"}
            value={"monthly"}
          />
          <PlanButton
            onClick={setSelecteplan}
            selected={selecteplan}
            Text={"Yearly"}
            value={"yearly"}
          />
        </div>
        <div className="plan__card__container">
          {data.map((item, index) => (
            <div>
              <PlanCard data={item} key={index} selecteplan={selecteplan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlan;
