import React, { useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./DateSlider.css";

export default function DateSlider() {
  const sliderRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="slider-container">
      <button className="arrow left-arrow" onClick={scrollLeft}>
        <MdKeyboardArrowLeft />
      </button>
      <div className="dates_sl" ref={sliderRef}>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 30,
        ].map((item, index) => (
          <li
            key={index}
            className={index === selectedIndex ? "selected" : ""}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </div>
      <button className="arrow right-arrow" onClick={scrollRight}>
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}
