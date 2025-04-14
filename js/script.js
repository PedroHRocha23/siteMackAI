// Seleciona todos os dots (indicadores do carrossel)
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

// Adiciona evento de clique em cada dot
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    // Remove a classe "active" de todos os dots
    dots.forEach(d => d.classList.remove('active'));

    // Adiciona a classe "active" no dot clicado
    dot.classList.add('active');

    // Atualiza o slide atual (caso tenha funcionalidade de troca de slides)
    currentSlide = parseInt(dot.getAttribute('data-slide'), 10);

    // Aqui você pode implementar a lógica para trocar imagens/textos do carrossel
    // Exemplo: showSlide(currentSlide);
  });
});

/*
// Função de exemplo para alternar slides se necessário
function showSlide(index) {
  // Lógica para exibir o slide correspondente
  // ...
}
*/
