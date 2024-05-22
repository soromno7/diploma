import { useState } from "react";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

function AnalyticsPage() {
  return (
    <div>
      <Bar
        data={{
          labels: ["A", "B", "C"],
          datasets: [
            {
              label: "Revenue",
              data: [200, 300, 400],
            },
            {
                label: "Loss",
                data: [90, 80, 70]
            },
          ],
        }}
      />
    </div>
  );
}

export default AnalyticsPage;
