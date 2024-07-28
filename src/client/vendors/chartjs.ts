import Chart from "chart.js/auto";

// at first it will show weekly chart data
async function chartData() {
  /*
3 data endpoints
1. Clicks every 24hrs/per day
2. Likes every 24hrs/per day
3. Sales every 24hrs/per day 
*/

  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  const ctx = document.getElementById("account-chart") as HTMLCanvasElement;
  if (ctx) {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Account Chart",
            data: data.map((row) => row.count),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
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
    });
  }
}

// Ensure the DOM is fully loaded before running the chartData function
document.addEventListener("DOMContentLoaded", chartData);
