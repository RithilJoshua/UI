import "./sliding_cards.css";

const BoxCards = ({ text1, text2, text3, color }) => {
  return (
    <div className="boxie">
      <div className="color_box" style={{ backgroundColor: color }}></div>
      <div className="data_box">
        <p>{text1}</p>
        <h2>{text2}</h2>
        <p>{text3}</p>
      </div>
    </div>
  );
};

export default BoxCards;
