(function() {
  'use strict';

  const type = 'line';
  const data = {
    labels: [2010, 2011, 2012, 2013],
    datasets: [{
      label: 'taichiro',
      data: [120, 300, 200, 210]
    }, {
      label: 'ishin',
      data: [200, 150, 300, 450]
    }]
  };
  let options;
  const ctx = document.getElementById('my_chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: type,
    data: data,
    options: options
  });
})();