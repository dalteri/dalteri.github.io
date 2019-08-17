var imageCount;
var imagesLoaded;

window.onload = function() {
  display('menu');
  collapse('loading');
}

function toggle(id, cl, on) {
  requestAnimationFrame(function() {
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
  document.getElementById('continueGame').onclick = function() {
    closeMenu();
  };

  ImageLoader(['img/bg1.jpg', 'img/sprite1.png'], function() {
    document.getElementById('bg').src = 'img/bg1.jpg';
    document.getElementById('sprite1').src = 'img/sprite1.png';
    collapse('loading');
  });
}

function setNewGameScreen() {
  document.getElementById('view').innerHTML = '<picture id="bgPic"><img id="bg" class="bg" alt="background"></picture><figure class="sprites"><picture class="m" id="sprite1Pic"><img alt="sprite" id="sprite1"></picture></figure><div class="text"><p id="text">What is that? Where am I?</p></div>';
  collapse('newGame');
  display('continueGame');
  display('saveGame');
  display('view');
  collapse('menu');
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
  collapse('mainMenu');
  display('optionsMenu');
}

function openMenu() {
  document.getElementById('menuBtn').classList.toggle('opened', true);
  menuBtn.onclick = closeMenu;
  display('mainMenu');
  display('menu');
}

function closeMenu() {
  document.getElementById('menuBtn').classList.toggle('opened', false);
  menuBtn.onclick = openMenu;
  collapse('menu');
  collapse('optionsMenu');
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

/**
 * Loader function that helps to trigger a callback when multiple images has been loaded. Besides
 * indicates which images were correctly/wrong loaded.
 *
 * @param {Array} Images An array of strings with the paths to the images.
 * @param {Function} Callback Callback function executed when all images has been loaded or not.
 */
function ImageLoader(Images, Callback) {
  // Keep the count of the verified images
  var allLoaded = 0;

  // The object that will be returned in the callback
  var _log = {
    success: [],
    error: []
  };

  // Executed everytime an img is successfully or wrong loaded
  var verifier = function() {
    allLoaded++;

    // triggers the end callback when all images has been tested
    if (allLoaded == Images.length) {
      Callback.call(undefined, _log);
    }
  };

  // Loop through all the images URLs
  for (var index = 0; index < Images.length; index++) {
    // Prevent that index has the same value by wrapping it inside an anonymous fn
    (function(i) {
      // Image path providen in the array e.g image.png
      var imgSource = Images[i];
      var img = new Image();

      img.addEventListener("load", function() {
        _log.success.push(imgSource);
        verifier();
      }, false);

      img.addEventListener("error", function() {
        _log.error.push(imgSource);
        verifier();
      }, false);

      img.src = imgSource;
    })(index);
  }
}
