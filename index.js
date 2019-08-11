window.onload = function() {
  document.getElementById('loading').style.visibility = "hidden";
}

function startNewGame() {
  document.getElementById('loading').style.visibility = "visible";
  document.getElementById('newGame').style.display = "none";
  document.getElementById('menu').style.visibility = "hidden";
  document.getElementById('menuBtn').style.visibility = "visible";
  document.getElementById('continueGame').onclick = function functionName() {
    closeMenu();
  };
  document.getElementById('loading').style.visibility = "hidden";
}

function continueGame() {
  alert("Продолжение игры");
}

function openLoadGame() {
  alert("Загрузка игры");
}

function openSaveGame() {
  alert("Сохранение игры");
}

function openOptions() {
  alert("Настройки");
}

function openMenu() {
  let menuBtn = document.getElementById('menuBtn');
  if (menuBtn && menuBtn.className.indexOf('opened') == -1) {
    menuBtn.className += ' opened';
    menuBtn.onclick = function() {
      closeMenu();
    };
    // let menu = document.getElementById('menu').style.display = "flex";
    let menu = document.getElementById('menu').style.visibility = "visible";
  }
}

function closeMenu() {
  let menuBtn = document.getElementById('menuBtn');
  if (Boolean(menuBtn && !(menuBtn.className.indexOf(' opened') == -1))) {
    menuBtn.className = menuBtn.className.replace(' opened', '');
    menuBtn.onclick = function() {
      openMenu();
    };
    //let menu = document.getElementById('menu').style.display = "none";
    let menu = document.getElementById('menu').style.visibility = "hidden";
  }
}

let state = {
  textId: 0,
  bg: '',
  sprites: [
    {
      name: '',
      pos: ''
    }
  ],
  music: '',
  choices: []
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

/* View in fullscreen */
function openFullscreen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  var elem = document.documentElement;
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}
