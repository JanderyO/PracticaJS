var productos = [
    { nombre: "Shampoo Pantene", precio: 4.01 },
    { nombre: "Pampers ", precio: 14.14 },
    { nombre: "Toallas humedas", precio: 2.15 },
    { nombre: "Tintes para cabello", precio: 4.85 },
    { nombre: "Aloe vera ", precio: 2.25 },
    { nombre: "Galletas Ritz", precio: 1.75 },
    { nombre: "Chocolatina", precio: 1.35 },
    { nombre: "Leche Salud", precio: 1.90 },
    { nombre: "Cafe Juan Valdez", precio: 19.94 },
    { nombre: "Cereal Azucaritas", precio: 3.40 },
];

for (var i = 0; i < productos.length; i++) {

    var html = "<tr>";
    html += "        <td>" + productos[i].nombre + "</td>";
    html += "        <td>" + productos[i].precio + "</td>";
    html += "</tr>";

    document.getElementById("tbodyProducto").innerHTML += html;
}
