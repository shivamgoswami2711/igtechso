import React, { useEffect, useState } from "react";
import "./style/features.css";
import course from "../../../assets/image.png";
import SilderPopuler from "../../components/SilderPopuler";

const data = [
  {
    rateing: 4.9,
    review: 1000,
    image: course,
    view: 2538,
    title: "How to work with prototype design with adobe xd featuring tools",
  },
  {
    rateing: 3.5,
    review: 600,
    image: course,
    view: 2538,
    title: "How to work with prototype design with adobe xd featuring tools",
  },
  {
    rateing: 5,
    review: 350,
    image: course,
    view: 2538,
    title: "How to work with prototype design with adobe xd featuring tools",
  },
  {
    rateing: 4.5,
    review: 400,
    image: course,
    view: 2538,
    title: "How to work with prototype design with adobe xd featuring tools",
  },
  {
    rateing: 4.5,
    review: 400,
    image: course,
    view: 2538,
    title: "How to work with prototype design with adobe xd featuring tools",
  },
  {
    rateing: 4.5,
    review: 400,
    image: course,
    view: 2538,
    title: "How to work with prototype design with adobe xd featuring tools",
  },
  {
    rateing: 4.5,
    review: 400,
    image: course,
    view: 2538,
    title: "How to work with prototype design with adobe xd featuring tools",
  },
  {
    rateing: 4.5,
    review: 400,
    image: course,
    view: 2538,
    title: "How to work with prototype design with adobe xd featuring tools",
  },
  {
    rateing: 4.5,
    review: 400,
    image: course,
    view: 2538,
    title: "How to work with prototype design with adobe xd featuring tools",
  },
];

function Features() {
  const onePostOffSet = 447 + 20;
  const [offset, setOffset] = useState(onePostOffSet * (data.length - 3));

  useEffect(() => {
    const time = setInterval(() => {
      setOffset((pre) => {
        if (pre === 0) {
          return onePostOffSet * (data.length - 3);
        } else {
          return pre - onePostOffSet;
        }
      });
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <section className="features_section">
      <p className="features__text">Quality features</p>
      <h2>Tutorials that people love most</h2>
      <SilderPopuler data={data} delay={2000} />
    </section>
  );
}

export default Features;
