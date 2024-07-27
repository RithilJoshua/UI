import "./date.css";
import { MdArrowRightAlt } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dateslider from "./DateSlider";

export default function Dates() {
  return (
    <div className="date_container">
      <div className="date_box">
        <h1>Nearest Treatment</h1>
        <div>
          <p>August 2019</p>
          <MdArrowRightAlt className="cal_icon" />
        </div>
        <div className="slider">
          <Dateslider />
        </div>
      </div>

      <div className="advice_box">
        <h1>Advice</h1>
        <p>
          The clinical service is consultant-led and <br></br>available on a
          24-hour basis
        </p>
        <div>
          <p>More info via the link</p>
          <p>
            <a href="https://www.heftpathology.com/Haematology-Clinical-Advice">
              https://www.heftpathology.com/Haematology-Cli
              <br />
              nical-Advice
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
