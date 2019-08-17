window.onload = function() {
  display('menu');
  collapse('loading');
}

function toggle(id, cl, on) {
  requestAnimationFrame(function () {
    document.getElementById(id).classList.toggle(cl, on);
  });
}

function hide(id) {
  toggle(id, "hidden", true);
}

function show(id) {
  toggle(id, "hidden", false);
}

function collapse(id) {
  toggle(id, "collapsed", true);
}

function display(id) {
  toggle(id, "collapsed", false)
}

function startNewGame() {
  display('loading');
  setNewGameScreen();
  document.getElementById('continueGame').onclick = function () {
    closeMenu();
  };
  Promise.all([fetch('/img/bg1.jpg'), fetch('/img/sprite1.png')]).then(values => {
    document.getElementById('bg').src = '/img/bg1.jpg';
    document.getElementById('sprite1').src = '/img/sprite1.png';
    collapse('loading');
  });
}

function setNewGameScreen() {
  document.getElementById('view').innerHTML = '<picture id="bgPic"><img id="bg" class="bg" alt="background"></picture><figure class="sprites"><picture class="m" id="sprite1Pic"><img alt="sprite" id="sprite1"></picture></figure><div class="text"><p id="text">What is that? Where am I?</p></div>';
  collapse('newGame');
  display('continueGame');
  display('saveGame');
  display('view');
  hide('menu');
  display('menuBtn');
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
    //let menu = document.getElementById('menu').style.visibility = "visible";
    show('menu');
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
    //let menu = document.getElementById('menu').style.visibility = "hidden";
    hide('menu');
  }
}

let state = {
  textId: 0,
  bg: '',
  sprites: [{
    name: '',
    pos: ''
  }],
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
