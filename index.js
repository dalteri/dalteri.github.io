window.onload = function() {
  fetch("text.txt?mode=nocache").then(data => data.text()).then(data => {
    animateText(data)
  });
}

function animateText(data) {
  var ele = document.getElementById("text"),
      txt = data.split("");
  ele.innerHTML = "";
  var interval = setInterval(function() {
    if (!txt[0]) {
      return clearInterval(interval);
    };
    ele.innerHTML += txt.shift();
  }, 100);
}
