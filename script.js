document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("enter-button");

    button.addEventListener("click", (e) => {
        e.preventDefault(); // Evita o redirecionamento do link

      

        // Restaura o texto original após 3 segundos
        setTimeout(() => {
            button.textContent = originalText;
        }, 3000);
    });
});
