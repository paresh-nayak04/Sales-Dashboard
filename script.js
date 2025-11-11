document.addEventListener("DOMContentLoaded", () => {
  // Line Chart
  const lineCtx = document.getElementById("lineChart").getContext("2d");
  new Chart(lineCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Sales Growth",
          data: [120, 190, 300, 500, 200, 400],
          borderColor: "#6a0dad",
          backgroundColor: "rgba(106,13,173,0.2)",
          tension: 0.4,
          borderWidth: 2,
          fill: true,
        },
      ],
    },
    options: { responsive: true, plugins: { legend: { display: true } } },
  });

  // Bar Chart
  const barCtx = document.getElementById("barChart").getContext("2d");
  new Chart(barCtx, {
    type: "bar",
    data: {
      labels: ["Chrome", "Firefox", "Safari", "Edge", "Opera"],
      datasets: [
        {
          label: "Browser Usage (%)",
          data: [65, 59, 80, 81, 56],
          backgroundColor: [
            "#6a0dad",
            "#a66efc",
            "#f7b2ff",
            "#c8a2c8",
            "#b266ff",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: { responsive: true, plugins: { legend: { display: false } } },
  });

  // Doughnut Chart
  const doughnutCtx = document.getElementById("doughnutChart").getContext("2d");
  new Chart(doughnutCtx, {
    type: "doughnut",
    data: {
      labels: ["Desktop", "Tablet", "Mobile"],
      datasets: [
        {
          data: [50, 20, 30],
          backgroundColor: ["#6a0dad", "#a66efc", "#f7b2ff"],
          borderWidth: 2,
        },
      ],
    },
    options: { responsive: true, plugins: { legend: { position: "bottom" } } },
  });
});
