"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// CO6: Build Systems, Testing, CI/CD & Deployment Engineering - chart primitives are registered once for the bundled client widget.
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: ["Tirupati", "Vizag", "Araku", "Gandikota", "Charminar", "Golconda", "Ramappa", "Thousand Pillar"],
  datasets: [
    {
      label: "Comfort daily budget (INR x1000)",
      data: [6.5, 7.0, 5.5, 5.0, 6.8, 7.1, 5.2, 4.8],
      backgroundColor: [
        "#c97f34",
        "#d99a4e",
        "#e3b570",
        "#f2cb95",
        "#a75e28",
        "#8b4513",
        "#c98c4f",
        "#e7c29a",
      ],
      borderRadius: 18,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "#44403c",
        font: { family: "var(--font-sans)", size: 12 },
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "#57534e", font: { size: 11 } },
      grid: { display: false },
    },
    y: {
      ticks: { color: "#57534e" },
      grid: { color: "rgba(120,113,108,0.15)" },
    },
  },
};

export function TravelChart() {
  return (
    <div className="h-[320px]">
      <Bar data={data} options={options} />
    </div>
  );
}
