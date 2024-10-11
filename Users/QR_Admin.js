const qrResult = document.getElementById('qrResult');
const scanQRBtn = document.getElementById('scanQRBtn');

scanQRBtn.addEventListener('click', function() {
    const html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start(
        { facingMode: "environment" }, // Usar la cámara trasera
        {
            fps: 10, // Cuadros por segundo
            qrbox: 250 // Tamaño del recuadro de escaneo
        },
        (decodedText, decodedResult) => {
            // Código QR escaneado exitosamente
            qrResult.innerText = `Código QR escaneado: ${decodedText}`;
            html5QrCode.stop(); // Detener el escaneo después de escanear
        },
        (errorMessage) => {
            // Error al escanear (puedes ignorarlo o mostrar un mensaje)
            console.log(`Error: ${errorMessage}`);
        }
    ).catch((err) => {
        // Error al iniciar el escaneo
        console.log(`Error: ${err}`);
    });
});
