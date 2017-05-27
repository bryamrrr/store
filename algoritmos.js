// TIPOS DE DATOS
// Strings/Cadenas 'Esto es un string o cadena'
// Enteros -2
// Floats o coma flotante 2,5 -2,6 -100,7
// Boolean true o false
// Arreglos [2, 'Texto', 2,5, true, 40]

function esMayorDeEdad(edad = 18) {
  if (edad >= 18) {
    console.log("Eres mayor de edad :D");
  } else if (edad > 15) {
    console.log("Pasame 10 lucas y entras");
  } else if (edad > 10) {
    console.log("Ven con tu papá y te dejo entrar");
  } else {
    console.log("No friegues");
  }
}

let i = 0;
for (i; i < 10; i++) {
  console.log('Hola mundo' + i);
}

let j = 9;
while (j < 10) {
  console.log('Hola mundo');
  j++;
}


function puedesEntrar(nombre, edad, estaConAdulto) {
  if (edad > 13) {
    console.log(`${nombre} puedes entrar`);
  } else if (estaConAdulto === true) {
    console.log(`${nombre} puedes entrar, pero tu acompañante también paga`);
  } else {
    console.log(`${nombre} no puedes entrar esta vez`);
  }
}

// String interpolation
// Back tick


// Si la palabra termina en ‘ar’, remover esas dos últimas letras
// let palabra = 'hablar';
// if (palabra.endsWith('ar')) {
//   console.log('El texto termina con ar');
// } else {
//   console.log('El texto no termina con ar');
// }
// Si la palabra inicia con ‘z’, se le añade ‘pe’ al final

function traducir(texto) { // 'zurrar'
  let nuevoTexto = texto; // nuevoTexto = 'zurrar'

  if (texto.toLowerCase().endsWith('ar')) { // true
    nuevoTexto = texto.slice(0, texto.length - 2); // 'zurr'
  }

  if (texto.toLowerCase().startsWith('z')) {
    nuevoTexto += 'pe';
  }

  if (texto.length >= 10) { // constitucion
    const mitad = Math.floor(texto.length / 2);
    const primeraMitad = texto.slice(0, mitad); // 'consti'
    const segundaMitad = texto.slice(mitad); // 'tucion'
    nuevoTexto = primeraMitad + '-' + segundaMitad;
  }

  return nuevoTexto;
}

texto.length / 2
texto.slice(texto.length / 2, texto.length)




// Si la palabra tiene 10 o más letras, se debe partir a la mitad y unir con un guión





























