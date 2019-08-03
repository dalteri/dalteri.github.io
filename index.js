function startNewGame(){
  let oldcss = document.getElementById('css');
  let newcss = document.createElement('link');
  newcss.setAttribute("rel", "stylesheet");
  newcss.setAttribute("type", "text/css");
  newcss.setAttribute("href", "game.css");
  document.getElementsByTagName("head").item(0).replaceChild(newcss, oldcss);

  let view = document.getElementById('view');
  view.innerHTML = "";
  let bg = document.createElement('img');
  bg.className = 'bg';
  bg.src = 'img/bg1.jpg';
  view.appendChild(bg);
  let sprites = document.createElement('div');
  sprites.className = 'sprites';
  view.appendChild(sprites);
  let spriteFig = document.createElement('figure');
  spriteFig.className = 'm';
  sprites.appendChild(spriteFig);
  let sprite = document.createElement('img');
  sprite.src = 'img/sprite1.gif';
  spriteFig.appendChild(sprite);
  let textBox = document.createElement('div');
  textBox.className = 'text';
  view.appendChild(textBox);
  let text = document.createElement('p');
  text.id = 'text';
  textBox.appendChild(text);
}

function loadGame(){
  alert("Загрузка игры");
}

function options(){
  alert("Настройки");
}
