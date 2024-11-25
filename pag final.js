// Clase Producto
class Producto {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// Clase Servicio
class Servicio {
    constructor(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

// Clase Carrito
class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        this.actualizarCarrito();
    }

    actualizarCarrito() {
        const total = this.productos.reduce((sum, item) => sum + item.precio, 0);
        const carritoTotal = document.querySelector(".carrito-total");
        if (carritoTotal) carritoTotal.textContent = `$${total.toFixed(2)}`;
    }
}

// Clase App
class App {
    constructor() {
        this.carrito = new Carrito();
        this.inicializarEventos();
    }

    inicializarEventos() {
        // Agregar eventos de compra a los botones
        const botonesComprar = document.querySelectorAll(".comprar");
        botonesComprar.forEach((boton, index) => {
            boton.addEventListener("click", () => {
                const productos = [
                    new Producto("Alimento Proplan Cachorro 10 KG", 12000, ""),
                    new Producto("Almohadón 55x55x20", 4500, ""),
                    new Producto("Cucha para perro", 10000, ""),
                    new Producto("Alimento Proplan Gato Adulto 15 KG", 15000, "")
                ];
                this.carrito.agregarProducto(productos[index]);
                alert(`${productos[index].nombre} se ha agregado al carrito.`);
            });
        });

        // Agregar eventos a los botones de servicio
        const botonesServicios = document.querySelectorAll(".service-button");
        botonesServicios.forEach((boton, index) => {
            boton.addEventListener("click", () => {
                const servicios = [
                    new Servicio(
                        "Cuidadores de mascotas",
                        "Atención personalizada y amorosa.",
                        "Cuidadores.png"
                    ),
                    new Servicio(
                        "Paseadores de perros",
                        "Perfecto para dueños ocupados.",
                        "Paseadores.png"
                    )
                ];
                alert(`Has contratado: ${servicios[index].nombre}`);
            });
        });

        // Evento en el botón "Contáctanos"
        const botonContactanos = document.querySelector(".button-primary");
        if (botonContactanos) {
            botonContactanos.addEventListener("click", () => {
                alert("Gracias por contactarnos. ¡Nos pondremos en contacto pronto!");
            });
        }

        // Evento en el botón "Ver más"
        const botonVerMas = document.querySelector(".button-secondary");
        if (botonVerMas) {
            botonVerMas.addEventListener("click", () => {
                alert("Descubre más productos y servicios en nuestra tienda.");
            });
        }
    }
}

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
    new App();
});
