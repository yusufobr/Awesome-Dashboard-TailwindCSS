const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Daily Views",
        backgroundColor: "#4CDFE8",
        borderColor: "#4CDFE8",
        data: [
          150000, 280000, 125000, 102000, 290000, 230000, 380000, 300000,
          390000, 275000, 400000, 355000,
        ],
      },
    ],
  };

  const configLineChart = {
    type: "line",
    data,
    options: {},
  };

  var chartLine = new Chart(
    document.getElementById("chartLine"),
    configLineChart
  );