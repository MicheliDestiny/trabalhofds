const botao = document.getElementById("mostrarBtn");
  const texto = document.getElementById("textoOculto");
  botao.addEventListener("click", () => {
    texto.classList.toggle("visivel");
    texto.classList.toggle("escondido");
  });








