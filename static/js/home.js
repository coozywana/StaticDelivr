//Stats Count
function countUp(target, elementId, start, speed) {
  var count = start;
  var interval = setInterval(function() {
    count++;
    document.getElementById(elementId).innerHTML = count;
    if (count == target) {
      clearInterval(interval);
    }
  }, speed);
}

countUp(100, 'count-requests', 0, 10); // count requests starting from 0, with speed of 10ms
countUp(1000, 'count-bandwidth', 800, 3); // count bandwidth starting from 800, with speed of 3ms

