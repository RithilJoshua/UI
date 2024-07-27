import "../hero/Herostyle.css";
import { MdBento } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { TbHeartRateMonitor } from "react-icons/tb";
import Card from "../cards/card.jsx";
import Card1 from "../cards/card1.jsx";
import Card2 from "../cards/card2.jsx";
import "../cards/card.css";
import "../cards/exam_card.css";
import { RiEyeCloseLine } from "react-icons/ri";
import BoxCards from "../slider/sliding_cards.jsx";
import Charts from "../charts/charts.jsx";
import Dates from "../slider/date.jsx";
export default function Hero() {
  return (
    <div className="bacground">
      <div className="header">
        <ul>
          <li>
            <div className="icon">
              <MdBento size={25} />
              <span>Dashboard</span>
            </div>
          </li>
          <li>
            <div className="icon">
              <CiCirclePlus size={25} />
              <span>Doctor</span>
            </div>
          </li>
          <li>
            <div className="icon">
              <RiContactsLine size={25} />
              <span>Contact</span>
            </div>
          </li>
          <li>
            <div className="icon">
              <TbHeartRateMonitor size={25} />
              <span>Tracker</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="profile">
        <Card className="card1" />
        <div className="heading">
          <p>Notifications</p>
          <p>26 Aug 2019</p>
        </div>
        <div className="cards-t">
          <Card1 className="card2" />
          <Card2 className="card3" />
        </div>
      </div>
      <div className="examination">
        <div className="ex_box">
          <div className="ex_heading">
            <h2>Examinations</h2>
            <div>
              <RiEyeCloseLine className="ex-icon" />
              <p>See All</p>
            </div>
          </div>
          <div className="box_card_container">
            <BoxCards
              text1="21 Jul, 2019"
              text2="Hypertensive crisis"
              text3="Ongoing treatment"
              color="#B0ECF3"
            />
            <BoxCards
              text1="18 Jul, 2019"
              text2="Osteoporosis"
              text3="Incurable"
              color="#FEBAB1"
            />
            <BoxCards
              text1="21 Jul, 2019"
              text2="Hypertensive crisis"
              text3="Examination"
              color="#D2D2D2"
            />
          </div>
          <Charts />
          <Dates />
        </div>
      </div>
    </div>
  );
}
