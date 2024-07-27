import "./card1.css";
import girlImage from "../images/g.jpg";
import { LuDot } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
export default function Card() {
  return (
    <div className="card">
      <div className="head">
        <div className="name">
          <GoDotFill className="icon-b" />
          <h2>Kognum</h2>
        </div>
        <h2>10mg</h2>
      </div>

      <div className="days">
        <div className="cal">
          <p>MON</p>
          <p>WED</p>
          <p>FRI</p>
          <p>SUN</p>
        </div>
        <h3>2 times in a day before food</h3>
      </div>
      <hr></hr>

      <div className="pic">
        <img src={girlImage} className="card1_img" alt="image"></img>
        <div className="pic_data">
          <p>Dr. Isabella Bowers</p>
          <p>California Hospital Medical Center</p>
        </div>
      </div>

      <div className="job">
        <h1>Surgeon</h1>
        <p>spinal paine</p>
      </div>

      <div className="dates">
        <div className="Date">
          <p>Date</p>
          <h2>26 Aug 2019</h2>
        </div>
        <div className="Time">
          <p>Time</p>
          <h2>12:45 AM</h2>
        </div>
      </div>
    </div>
  );
}
