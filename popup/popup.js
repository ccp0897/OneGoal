const chatButton = document.getElementById("chatButton");
        const chatPopup = document.getElementById("chatPopup");
        const closeChat = document.getElementById("closeChat");

        chatButton.addEventListener("click", () => {
            chatPopup.classList.toggle("hidden");
            setTimeout(() => {
                chatPopup.classList.toggle("opacity-0");
            }, 10); // Pequeño delay para la transición
        });

        closeChat.addEventListener("click", () => {
            chatPopup.classList.toggle("opacity-0");
            setTimeout(() => {
                chatPopup.classList.toggle("hidden");
            }, 200); // Esconde después de la transición
        });