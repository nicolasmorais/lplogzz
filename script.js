// Script para selecionar o kit e atualizar a mensagem dinâmica
const kits = document.querySelectorAll('.kit');
const dynamicMessage = document.getElementById('dynamic-message');
const offerMessage = document.getElementById('offer-message');
const button = document.querySelector('.dynamic-button');

kits.forEach(kit => {
  kit.addEventListener('click', () => {
    kits.forEach(item => item.classList.remove('selected')); // Remove a seleção de todos os kits
    kit.classList.add('selected'); // Adiciona a seleção ao kit clicado

    const price = kit.getAttribute('data-price');
    const description = kit.getAttribute('data-description');
    const offer = kit.getAttribute('data-offer');
    
    // Atualiza a mensagem dinâmica de acordo com o kit selecionado
    offerMessage.textContent = offer;
    
    // Atualiza o botão com o preço do kit
    button.textContent = `Fazer Pedido - R$ ${price}`;
  });
});
