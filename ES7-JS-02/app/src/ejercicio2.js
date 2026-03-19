//ConverƟr nombres a mayúsculas con map
//ObjeƟvo: transformar cadenas de texto.
//const nombres = ["ana", "luis", "marta", "pedro"];
//Crea un nuevo arreglo con todos los nombres en mayúsculas. 
const values = ["ana", "luis", "marta", "pedro"];
const mayusculas = values.map((name) => name.toUpperCase());
console.log(mayusculas); // Output: ["ANA", "LUIS", "MARTA", "PEDRO"]
