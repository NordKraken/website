var i = 0;
var txt = 'Crie aplicativos sem linhas infinitas de códigos'; /* The text */
var speed = 18; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("forAnimateTy").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;


