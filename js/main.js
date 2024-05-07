//2da Pre-Entrega:
/**
    A partir de la primer entrega, genere un carrito de compras, donde el usuario selecciona productos y se guardan en un array de objetos. 
    
 */

//Creo una class constructora de productos, que recibe el nombre del producto y su precio
class Producto {
    constructor( nombre, precio){
        this.nombre= nombre;
        this.precio= precio;
    }
}

// genero un Array para almacenar los productos disponibles
let array_productos = [
    new Producto("Helado", 3500),
    new Producto("Pochoclos", 1800),
    new Producto("Chocolates", 2300)
  ];


//_______________________________ Inicio de la compra____________________________________

let carrito = [];  //creo un array vacio que cargo con los productos elegidos
let salir = false; //variable de corte para el bucle

 let comprar = confirm ("¡Bienvenido a nuestra tienda de dulces!\n¿Desea realizar una compra?");
 if (comprar) {
    do{
        let eleccion_compra = parseInt(prompt("Esta es nuestra lista de productos, por favor ingrese el número correspondiente según lo que desea: \n\n1. Helado \n2. Pochoclos \n3. Chocolates \n4. Para finalizar la compra"));

        switch (eleccion_compra){
            case 1: //pongo a los 3 iguales ya q identifica el producto por su indice
            case 2:
            case 3:
                let unidades = prompt ("¿Cuantas unidades desea? \n(Maximo 5 por compra). ")
                if (unidades >= 1 && unidades <= 5){
                    prod_elegido = array_productos[eleccion_compra -1];// El índice es el número de la opción menos 1
                    prod_elegido.cantidad = unidades;
                    carrito.push(prod_elegido); //cargo el carrito con el prod elegido y sus unidades
                } else{
                    alert("El número de unidades indicadas no es válido, vuelva a intentarlo.");
                }
                break;
            case 4: 
            let monto_total= calcular_costo (carrito);
            imprimir_boleta(carrito, monto_total);
            alert("Gracias por elegirnos, la boleta con el monto a total abonar esta impresa en consola!")
            salir= true;
            break;
            default:
              alert("El número seleccionado no es válido, vuelva a intentarlo.");
              break;
        }

    } while (!salir);

} else {
    alert("¡Gracias por considerarnos! Esperamos verte pronto.");
}
 

