let maxNumber = parseInt(prompt("Ingresa el número hasta donde quieres generar la sucesión de números: "));
let dataOut = document.getElementById("Out");

for (let i = 1; i <= maxNumber; i++) {
    dataOut.innerHTML += `<p> ${i} - ${i % 2 === 0 ? 'Es par' : 'Es impar'} </p>`;
}