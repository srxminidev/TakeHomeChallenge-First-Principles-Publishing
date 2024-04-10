import { Bar } from "react-chartjs-2";
import { useGetBalanceSheetQuery } from "../Services/AlphaVantageApi";
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

export const TotalShareholderEquity = () => {
  const { data, error, isLoading } = useGetBalanceSheetQuery();

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
        label: "Total Shareholder Equity",
        data: sortedReports?.map((report) => report.totalShareholderEquity),
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
          text: "Total Shareholder Equity(USD)",
        },
      },
    },
  };

  return (
    <>
      <h1>Total Shareholder Equity</h1>
      <div style={{ height: "600px", width: "1000px" }}>
        <Bar data={chartData} options={options} />
      </div>
    </>
  );
};
