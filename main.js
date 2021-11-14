// Chart options
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333"
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  series: [
    {
      name: "Population",
      data: [
        1090489,
        1023012,
        914989,
        788052,
        760361,
        741620,
        709234,
        697882,
        648940,
        642584
      ]
    }
  ],
  xaxis: {
    categories: [
      "Pudge",
      "Marci",
      "Lion",
      "Ogre Magi",
      "Sniper",
      "PA",
      "Jugg",
      "Invoker",
      "LC",
      "WR"
    ]
  },
  fill: {
    colors: ["#3e05bf"]
  },
  dataLabels: {
    enabled: false
  },

  title: {
    text: "Most played heroes this week",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px"
    }
  }
};

// Init chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// Render chart
chart.render();

// Event example
document.getElementById("change").addEventListener("click", () =>
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: true
      }
    }
  })
);

