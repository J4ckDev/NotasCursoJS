const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
let DNI = -1;
let posicion = 0;
let dataOut = document.getElementById('Out');

while (DNI.toString().length > 8 || DNI < 0 || DNI == Number.NaN){// || DNI <= 0 || DNI == Number.NaN) {
    DNI = parseInt(prompt('Ingresa tu DNI (Max 8 digitos)'));
}

posicion = Math.round(DNI % 23);

dataOut.innerHTML = `<p>La letra <strong>${letras[posicion]}</strong> corresponde a su DNI ${DNI}</p>`;