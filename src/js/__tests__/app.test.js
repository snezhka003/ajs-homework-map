import { error } from '../app';

test('тест кейса, когда код ошибки существует', () => {
  expect(error.translate(404)).toBe('Not Found («не найдено»)');
});

test('Ошибка есть', () => {
  expect(error.translate(604)).toBe('Unknown error');
});
