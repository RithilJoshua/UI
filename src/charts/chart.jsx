import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function Datachart() {
  const data = {
    labels: ["2016", "2017", "2018", "2019", "2018", "2019"],
    datasets: [
      {
        label: "My Data",
        data: [8, 7.8, 6, 8, 7, 5, 6, 7.8, 6, 8, 7.4, 5.6, 6],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        pointBorderColor: "rgba(75, 192, 192, 1)",
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointStyle: "circle",
        pointRadius: 3, // Consistent dot size
        pointHoverRadius: 3,
        tension: 0.5,
        borderWidth: 2, // Thinner line for data
      },
      {
        label: "Average",
        data: [6, 6.5, 7, 6.8, 6.7, 6.9, 6.4, 6.6, 6.5, 6.8, 6.6, 6.5, 6.7],
        borderColor: "rgba(173, 216, 230, 1)",
        backgroundColor: "rgba(173, 216, 230, 0.2)",
        pointBorderColor: "rgba(173, 216, 230, 1)",
        pointBackgroundColor: "rgba(173, 216, 230, 1)",
        pointStyle: "circle",
        pointRadius: 0, // Remove points
        pointHoverRadius: 0, // Remove hover points
        tension: 0.5,
        borderWidth: 40, // Thicker line for average
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable default legend
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            label += context.raw;
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
        categoryPercentage: 5.0, // Increase the width of the columns
        barPercentage: 5.0, // Increase the width of the columns
      },
      y: {
        min: 2,
        max: 10,
        ticks: {
          stepSize: 4,
        },
        grid: {
          borderDash: [10],
        },
        title: {
          display: true,
          text: "Value",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "400px", height: "200px" }}>
      <Line data={data} options={options} />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <div
            style={{
              width: "0.7rem",
              height: "0.7rem",
              backgroundColor: "rgba(75, 192, 192, 1)",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></div>
          <span style={{ fontSize: "0.8rem" }}>My Data</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "0.7rem",
              height: "0.7rem",
              backgroundColor: "rgba(173, 216, 230, 1)",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></div>
          <span style={{ fontSize: "0.8rem" }}>Average</span>
        </div>
      </div>
    </div>
  );
}

export default Datachart;
