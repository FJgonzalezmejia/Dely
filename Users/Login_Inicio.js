// Firebase initialization and database reference
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7RZJ0Zs2QiuWt8lxGruB5dBjgIlSEBjI",
    authDomain: "deliverygourmet-c367d.firebaseapp.com",
    projectId: "deliverygourmet-c367d",
    storageBucket: "deliverygourmet-c367d.appspot.com",
    messagingSenderId: "1099409715996",
    appId: "1:1099409715996:web:d33b21ae6c134ab0c840d9",
    measurementId: "G-YSL4M6FFH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Iniciar sesión con correo y contraseña
document.getElementById('button').addEventListener('click', async () => {
    var Correo = document.getElementById('correo').value;
    var Contraseña = document.getElementById('contraseña').value;

    // Verificar si todos los campos están llenos
    if (Correo === '' || Contraseña === '') {
        alert('Por favor, llena todos los campos');
        return;
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, Correo, Contraseña);
        const user = userCredential.user;

        alert("Ha iniciado sesión exitosamente \n Bienvenido " + user.email);

        // Limpiar los campos de entrada después de enviar los datos
        document.getElementById('correo').value = '';
        document.getElementById('contraseña').value = '';

        // Redirigir a la pestaña del Inicio Principal
        window.location.href = "Inicio_Principal.html";

    } catch (e) {
        console.error("Error al iniciar sesión: ", e);
        alert("Error al iniciar sesión");
    }
});

// Iniciar sesión con Google
document.getElementById('googleButton').addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        alert("Has iniciado sesión con Google \n Bienvenido " + user.displayName);

        // Redirigir al inicio principal
        window.location.href = "Inicio_Principal.html";
        
    } catch (error) {
        console.error("Error al iniciar sesión con Google: ", error);
        alert("Error al iniciar sesión con Google");
    }
});
