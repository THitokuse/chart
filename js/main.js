(function() {
  'use strict';

  const type = 'line';
  const data = {
    labels: ['2019/1', '2019/2', '2019/3', '2019/4'],
    datasets: [{
      label: 'taichiro',
      data: [120, 300, 200, 210]
    }, {
      label: 'ishin',
      data: [200, 150, 300, 750]
    }, {
      label: 'takao',
      data: [150, 200, 300, 500]
    }]
  };
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          suggestedMin: 0,
          suggestedMax: 400,
          stepSize: 100,
          callback: function(value, index, values) {
            return value + '時間';
          }
        }
      }]
    },
    title: {
      display: true,
      text: 'PG勉強時間',
      fontsize: 18
    },
    legend: {
      position: 'right'
    }
  };

  const ctx = document.getElementById('my_chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: type,
    data: data,
    options: options
  });
})();
