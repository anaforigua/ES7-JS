const ventas = [
 { producto: "Mouse", cantidad: 3, precio: 50000 },
 { producto: "Teclado", cantidad: 2, precio: 120000 },
 { producto: "Monitor", cantidad: 1, precio: 800000 },
 { producto: "USB", cantidad: 5, precio: 30000 }
];

// 1. Filtrar cantidad >= 2
const filtrados = ventas.filter(v => v.cantidad >= 2);

// 2. Ordenar por precio de mayor a menor
filtrados.sort((a, b) => b.precio - a.precio);

// 3. Crear frases
const frases = filtrados.map(v => {
 return v.producto + " - Total: " + (v.cantidad * v.precio);
});

console.log(frases);

// 4. Calcular total de ventas
const totalVentas = ventas.reduce((acc, v) => {
 return acc + (v.cantidad * v.precio);
}, 0);

console.log("Total ventas:", totalVentas);