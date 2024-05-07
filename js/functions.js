function calcular_costo (carrito){
    return carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad) , 0);
}

function imprimir_boleta (carrito, total){
    const fechaHora = new Date().toLocaleString();
    console.log("-------- Boleta de Compra --------");
    console.log("Fecha y Hora: " + fechaHora);
    console.log("Productos:");
    //recorro el carrito para mostrar cada producto elegido y la cantidad de unidades
    carrito.forEach(producto => console.log(producto.nombre + " x" + producto.cantidad + ": $" + producto.precio * producto.cantidad));
    console.log("-------- ----------- --------\nMonto total: $" + total);
}
