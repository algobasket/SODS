
// Set the date we're counting down to
  var countDownDate = new Date("Jul 13, 2024 12:00:00 GMT-4").getTime();

  // Update the count down every 1 second 
  var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for hours, minutes and seconds
  var hours   = 0;
  var minutes = 0; 
  var seconds = 0;
  while (true)
  if (distance >= (1000*60*60)) {

    hours++;
    distance -= (1000*60*60);

  } else
  if (distance >= (1000*60)) {

    minutes++;
    distance -= (1000*60);

  } else
  if (distance >= 1000) {

    seconds++;
    distance -= 1000; 

  } else
    break;

  // Format output-string
  var hours   = (hours < 10 ? '0' + hours : hours);
    minutes = (minutes < 10 ? '0' + minutes : minutes);
    seconds = (seconds < 10 ? '0' + seconds : seconds);

  // Display the result in the element with id="demo"
  if (distance > 0) {
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  } else
    document.getElementById("hours").innerHTML = "EXPIRED";

  }, 1000);


