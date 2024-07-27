import girlImage from "../images/g.jpg";
export default function Card() {
  return (
    <div className="card">
      <img src={girlImage} alt="image" className="card_img"></img>
      <div className="data">
        <h3>Bess Willis</h3>
        <h4>24 years, California</h4>
      </div>
      <div className="components">
        <div className="blood">
          <p className="p1">Blood</p>
          <p>-B</p>
        </div>
        <div className="blood">
          <p className="p1">Height</p>
          <p>170cm</p>
        </div>
        <div className="blood">
          <p className="p1">Weight</p>
          <p>60kg</p>
        </div>
      </div>
    </div>
  );
}
