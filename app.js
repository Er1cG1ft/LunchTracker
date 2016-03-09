var main = function() {
 
  for (i = 1; i < 9; i+= 1) {
    if (localStorage.getItem($('#' + i).prev().text()) === null) {
     $('#' + i).text(0);
     localStorage.setItem($('#' + i).prev().text(), 0);
  } else {
    $('#' + i).text(localStorage.getItem($('#' + i).prev().text()));
  }
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
  });

}

$(document).ready(main);