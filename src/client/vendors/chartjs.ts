import Chart, { ChartConfiguration } from "chart.js/auto";

document.addEventListener("DOMContentLoaded", function () {
  /*
3 data endpoints
1. Clicks every 24hrs/per day
2. Likes every 24hrs/per day
3. Sales every 24hrs/per day 
*/

  const data = [
    { date: 2010, count: 10 },
    { date: 2011, count: 20 },
    { date: 2012, count: 15 },
    { date: 2013, count: 25 },
    { date: 2014, count: 22 },
    { date: 2015, count: 30 },
    { date: 2016, count: 28 },
  ];

  const views = [
    { date: 2010, count: 20 },
    { date: 2011, count: 30 },
    { date: 2012, count: 5 },
    { date: 2013, count: 15 },
    { date: 2014, count: 29 },
    { date: 2015, count: 40 },
    { date: 2016, count: 28 },
  ];

  const likes = [
    { date: 2010, count: 10 },
    { date: 2011, count: 20 },
    { date: 2012, count: 5 },
    { date: 2013, count: 15 },
    { date: 2014, count: 29 },
    { date: 2015, count: 40 },
    { date: 2016, count: 28 },
  ];
  const ctx = document.getElementById("account-chart") as HTMLCanvasElement;

  let chart: Chart | undefined;
  // at first it will show weekly chart data
  function chartData(selectedData: { date: number; count: number }[]) {
    if (chart) {
      chart.destroy();
    }

    if (ctx) {
      const config: ChartConfiguration = {
        type: "bar",
        data: {
          labels: selectedData.map((row) => row.date),
          datasets: [
            {
              label: "Chart Data",
              data: selectedData.map((row) => row.count),
              backgroundColor: "rgba(75, 192, 192, 0.2)", // Light Blue
              borderColor: "rgba(75, 192, 192, 1)", // Dark Blue
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      };

      chart = new Chart(ctx, config);
    }
  }

  document
    .getElementById("chart-data-type")
    ?.addEventListener("change", (e) => {
      const selectedChartDataType = (e.target as HTMLSelectElement).value;

      let selectedData;

      switch (selectedChartDataType) {
        case "revenue":
          selectedData = data;
          break;
        case "views":
          selectedData = views;
          break;
        case "likes":
          selectedData = likes;
          break;
        default:
          selectedData = data;
      }

      chartData(selectedData);
    });
  chartData(data);
});

// Ensure the DOM is fully loaded before running the chartData function
// document.addEventListener("DOMContentLoaded", chartData);
