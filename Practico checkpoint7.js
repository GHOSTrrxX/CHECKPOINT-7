function calcular(num1, num2, num3, num4) {

  const PrimerosDos = num1 + num2;
  const SegundosDos = num3 + num4;

  const Multiplicacion = PrimerosDos * SegundosDos;

  if (Multiplicacion > 50) {
    console.log(`El numero ${Multiplicacion} es mayor que 50`);

  } else {
    console.log(`El numero ${Multiplicacion} es menor que 50`);
  }
}
calcular(3, 2, 5, 5);
