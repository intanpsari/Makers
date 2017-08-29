/*=================
======Kemajuan=====
===================*/
function move() {
  var elem = document.getElementById("promdas");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function moveP() {
  var elem = document.getElementById("pbo");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function moveW() {
  var elem = document.getElementById("wks");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 70) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function moveS() {
  var elem = document.getElementById("siskom");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 60) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

/*=================
======Login=====
===================*/
function cekLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username=="admin" && password=="admin") {
      alert("Login Sukses");
      window.open("home.html");
    } else {
      alert("Username/password anda salah!");
    }
  
}