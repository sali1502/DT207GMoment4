"use strict";

// Skapa ny användare
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    if (registerForm) {
        registerForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            let response = await fetch("http://localhost:3000/api/index", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            let data = await response.json();
            handleResponse(response, data);
        });
    }
});

function handleResponse(response, data) {
    const messageContainer = document.querySelector(".message-container");
    messageContainer.innerHTML = "";

    if (response.ok) {
        messageContainer.innerHTML = `<p class="success">${data.message}</p>`;
    } else {
        messageContainer.innerHTML = `<p class="error">${data.error}</p>`;
    }
}