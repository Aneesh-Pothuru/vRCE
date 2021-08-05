export const cpuUsageChart = {
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct'],
      series: [
        [12, 23, 42, 84, 62, 72, 31, 44, 26, 12]
      ]
    },
    options: {
        high: 100,
        low: 0,
        axisX: {
          labelInterpolationFnc: function(value, index) {
            return index % 2 === 0 ? value : null;
          }
        }
    }
}

export const memoryUsage = {
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct'],
      series: [
        [2, 23, 42, 54, 62, 72, 51, 44, 26, 12]
      ]
    },
    options: {
        high: 100,
        low: 0,
        axisX: {
          labelInterpolationFnc: function(value, index) {
            return index % 2 === 0 ? value : null;
          }
        }
    }
}