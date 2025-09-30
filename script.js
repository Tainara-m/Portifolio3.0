//Rolagem suave e carregamento de sessões
const reveal = () => {
    const els = document.querySelectorAll('.hidden');
    const vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 0.9) el.classList.add('show');
    });
  };
  document.addEventListener('DOMContentLoaded', reveal);
  window.addEventListener('scroll', reveal, {passive:true});

//Barra lateral
const sidebar = document.getElementById('sidebar');
const toggleTheme = document.getElementById('theme-toggle');
const collapseBtn = document.querySelector('.toggle-sidebar');
const collapseIcon = document.getElementById('collapse-icon');

toggleTheme.addEventListener('change', () => {
  sidebar.classList.toggle('dark');
  document.body.classList.toggle('dark');
});

collapseBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  if(sidebar.classList.contains('collapsed')) {
    collapseIcon.classList.remove('fa-angle-double-left');
    collapseIcon.classList.add('fa-angle-double-right');
  } else {
    collapseIcon.classList.remove('fa-angle-double-right');
    collapseIcon.classList.add('fa-angle-double-left');
  }
});

// Adiciona/remover classe 'active' nos itens do menu ao clicar
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});

//Fundo animado com bolhas
const coresBolhas = ['#065F6A', '#072f35ff', '#39a0adff', '#12383dff', '#60d3e2ff']; // Escolha suas 5 cores
const container = document.querySelector('.bolhas-container');

for (let i = 0; i < 30; i++) {
  const bolha = document.createElement('div');
  bolha.classList.add('bolha');

  const tamanho = Math.random() * 20 + 10; // Entre 10px e 30px
  bolha.style.width = `${tamanho}px`;
  bolha.style.height = `${tamanho}px`;
  bolha.style.left = `${Math.random() * 100}%`;
  bolha.style.animationDuration = `${Math.random() * 10 + 5}s`;
  bolha.style.backgroundColor = coresBolhas[Math.floor(Math.random() * coresBolhas.length)];

  container.appendChild(bolha);
}
