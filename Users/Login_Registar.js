// Firebase initialization and database reference
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { getFirestore, doc, setDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"

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

document.getElementById('button').addEventListener('click', async () => {
    var Nombre = document.getElementById('nombre').value.trim();
    var Apellido = document.getElementById('apellido').value.trim();
    var Correo = document.getElementById('correo').value.trim();
    var Contraseña = document.getElementById('contraseña').value.trim();
    var Telefono = document.getElementById('telefono').value.trim();
    var Area = document.getElementById('opciones').value.trim();

    // Verificar si todos los campos están llenos
    if (Nombre === '' || Apellido === '' || Correo === '' || Contraseña === '' || Telefono === '' || Area === '') {
        alert('Por favor, llena todos los campos');
        return;
    }

    try {
        // Create user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, Correo, Contraseña);
        const user = userCredential.user;

        // Save other user data in Firestore
        await setDoc(doc(db, "UserRegistro", user.uid), {
            correo: Correo,
            contraseña: Contraseña,
            nombre: Nombre,
            apellido: Apellido,
            telefono: Telefono,
            area: Area,
            fechaRegistro: Timestamp.fromDate(new Date())
        });

        alert("Usuario creado exitosamente \n Bienvenido " + Nombre + " " + Apellido);

        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = "Login_Inicio.html";

    } catch (e) {
        console.error("Error al registrar usuario: ", e);
        alert("Error al registrar usuario");
    }
});
