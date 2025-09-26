/**
 * @jest-environment jsdom
 */
const { loadAulas } = require('../js/main');

describe('loadAulas', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="cards-container"></div>';
  });

  test('renders cards from fetched aulas', async () => {
    const sample = [
      { arquivo: 'aula1.html', titulo: 'Aula 1: Intro', descricao: 'Desc', ativo: true }
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(sample) })
    );
    await loadAulas();
    const cards = document.querySelectorAll('#cards-container a');
    expect(cards.length).toBe(1);
    expect(cards[0].textContent).toContain('Aula 1');
  });
});
