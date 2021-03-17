let area = 0;
let figura = ''; // 1: Triángulo, 2: Rectángulo y 3: Círculo
let base = 0;
let altura = 0;
let radio = 0;
let dataOut = document.getElementById("Out");

while (figura != '1' && figura != '2' && figura != '3'){
    console.log(typeof(figura));
    console.log(figura);
    figura = prompt("Escriba el número de la figura para calcular el área. 1 - Triángulo, 2 - Rectángulo o 3 - Círculo");
    console.log(figura);
}

switch (figura) {
  case "1":
    base = parseInt(prompt("Escriba el valor de la base"));
    altura = parseInt(prompt("Escriba el valor de la altura"));
    area = (base * altura) / 2;
    dataOut.textContent = `El área del triángulo es ${area}`;
    break;

  case "2":
    base = parseInt(prompt("Escriba el valor de la base"));
    altura = parseInt(prompt("Escriba el valor de la altura"));
    area = base * altura;
    dataOut.textContent = `El área del rectángulo es ${area}`;
    break;

  case "3":
    radio = parseInt(prompt("Escriba el valor del radio"));
    console.log(radio);
    area = Math.PI * radio ** 2;
    dataOut.textContent = `El área del círculo es ${area}`;
    break;
}
