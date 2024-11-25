// Clase Usuario
class Usuario {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

// Clase Auth para gestionar autenticación
class Auth {
    constructor() {
        this.usuarios = [];
        this.inicializarEventos();
    }

    inicializarEventos() {
        const loginButton = document.getElementById("login-button");
        const signupButton = document.getElementById("signup-button");

        loginButton.addEventListener("click", () => this.iniciarSesion());
        signupButton.addEventListener("click", () => this.registrarUsuario());
    }

    // Método para registrar un usuario
    registrarUsuario() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (this.usuarios.some((usuario) => usuario.email === email)) {
            alert("Este correo ya está registrado.");
            return;
        }

        const nuevoUsuario = new Usuario(email, password);
        this.usuarios.push(nuevoUsuario);
        alert("¡Registro exitoso! Serás redirigido a la página principal.");
        window.location.href = "pag final.html"; // Redirigir a la página principal
    }

    // Método para iniciar sesión
    iniciarSesion() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const usuario = this.usuarios.find(
            (user) => user.email === email && user.password === password
        );

        if (usuario) {
            alert(`¡Bienvenido de nuevo, ${email}!`);
            window.location.href = "pag final.html"; // Redirigir a la página principal
        } else {
            alert("Correo o contraseña incorrectos.");
        }
    }
}

// Inicializar autenticación
document.addEventListener("DOMContentLoaded", () => {
    new Auth();
});
