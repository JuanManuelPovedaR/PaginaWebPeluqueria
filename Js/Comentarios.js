document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-comentario");
  const lista = document.getElementById("lista-comentarios");

  // Cargar desde localStorage
  const comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];
  comentariosGuardados.forEach(comentario => agregarComentario(comentario.nombre, comentario.mensaje));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre && mensaje) {
      agregarComentario(nombre, mensaje);
      guardarComentario(nombre, mensaje);
      form.reset();
    }
  });

  function agregarComentario(nombre, mensaje) {
    const div = document.createElement("div");
    div.classList.add("comentario");
    div.innerHTML = `<strong>${nombre}:</strong><p>${mensaje}</p>`;
    lista.appendChild(div);
  }

  function guardarComentario(nombre, mensaje) {
    comentariosGuardados.push({ nombre, mensaje });
    localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));
  }
});
