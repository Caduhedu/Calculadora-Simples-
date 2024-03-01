function calcular() {
  const numero1 = parseFloat(prompt("Digite o primeiro número:"));
  const operador = prompt("Digite o operador (+, -, *, /):");
  const numero2 = parseFloat(prompt("Digite o segundo número:"));

  let resultado;

  if (operador === '+') {
    resultado = numero1 + numero2;
  } else if (operador === '-') {
    resultado = numero1 - numero2;
  } else if (operador === '*') {
    resultado = numero1 * numero2;
  } else if (operador === '/') {
    resultado = numero1 / numero2;
  } else {
    resultado = 'Operador inválido';
  }

  console.log(resultado); // Imprime o resultado no console
}

calcular();
