
const canvas = document.getElementById("canvas");

function dibujarHorca(){
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF"; 
ctx.fillRect(150, 280, 100, 10); 

ctx.fillStyle = "#FFFFFF"; 
ctx.fillRect(200, 30, 10, 250); 

ctx.fillStyle = "#FFFFFF"; 
ctx.fillRect(150, 30, 250, 10); 

ctx.fillStyle = "#FFFFFF"; 
ctx.fillRect(390, 30, 10, 50); 
}


function dibujarCabeza(){
//cabeza
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(395, 110, 30, 2, 3 * Math.PI);
ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth=5,
ctx.stroke();
}


function dibujarCuerpo(){
//cuerpo
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF"; 
ctx.fillRect(395, 140, 5, 100); 
}

function dibujarBrazoIzq(){
//brazo izq
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF"; 
ctx.beginPath();
ctx.moveTo(398,150);
ctx.lineTo(350,200); 
ctx.stroke();
}


function dibujarBrazoDer(){
    //brazo der
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF"; 
ctx.beginPath();
ctx.moveTo(398,150);
ctx.lineTo(450,200); 
ctx.stroke();
}

function dibujarPiernaIzq(){
    //pierna izq
    var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF"; 
ctx.beginPath();
ctx.moveTo(400,237);
ctx.lineTo(350,280); 
ctx.stroke();
}

function dibujarPiernaDer(){
//pierna der
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF"; 
ctx.beginPath();
ctx.moveTo(398,238);
ctx.lineTo(450,280); 
ctx.stroke();
}


