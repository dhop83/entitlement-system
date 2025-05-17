fetch("https://entitlement-backend.onrender.com/")
    .then(response => response.json())
    .then(data => {
        document.getElementById("root").innerHTML = `<h1>${data.message}</h1>`;
    })
    .catch(error => console.error("Error:", error));
