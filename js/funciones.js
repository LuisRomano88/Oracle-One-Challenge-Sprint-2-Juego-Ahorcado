const nuevoJuego = document.getElementById("btn-nuevo");
const btnGuardarPalabra = document.getElementById("btn-guardar");
const dibujaGuiones = document.getElementById("dibuja-guiones");
const letrasErroneas = document.getElementById("letras-erroneas");
const letrasCorrectas = document.getElementById("letras-correctas");
const finJuego = document.getElementById("finJuego");
const ganador = document.getElementById("ganador");



let palabra;
let nuevaPalabra;
let cantLetras;
let letras = [];
let errores = 7;
let aciertos = 0;
let arrayPalabras = ["ALURA", "JAVA", "JAVASCRIPT", "PROGRAMACION", "DESAFIO", "PERRO","TOMATE","ASTRONAUTA","CAMINAR"];





function palabraSecreta() {
  dibujaGuiones.innerHTML = ""; //limpia los guiones para cargar los nuevos
  var sorteo = Math.floor(Math.random() * arrayPalabras.length);

  for (var i = 0; i <= arrayPalabras.length; i++) {
    if (i === sorteo) {
      palabraSorteada = arrayPalabras[i];
      palabra = palabraSorteada.split("").join("");
      cantLetras = palabra.length;
      //console.log(palabra);

    }
  }
}

function dibujarGuiones() {
  for (var x = 0; x < cantLetras; x++) {
    const span = document.createElement("span");
    dibujaGuiones.appendChild(span);
  }
}

function dibujarLetras() {
  for (var x = 0; x < cantLetras; x++) {
    const letra = document.createElement("h4");
    letrasCorrectas.appendChild(letra);
  }
}



function comprobarLetra(key) {
  let estado = false;
  if ((key >= 64 && letras.indexOf(key)) || (key <= 90 && letras.indexOf(key))) {
    letras.push(key);
    return estado;
  }
  else {
    estado = true;
    return estado;
  }
}


function dibujaErrores() {
  if (errores == 7) {
    dibujarHorca();
  }
  if (errores == 6) {
    dibujarCabeza();
  }

  if (errores == 5) {
    dibujarCuerpo();
  }

  if (errores == 4) {
    dibujarBrazoDer();
  }

  if (errores == 3) {
    dibujarBrazoIzq();
  }

  if (errores == 2) {
    dibujarPiernaIzq();
  }
  if (errores == 1) {
    dibujarPiernaDer();
  }

  if (errores == 0) {
    window.location.href = "jugar.html"
  }
}


function guardarPalabra() {
  var textArea = document.getElementById("txt-agregar").value;
  nuevaPalabra = textArea.toUpperCase();
  
  if(nuevaPalabra.length === 0 || nuevaPalabra.length < 3 && nuevaPalabra != 123456789){
    
    alert("Debe Ingresar Una Palabra Con Minimo 3 Letras");

  }else{
      arrayPalabras.push(nuevaPalabra);
      location.href='jugar.html';
  }

}

function borrarTextArea() {
  document.getElementById("txt-agregar").value = "";
}



btnGuardarPalabra?.addEventListener("click", ()=> {


  guardarPalabra();
  borrarTextArea();
  console.log(arrayPalabras);
});

nuevoJuego?.addEventListener("click", () => {
 
  nuevoJuego.disabled = true;
  errores = 7;
  aciertos = 0;
  ganador.innerHTML = "";
  letrasErroneas.innerHTML = "";
  finJuego.innerHTML = "";
  palabraSecreta();
  dibujarGuiones();
  
  console.log(arrayPalabras)

  document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();
    
    comprobarLetra(letra);

    if (comprobarLetra(letra) && palabra.includes(letra)) {

      letras.push(letra);
      var acerto = false;
      for (var i = 0; i < palabra.length; i++) {

        //no repite la letra al ser ingresadas 
        var unicos = letras.filter((valor, indice) => {
          return letras.indexOf(valor) === indice;
        }
        );
        //console.log("Unicos " + unicos)

        if (letra === palabra[i] ) {
          
          /*console.log("Letra ingresa " + letra + " posicion " + " " + i + " de la palabra " +palabra+" acerto ? "+acierto);*/
          let letraCorrecta = dibujaGuiones.childNodes;
          letraCorrecta[i].innerHTML = letra;
          aciertos++;
          acerto = true;
          
        }
        
  
      }
      if(aciertos === palabra.length ){

        ganador.innerHTML = "GANASTE EL JUEGO !";
        nuevoJuego.disabled = false;
      }
    }
    else {
      
      letrasErroneas.innerHTML += letra;
      dibujaErrores();
      errores--;
      if(errores === 0){
        //finJuego.style.display = "block";
        finJuego.innerHTML = "FIN DEL JUEGO !";
        dibujaGuiones.innerHTML = "La palabra buscada era: "+palabra;
      }
    }
  };
});




