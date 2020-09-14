const colors = ['red', 'gray', 'blue', '#eee'];

let ctx = document.getElementById('canvas_1');

let chartData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  datasets: [{
    lineTension: 0,
    data: [470, 480, 422, 390, 370, 340, 370, 360, 365, 350, 280, 260, 300],
    backgroundColor: 'transparent',
    borderColor: colors[2],
    borderWidth: 1,
    pointRadius: 0,
  }, {
    lineTension: 0,
    data: [551, 530, 503, 490, 533, 570, 520, 470, 530, 410, 420, 400, 420, 370, 350, 400, 420, 460, 489, 430, 423, 456, 398, 406, 410, 340, 480, 470, 420, 490],
    backgroundColor: colors[3],
    pointRadius: 0,
    borderWidth: 1,
    pointBackgroundColor: colors[2],
  }]
};

let myChart = new Chart(ctx, {
  type: 'line',
  labels: 'Cash Flow',
  data: chartData,
  options: {
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    legend: {
      display: false,
    }
  }
});

let ctx_2 = document.getElementById('canvas_2');

let chartData_2 = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  datasets: [{
    lineTension: 0,
    data: [420, 380, 412, 393, 381, 420, 380, 360, 355, 340, 280, 300],
    backgroundColor: 'transparent',
    borderColor: colors[2],
    borderWidth: 1,
    pointRadius: 0,
  }, {
    lineTension: 0,
    data: [579, 570, 503, 609, 583, 580, 500, 470, 520, 400, 312, 400, 420, 370, 350, 400, 420, 500, 489, 430, 323, 456, 398, 406, 302, 420, 580, 520, 420, 490],
    backgroundColor: colors[3],
    pointRadius: 0,
    borderWidth: 1,
    pointBackgroundColor: colors[0]
  }]
};

let myChart_2 = new Chart(ctx_2, {
  type: 'line',
  data: chartData_2,
  options: {
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    legend: {
      display: false,
    }
  }
});