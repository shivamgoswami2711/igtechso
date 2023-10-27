import React, { useEffect, useState } from "react";
import "./style/silderPopuler.css";
import { GrFormView } from "react-icons/gr";
import StarReating from "../Home/components/StarReating";

function SilderPopuler({ data, delay = 1000 }) {
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
    }, delay);
    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <div className="Populer__tutorial__container">
      <div className="Populer__tutorial__box">
        <div style={{ transform: `translateX(-${offset}px)` }}>
          {data.map((item, index) => (
            <div key={index} className="Populer__tutorial">
              <div className="img__caontainer">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="details">
                <p className="reating">
                  <span>
                    <StarReating star={item.rateing} />
                  </span>
                  <span>{`${item.rateing} (${item.review} reviews)`}</span>
                </p>
              </div>
              <h3>{item.title}</h3>
              <p className="viewer_container">
                <span>
                  <GrFormView size={20} />
                </span>
                <span>{item.view} students watched</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SilderPopuler;
