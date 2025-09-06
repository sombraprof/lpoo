/**
 * @jest-environment jsdom
 */
const { copyCode } = require('../js/copy');

describe('copyCode', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    document.body.innerHTML = `
      <div class="code-block">
        <pre>console.log('hi')</pre>
        <button class="copy-btn">Copiar</button>
      </div>
      <div id="aria-live"></div>
    `;
    global.navigator.clipboard = {
      writeText: jest.fn().mockResolvedValue()
    };
  });

  test('copies text and shows feedback', async () => {
    const button = document.querySelector('.copy-btn');
    await copyCode(button);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("console.log('hi')");
    expect(button.innerHTML).toContain('Copiado!');
    expect(document.getElementById('aria-live').textContent).toBe('Código copiado para a área de transferência.');
  });
});
