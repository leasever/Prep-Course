// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }
  return newArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  for (var i = 0; i < palabras.length; i++) {
    if (palabras[i] === palabras[0]) {
      var string = palabras[i];
    } else {
      string = string + " " + palabras[i];
    }
  }
  return string;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var resultado = 0;
  for (var i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
  }
  return resultado;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sumaTotal = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    sumaTotal += resultadosTest[i];
  }
  promedio = sumaTotal / resultadosTest.length;
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = Math.max(...numeros);
  return mayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var total = 1;
  if (arguments.length) {
    for (var i = 0; i < arguments.length; i++) {
      total *= arguments[i];
    }
    return total;
  } else {
    return 0;
  }
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var myArr = [];
  function mayorQue(numero) {
    for (var i = 0; i < arreglo.length; i++) {
      if (arreglo[i] > numero) {
        myArr.push(arreglo[i]);
      }
    }
  }
  mayorQue(18);
  return myArr.length;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  var respuesta = " ";
  function comparar(numero) {
    if (numero === 1 || numero === 7) {
      return (respuesta = "Es fin de semana");
    } else {
      return (respuesta = "Es dia Laboral");
    }
  }
  comparar(numeroDeDia);
  return respuesta;
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let respuesta = Boolean;
  function char(numero) {
    var caracter = numero.toString().charAt(0);
    if (caracter == 9) {
      respuesta = true;
    } else {
      respuesta = false;
    }
  }
  char(n);
  return respuesta;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  let respuesta = Boolean;
  function comparar(lista) {
    var count = 0;
    for (var i = 0; i < lista.length; i++) {
      let valor = lista[i];
      if (lista[0] === valor) {
        count++;
      }
    }
    if (count === lista.length) {
      respuesta = true;
    } else {
      respuesta = false;
    }
  }
  comparar(arreglo);
  return respuesta;
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "Enero") {
      newArray.push(array[i]);
    } else if (array[i] === "Marzo") {
      newArray.push(array[i]);
    } else if (array[i] === "Noviembre") {
      newArray.push(array[i]);
    }
  }
  if (newArray.length === 3) {
    return newArray;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var newArrar = [];
  function buscar(numeros) {
    for (var i = 0; i < numeros.length; i++) {
      if (numeros[i] > 100) {
        newArrar.push(numeros[i]);
      }
    }
  }
  buscar(array);
  return newArrar;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var newArray = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    suma += 2;
    if (suma === i) {
      break;
    } else {
      newArray.push(suma);
    }
  }
  if (newArray.length === 10) {
    return newArray;
  } else {
    return "Se interrumpió la ejecución";
  }
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var newArray = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    if (i === 4) {
      continue;
    } else {
      suma += 2;
      newArray.push(suma);
    }
  }
  return newArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
