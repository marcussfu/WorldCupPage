
var countDownDate = new Date("Nov 21, 2022 18:00:00").getTime();

var x = setInterval(function() {
  
  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
  document.getElementById("countDownDays").innerHTML = days;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDownDays").innerHTML = "Play Ball";
  }
}, 1000);
