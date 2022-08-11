const obtenerNumero = () => {
  let numero = prompt("Ingrese un número");

  try {
    if (numero == "") throw "Está vacio";
    if (isNaN(numero)) throw "No es un número";

    numero = Number(numero);

    if (num < 5) throw "El npumero es muy pequeño";
    if (num > 10) throw "El número es muy grande";
  } catch (error) {
    console.log(error);
  }
};
obtenerNumero() 