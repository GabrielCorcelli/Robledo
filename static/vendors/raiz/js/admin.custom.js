// Pequeno JS para melhorar pequenas interações do admin
document.addEventListener('DOMContentLoaded', function(){
  // exemplo: adicionar tooltip aos itens de menu
  document.querySelectorAll('.sidebar .nav li a').forEach(function(el){
    if (!el.getAttribute('title')) el.setAttribute('title', el.textContent.trim());
  });
});
