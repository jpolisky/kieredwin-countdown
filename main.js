const theDate = new Date("Mar 12, 2023 16:52:00").getTime(); // 1678654320000

function addZero(num) {
  var text = Math.floor(num).toString();
  if (text.length > 2) return text;
  return "0".repeat(2 - text.length) + text;
}

var countdown = setInterval(function () {
  var distance = theDate - new Date().getTime();

  var hours = addZero(distance / (1000 * 60 * 60));
  var minutes = addZero((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = addZero((distance % (1000 * 60)) / 1000);

  document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("clock").innerHTML = "Broken up...";
  }
}, 1000);