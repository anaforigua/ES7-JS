// construit un conversor dque reciba una entrada  (valor +  unidad de origen + unidad de destino)
// validae correctamente la entrada y devolver el valor formateado

const { useSyncExternalStore } = require("react");

// Temperatura: C, F, K
// Longitud: m, cm, km
// Peso: kg, g, lb

// Temperatura
// C a F: (C * 9/5) + 32
// C a K: C + 273.15
// F a C: (F - 32) * 5/9
// F a K: (F - 32) * 5/9 + 273.15
// K a C: K - 273.15
// K a F: (K - 273.15) * 9/5 + 32

// Longitud
// m a cm: m * 100
// m a km: m / 1000
// cm a m: cm / 100
// cm a km: cm / 100000
// km a m: km * 1000
// km a cm: km * 100000

// Peso
// kg a g: kg * 1000
// kg a lb: kg * 2.20462
// g a kg: g / 1000
// g a lb: g / 453.592
// lb a kg: lb / 2.20462
// lb a g: lb * 453.592
// Restricciones
// No usar librerias
//debes validar entradas y manejar errores de forma adecuada
//el programa no debe romperse ante entradas invalidas,
//sino que debe informar al usuario de manera clara y amigable sobre el error y cómo corregirlo.

//VALIDA EL VALOR
function validarvalor(valor) {
  const n = Number(valor);
  if (!Number.isFinite(n)) {
    throw new Error("El valor debe ser un número finito");
  }
  return n;
}
function validarunidadorigen(unidadOrigen) {
  const unidadesValidas = ["C", "F", "K", "m", "cm", "km", "kg", "g", "lb"];
  if (!unidadesValidas.includes(unidadOrigen)) {
    throw new Error(
      "Unidad no válida. Las unidades válidas son: C, F, K, m, cm, km, kg, g, lb",
    );
  }
  return unidadOrigen;
}
function validarUnidadDestino(unidadDestino) {
  const unidadesValidas = ["C", "F", "K", "m", "cm", "km", "kg", "g", "lb"];
  if (!unidadesValidas.includes(unidadDestino)) {
    throw new Error(
      "Unidad de destino no válida. Las unidades válidas son: C, F, K, m, cm, km, kg, g, lb",
    );
  }
  return unidadDestino;
}
function convertir(valor, unidadOrigen, unidadDestino) {
  const valorValidado = validarvalor(valor);
  const unidadOrigenValidada = validarunidadorigen(unidadOrigen);
  const unidadDestinoValidada = validarUnidadDestino(unidadDestino);

//datos

//Temperatura: C, F, K
if (unidadOrigen === "C" && unidadDestino === "F") {
  return (valor * 9) / 5 + 32;
} else if (unidadOrigen === "C" && unidadDestino === "K") {
  return valor + 273.15;
} else if (unidadOrigen === "F" && unidadDestino === "C") {
  return ((valor - 32) * 5) / 9;
} else if (unidadOrigen === "F" && unidadDestino === "K") {
  return ((valor - 32) * 5) / 9 + 273.15;
} else if (unidadOrigen === "K" && unidadDestino === "C") {
  return valor - 273.15;
} else if (unidadOrigen === "K" && unidadDestino === "F") {
  return ((valor - 273.15) * 9) / 5 + 32;
}

//Longitud 
else if (unidadOrigen === "m" && unidadDestino === "cm") {
  return valor * 100;
} else if (unidadOrigen === "m" && unidadDestino === "km") {
  return valor / 1000;
} else if (unidadOrigen === "cm" && unidadDestino === "m") {
  return valor / 100;
} else if (unidadOrigen === "cm" && unidadDestino === "km") {
  return valor / 100000;
} else if (unidadOrigen === "km" && unidadDestino === "m") {
  return valor * 1000;
} else if (unidadOrigen === "km" && unidadDestino === "cm") {
  return valor * 100000;
}

//Peso
else if (unidadOrigen === "kg" && unidadDestino === "g") {
  return valor * 1000;
} else if (unidadOrigen === "kg" && unidadDestino === "lb") {
  return valor * 2.20462;
} else if (unidadOrigen === "g" && unidadDestino === "kg") {
  return valor / 1000;
} else if (unidadOrigen === "g" && unidadDestino === "lb") {
  return valor / 453.592;
} else if (unidadOrigen === "lb" && unidadDestino === "kg") {
  return valor / 2.20462;
} else if (unidadOrigen === "lb" && unidadDestino === "g") {
  return valor * 453.592;
} else {
  throw new Error(
    "Unidades no válidas. Las unidades válidas son: C, F, K, m, cm, km, kg, g, lb",
  );
}}
const valor = 100;
const unidadOrigen = "m";
const unidadDestino = "cm";

//convertir

try {
  const resultado = convertir(valor, unidadOrigen, unidadDestino);
  console.log("El resultado de la conversión es:", resultado);
} catch (error) {
  console.error("Error en la conversión:", error.message);
}
