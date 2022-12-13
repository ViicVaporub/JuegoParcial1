const draggableListItems = document.querySelectorAll('.draggable-list li');
const endMessage = document.getElementById('endMessage');

// current phrase being dragged
let selectedId;

// target phrase
let dropTargetId;

// counter for correct phrases
let matchingCounter = 0;

addEventListeners();

function dragStart() {
  selectedId = this.id;
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragOver(ev) {
  ev.preventDefault();
}

function dragDrop(ev) {
  dropTargetId = this.id;
  if (checkForMatch(selectedId, dropTargetId)) {
    document.getElementById(selectedId).innerHTML = "";
    document.getElementById(dropTargetId).innerHTML = "";
    if (data == 'Oso') {
      document.getElementById('oso').play();
    }
    if (data == 'Delfin') {
      document.getElementById('delfin').play();
    }
    if (data == 'Elefante') {
      document.getElementById('elefante').play();
    }
    if (data == 'Leon') {
      document.getElementById('leon').play();
    }
    if (data == 'Mapache') {
      document.getElementById('mapache').play();
    }
    if (data == 'Mono') {
      document.getElementById('mono').play();
    }
    if (data == 'Murcielago') {
      document.getElementById('murcielago').play();
    }
    if (data == 'Pinguino') {
      document.getElementById('pinguino').play();
    }
    if (data == 'Rinoceronte') {
      document.getElementById('rinoceronte').play();
    }
    if (data == 'Tortuga') {
      document.getElementById('tortuga').play();
    }
    Puntos++;
    item++;
    $("#Puntaje").html('<span class="label label-default">Puntos: ' + Puntos + '</span>');

    if (item == 3) {
      for (i = 0; i < 3; i++) {
        indice = Math.floor(Math.random() * Animales.length);
        item = Animales[indice];
        Juego[i] = item;
        Animales.splice(indice, 1);
      }

      tiempo = setInterval(function () { IniciarJuego(); }, 800);
    }
    win();
  } else if (checkForMatch2(selectedId, dropTargetId)) {
    if (data == 'Oso') {
      document.getElementById('oso').play();
    }
    if (data == 'Delfin') {
      document.getElementById('delfin').play();
    }
    if (data == 'Elefante') {
      document.getElementById('elefante').play();
    }
    if (data == 'Leon') {
      document.getElementById('leon').play();
    }
    if (data == 'Mapache') {
      document.getElementById('mapache').play();
    }
    if (data == 'Mono') {
      document.getElementById('mono').play();
    }
    if (data == 'Murcielago') {
      document.getElementById('murcielago').play();
    }
    if (data == 'Pinguino') {
      document.getElementById('pinguino').play();
    }
    if (data == 'Rinoceronte') {
      document.getElementById('rinoceronte').play();
    }
    if (data == 'Tortuga') {
      document.getElementById('tortuga').play();
    }
    Puntos++;
    item++;
    $("#Puntaje").html('<span class="label label-default">Puntos: ' + Puntos + '</span>');

    if (item == 3) {
      for (i = 0; i < 3; i++) {
        indice = Math.floor(Math.random() * Animales.length);
        item = Animales[indice];
        Juego[i] = item;
        Animales.splice(indice, 1);
      }
      tiempo = setInterval(function () { IniciarJuego(); }, 800);
    }
    win();
  } else {
    document.getElementById('xyz').play();
    //alert("Fallaste, intentalo de nuevo!"); 
    //Puntos=0;
    $("#Puntaje").html('Puntos:' + Puntos + '');

  }
}

function checkForMatch(selected, dropTarget) {
  switch (selected) {
    case 'e1':
      data = Juego[0];
      return dropTarget === 's1' ? true : false;

    case 'e2':
      data = Juego[1];
      return dropTarget === 's2' ? true : false;

    case 'e3':
      data = Juego[2];
      return dropTarget === 's3' ? true : false;

    default:
      return false;
  }
}



function addEventListeners() {
  draggableListItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
  })
}

var Animales = ["Delfin", "Elefante", "Leon", "Mapache", "Mono", "Murcielago", "Oso", "Pinguino", "Rinoceronte", "Tortuga"];



var Juego = [], indice, item, tiempo, Puntos = 0;
$(document).ready(function () { IniciarJuego(); });

function IniciarJuego() {
  Animales = ["Delfin", "Elefante", "Leon", "Mapache", "Mono", "Murcielago", "Oso", "Pinguino", "Rinoceronte", "Tortuga"];

  indice = 0;
  item = 0;

  for (i = 0; i < 3; i++) {
    indice = Math.floor(Math.random() * Animales.length);
    item = Animales[indice];
    Juego[i] = item;
    Animales.splice(indice, 1);
  }
  indice = Math.floor(Math.random() * Juego.length);
  item = 0;


  clearInterval(tiempo);
  document.getElementById("e1").innerHTML = '<a href="#"><img src="img/' + Juego[0] + '.png" id=' + Juego[0] + '  style="cursor:move; height: 40vh; width:20vw;" /></a> <p style="font-weight: bold;font-size: 20px;">'+Juego[0]+'</p>;'
  document.getElementById("e2").innerHTML = '<a href="#"><img src="img/' + Juego[1] + '.png" id=' + Juego[1] + '  style="cursor:move; height: 40vh; width:20vw;" /></a><p style="font-weight: bold;font-size: 20px;">'+Juego[1]+'</p>'
  document.getElementById("e3").innerHTML = '<a href="#"><img src="img/' + Juego[2] + '.png" id=' + Juego[2] + '  style="cursor:move; height: 40vh; width:20vw;" /></a><p style="font-weight: bold;font-size: 20px;">'+Juego[2]+'</p>'

  document.getElementById("s1").innerHTML = '<img src="img/' + Juego[0] + '.jpg" >';
  document.getElementById("s2").innerHTML = '<img src="img/' + Juego[1] + '.jpg" >';
  document.getElementById("s3").innerHTML = '<img src="img/' + Juego[2] + '.jpg" >';

}


function win() {
  if (Puntos == 10) {
    alert("Felicidades haz ganado");
    window.location.href = "felicidades.html";
  }
}

function checkForMatch2(selected, dropTarget) {
  switch (selected) {
    case 's1':
      data = Juego[0];
      return dropTarget === 'e1' ? true : false;

    case 's2':
      data = Juego[1];
      return dropTarget === 'e2' ? true : false;

    case 's3':
      data = Juego[2];
      return dropTarget === 'e3' ? true : false;

    default:
      return false;
  }
}

