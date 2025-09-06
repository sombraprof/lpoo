function copyCode(button) {
  const codeBlock = button.closest('.code-block');
  if (!codeBlock) return Promise.resolve();
  const codeToCopy = codeBlock.querySelector('pre').innerText;
  return navigator.clipboard.writeText(codeToCopy).then(() => {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fa-solid fa-check mr-1"></i>Copiado!';
    const live = document.getElementById('aria-live');
    if (live) {
      live.textContent = 'Código copiado para a área de transferência.';
    }
    setTimeout(() => {
      button.innerHTML = originalText;
    }, 2000);
  });
}

if (typeof module !== 'undefined') {
  module.exports = { copyCode };
}
