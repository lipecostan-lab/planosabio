document.addEventListener("DOMContentLoaded", function () {
  const recipeButton = document.getElementById("recipeButton");

  // Mostrar o botão da receita após 5 minutos e 15 segundos de carregar a página
  setTimeout(function () {
    if (recipeButton && !recipeButton.classList.contains("show")) {
      recipeButton.classList.add("show");
    }
  }, 315000); // 5 min 15 seg (315 segundos)

  // Event listener para o botão da receita
  if (recipeButton) {
    recipeButton.addEventListener("click", function () {
      window.location.href = "questionario.html";
    });
  }

  // Efeito de fade-in na página
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease-in-out";

  setTimeout(function () {
    document.body.style.opacity = "1";
  }, 100);
});
