import Datachart from "./chart";
import "./charts.css";
export default function Charts() {
  return (
    <div className="map_cont">
      <div className="chart_head">
        <h1>Health Curve</h1>
        <div className="chart_days">
          <p>D</p>
          <p>W</p>
          <p>M</p>
          <p>Y</p>
        </div>
      </div>
      <div className="dt_ch">
        <Datachart />
      </div>
    </div>
  );
}
