
import "./card2.css";
import { IoSettingsOutline } from "react-icons/io5";

export default function Card() {
  return (
    <div className="card">
      <div className="box">
        <div className="yellow_box">
          <h3>5432</h3>
          <div>
            <p>Bess Willis</p>
            <h2>VISA</h2>
          </div>
        </div>

        <div className="settings">
          <IoSettingsOutline className="ic" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}
