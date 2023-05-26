var btnDelete = document.getElementById("btnDeletePost");
btnDelete.addEventListener("click", () => {
    if(confirm("¿Está seguro de eliminar el Post?") == true){
        let href = btnDelete.getAttribute("href");
        window.location.href = href;
    }
});

