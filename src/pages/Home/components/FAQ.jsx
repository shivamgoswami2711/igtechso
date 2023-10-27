import React, { useState } from "react";
import "./style/faq.css";

const data = [
  {
    title: "How to contact with riders emergency ?",
    description:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
  },
  {
    title: "Website reponse taking time, how to improve?",
    description:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
  },
  {
    title: "App installation failed, how to update system information?",
    description:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
  },
];

function FAQ() {
  const [currentIndex, setCurrentIndex] = useState(null);
  return (
    <section className="FAQ_section">
      <p className="FAQ_Text">Frequent Question</p>
      <h2>Do you have any question</h2>
      <div className="question__box">
        {data.map((item, index) => (
          <div
            className="question__card"
            key={index}
            onClick={() => setCurrentIndex(index)}
          >
            <div className="title_container">
              <div>
                {currentIndex === index ? (
                  <img src={require("../../../assets/plus_icon.png")} alt="" />
                ) : (
                  <img src={require("../../../assets/minus_icon.png")} alt="" />
                )}
              </div>
              <div className="question">{item.title}</div>
            </div>
            <div>
              {currentIndex === index ? <p className="answer">{item.description}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
