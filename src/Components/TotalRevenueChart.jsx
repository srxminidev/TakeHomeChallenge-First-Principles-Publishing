import { useGetIncomeStatementQuery } from "../Services/AlphaVantageApi";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const TotalRevenueChart = () => {
  const { data, error, isLoading } = useGetIncomeStatementQuery();

  console.log(`This is Income statement data: `, data);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (data.Information) {
    return <div>{data.Information}</div>;
  }

  const sortedReports = [...data.quarterlyReports].sort(
    (a, b) => new Date(a.fiscalDateEnding) - new Date(b.fiscalDateEnding)
  );
  const chartData = {
    labels: sortedReports?.map((report) => report.fiscalDateEnding),
    datasets: [
      {
        label: "Total Revenue",
        data: sortedReports?.map((report) => report.totalRevenue),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Quaters",
        },
      },
      y: {
        title: {
          display: true,
          text: "Total Revenue(USD)",
        },
      },
    },
  };

  return (
    <>
      <h1>Total Revenue</h1>
      <div style={{ height: "600px", width: "1000px" }}>
        <Bar data={chartData} options={options} />
      </div>
    </>
  );
};
