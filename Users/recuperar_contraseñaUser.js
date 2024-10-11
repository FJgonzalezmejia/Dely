// Firebase initialization and database reference
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// Agregar un listener al botón para registrar el correo electrónico en la base de datos
document.getElementById('EnviarContra').addEventListener('click', async () => {
    var email = document.getElementById('correo').value;

    // Verificar si el campo de correo está lleno
    if (email === '') {
        alert('Por favor, ingresa tu correo electrónico');
        return;
    }

    try {
        // Enviar el correo electrónico para restablecer la contraseña
        await sendPasswordResetEmail(auth, email);
        alert('Se ha enviado un correo electrónico para restablecer la contraseña a ' + email);
        document.getElementById('correo').value = '';
    } catch (e) {
        console.error('Error al registrar el correo electrónico o enviar el correo electrónico para restablecer la contraseña: ', e);
        alert('Error al registrar el correo electrónico o enviar el correo electrónico para restablecer la contraseña');
    }
});

