function openModal() {
    // Ocultar los botones al abrir el modal
    var buttons = document.getElementsByClassName("floating-buttons")[0];
    buttons.style.display = "none";

    // Mostrar el modal
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    // Mostrar los botones al cerrar el modal
    var buttons = document.getElementsByClassName("floating-buttons")[0];
    buttons.style.display = "flex";

    // Cerrar el modal
    document.getElementById("myModal").style.display = "none";
  }