// Js/buscador.js
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("buscador");
  const productos = document.querySelectorAll("#lista-productos .producto");

  input.addEventListener("input", () => {
    const filtro = input.value.toLowerCase();
    productos.forEach((producto) => {
      const texto = producto.textContent.toLowerCase();
      producto.style.display = texto.includes(filtro) ? "block" : "none";
    });
  });
});
