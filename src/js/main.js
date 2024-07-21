"use strict";

/* let url = "";

document.addEventListener('DOMContentLoaded', (event) => {
    // Kolla om element för att skriva ut inloggad användare finns
    if (document.getElementById("myPage")) {
        // Om det finns, hämta användare
        getUser();
    }

    // Kolla om element för att registrera användare finns
    if (document.getElementById("registerForm")) {
        // Om det finns, lägg till en händelselyssnare på "Registrera"-knappen
        document.getElementById("registerForm").addEventListener("submit", function (event) {
            event.preventDefault();
            let form = event.target;
        });

        // Kolla om element för att logga in användare finns
        if (document.getElementById("loginForm")) {
            // Om det finns, lägg till en händelselyssnare på "Logga in"-knappen
            document.getElementById("loginForm").addEventListener("submit", function (event) {
                event.preventDefault();
                let form = event.target;

                // Kalla på funktionen för att registrera användare
                registerUser(
                    form.username.value,
                    form.password.value
                );

                // Kalla på funktionen för att logga in användare
                loginUser(
                    form.username.value,
                    form.password.value
                );
            });
        }
    }
});

/* HÄMTA DATA - CRUD READ/GET */

// Hämta inloggad användare och läs ut till skärmen
/* async function getUser() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Skriv ut till DOM
        let list = document.getElementById("myPage");
        list.innerHTML = "";

        data.forEach(item => {
            let listItem = document.createElement("li");
            let username = document.createElement("div");
            username.className = "username";
            username.textContent = item.username;
            listItem.appendChild(username);

            let logoutButton = document.createElement("button");
            logoutButton.className = "logoutBtn";
            logoutButton.textContent = "Logga ut";
            logoutButton.onclick = () => {
                window.location.href = `http://localhost:1234/index.html`;
            };

            buttonContainer.appendChild(logoutButton);
            listItem.appendChild(buttonContainer);
            list.appendChild(listItem);
        });

    } catch (error) {
        console.error("Ett fel uppstod vid hämtning av arbetserfarenhet: ", error);
    }
}
*/
/* LÄGG TILL DATA - CRUD CREATE/POST */

// Lägg till ny arbetserfarenhet
/*async function registerUser(username, password) {

    let user = {
        username: username,
        password: password,
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        console.table(data);
       displayMessage("Användare registrerad");

        await getUser();

    } catch (error) {
        console.error("Ett fel uppstod när användare skulle registreras: ", error);
    }

    // Omdirigera till startsidan
    window.location.href = "http://localhost:1234/index.html";
}
 

// Meddelande för raderade arbetserfarenheter
function displayMessage(message) {
    let messageContainer = document.getElementById("messageContainer");
    messageContainer.innerText = message;
}

*/