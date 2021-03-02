new Chart(document.getElementById("line-chart"), {
    type: "line",
    data: {
      labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
      datasets: [
        {
          data: [1433, 1121, 1683, 1478, 1531, 1631, 1321, 1783, 1478],
          label: "",
          border: "none",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      aspectRatio: 2,
      title: {
        display: true,
        text: "احصائيات المشاهدات",
        fontSize: "30",
        position: "top",
      },
    },
  });