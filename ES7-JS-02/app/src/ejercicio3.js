//Obtener longitudes de palabras con map
//ObjeƟvo: usar map con strings.
//const palabras = ["sol", "computador", "mesa", "javascript"];
//Genera un arreglo con la longitud de cada palabra.
//Ejemplo esperado:
//[3, 10, 4, 10] 
const palabras= ["sol", "computador", "mesa", "javascript"];
const longitudes= palabras.map((word) => word.length);
console.log(longitudes); // Output: [3, 10, 4, 10]