// Botón de demostración
document.getElementById("demoBtn").addEventListener("click", () => {
  alert("¡JavaScript está funcionando!");
});

// Formulario de contacto
document.getElementById("formContacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();

  alert("Gracias por tu mensaje, " + nombre + " 😄");

  this.reset();
});
