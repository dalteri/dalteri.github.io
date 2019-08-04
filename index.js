function startNewGame() {
  setGameCss();
}

function setGameCss() {
  let oldcss = document.getElementById('css');
  let newcss = document.createElement('link');
  newcss.setAttribute("rel", "stylesheet");
  newcss.setAttribute("type", "text/css");
  newcss.setAttribute("href", "game.css");
  document.getElementsByTagName("head").item(0).replaceChild(newcss, oldcss);
}

function openLoadGame() {
  alert("Загрузка игры");
}

function openOptions() {
  alert("Настройки");
}

function openMenu() {
  let menuBtn = document.getElementById('menuBtn');
  if (menuBtn && menuBtn.className.indexOf('opened') == -1) {
    menuBtn.className += ' opened';
    menuBtn.onclick = function() {closeMenu();};
    let menu = document.getElementById('menu').style.display = "flex";
  }
}

function closeMenu() {
  let menuBtn = document.getElementById('menuBtn');
  if (Boolean(menuBtn && !(menuBtn.className.indexOf('opened') == -1))) {
    menuBtn.className = menuBtn.className.replace('opened','');
    menuBtn.onclick = function() {openMenu();};
    let menu = document.getElementById('menu').style.display = "none";
  }
}
