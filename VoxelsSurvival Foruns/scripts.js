function postContent() {
    const name = document.getElementById("name").value;
    const content = document.getElementById("content").value;
    const file = document.getElementById("file").files[0];
    const link = document.getElementById("link").value;
    const contentList = document.getElementById("content-list");

    const listItem = document.createElement("li");

    if (name && content) {
        listItem.innerHTML = `<strong>${name}:</strong> ${content}`;
        
        if (file) {
            const fileURL = URL.createObjectURL(file);
            if (file.type.startsWith("image/")) {
                listItem.innerHTML += `<br><img src="${fileURL}" alt="Imagen subida" style="max-width: 200px;">`;
            } else if (file.type.startsWith("video/")) {
                listItem.innerHTML += `<br><video controls style="max-width: 200px;"><source src="${fileURL}" type="${file.type}">Tu navegador no soporta este video.</video>`;
            } else {
                listItem.innerHTML += `<br><a href="${fileURL}" download>${file.name}</a>`;
            }
        }

        if (link) {
            listItem.innerHTML += `<br><a href="${link}" target="_blank">Ver enlace</a>`;
        }

        contentList.appendChild(listItem);

        // Limpiar campos
        document.getElementById("name").value = "";
        document.getElementById("content").value = "";
        document.getElementById("file").value = "";
        document.getElementById("link").value = "";
    } else {
        alert("Por favor, completa al menos el nombre y el comentario.");
    }
}

