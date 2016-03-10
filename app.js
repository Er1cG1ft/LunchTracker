var main = function() {
 
  var dataArr=[];
  
  for (i = 1; i < 9; i+= 1) {
    if (localStorage.getItem($('#' + i).prev().text()) === null) {
     $('#' + i).text(0);
     localStorage.setItem($('#' + i).prev().text(), 0);
     dataArr.push([$('#' + i).prev().text(), 0]);
  } else {
    $('#' + i).text(localStorage.getItem($('#' + i).prev().text()));
    dataArr.push([$('#' + i).prev().text(), parseInt($('#' + i).text())]);
  }
  }
  
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Restaurant');
        data.addColumn('number', 'Times');
        
        data.addRows(dataArr);

        var options = {
          title: 'Restaurant Breakdown',
          is3D: true,
          chartArea: {left:30,top:70,width:'100%',height:'100%'},
          width:550,
          /*titleTextStyle: {color: 'black', fontName: Georgia, fontSize: 10},*/
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
  
  $('#8').text(localStorage.getItem($('#8').prev().text()));
  $('#date').text(localStorage.getItem('date'));
  
  $('.record').click(function() {
    //$(this).parent().prev().text().valueOf();
    var key = $(this).parent().prev().prev().text();
    var count = parseInt(localStorage.getItem(key));
    if (isNaN(count)) {
      alert(count);
    }
    count += 1
    if (isNaN(count)) {
      alert(count);
    }
      
    $(this).parent().prev().text(count.toString());
    localStorage.setItem(key, count);
    
    var date = new Date();
    var upDate = "Last update: " + (date.getMonth() + 1) + "/" +
            date.getDate() +  "/" +
            date.getFullYear() + " @ " +
            date.getHours() + ":" +
            date.getMinutes();
    $('#date').text(upDate);
    localStorage.setItem('date', upDate);
    
    location.reload();
  });

}

$(document).ready(main);