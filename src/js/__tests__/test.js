import ErrorRepository from '../app';

test('получаем текст ошибки', () => {
  const error = new ErrorRepository();
  error.add(400, 'ошибка запроса');
  expect(error.translate(400)).toBe('ошибка запроса');
});

test('если код не найден', () => {
  const error = new ErrorRepository();
  expect(error.translate()).toBe('Unknown error');
});
