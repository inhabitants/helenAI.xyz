document.addEventListener("DOMContentLoaded", () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const button = document.getElementById("enter-button");

    if (button) {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // Evita o redirecionamento do link padrão

            if (isMobile) {
                console.log("Dispositivo mobile detectado. Adapte a lógica aqui.");
                // Insira a lógica desejada para dispositivos móveis, como abrir um modal, etc.
            } else {
                console.log("Dispositivo desktop detectado.");
                // Insira a lógica para desktops, se necessário.
                window.location.href = "#get-started"; // Mantém a âncora para desktop
            }
        });
    }
});
