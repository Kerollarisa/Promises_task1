import GameSavingLoader from '../src/js/GameSavingLoader.js';
import GameSaving from '../src/js/GameSaving.js';

describe('GameSavingLoader', () => {
  test('load возвращает GameSaving', async () => {
    const saving = await GameSavingLoader.load();
    expect(saving).toBeInstanceOf(GameSaving);
    expect(saving.id).toBe(9);
    expect(saving.created).toBe(1546300800);
    expect(saving.userInfo).toEqual({
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    });
  }, 10000);
});