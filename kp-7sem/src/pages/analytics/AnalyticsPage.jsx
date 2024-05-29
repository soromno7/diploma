import { useEffect, useState } from "react";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

function AnalyticsPage() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/record/get-all");
    setData(res.data);
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };

  return (
    <div style={style}>
      <div style={{width: '700px', height: '550px'}}>
        <Line
          data={{
            labels: data.map((data) => data.date),
            datasets: [
              {
                label: "Выручка",
                data: data.map((data) => data.orders_revenue),
              }
            ],
          }}
        />
      </div>
    </div>
  );
}

export default AnalyticsPage;
