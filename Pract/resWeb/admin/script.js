// Chart data (Example data, you can replace it with your own data)
var attendanceData = {
  series: [{
    name: 'Present',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 101, 92, 84]
  }, {
    name: 'Absent',
    data: [10, 15, 25, 30, 40, 30, 20, 15, 30, 18, 25, 14]
  }],
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

var subjectData = {
  series: [44, 55, 13, 43, 22],
  labels: ['Math', 'English', 'Physics', 'Chemistry', 'History']
};

// Initialize and render the attendance chart
var attendanceChartOptions = {
  chart: {
    type: 'line',
    height: 350
  },
  series: attendanceData.series,
  xaxis: {
    categories: attendanceData.categories
  }
};
var attendanceChart = new ApexCharts(document.querySelector("#attendanceChart"), attendanceChartOptions);
attendanceChart.render();

// Initialize and render the subject chart
var subjectChartOptions = {
  chart: {
    type: 'donut',
    height: 350
  },
  series: subjectData.series,
  labels: subjectData.labels
};
var subjectChart = new ApexCharts(document.querySelector("#subjectChart"), subjectChartOptions);
subjectChart.render();
