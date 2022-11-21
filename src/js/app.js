export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(400, 'Bad Request («неправильный, некорректный запрос»)');
    this.errors.set(403, 'Forbidden («запрещено (не уполномочен)»)');
    this.errors.set(404, 'Not Found («не найдено»)');
    this.errors.set(408, 'Request Timeout («истекло время ожидания»)');
    this.errors.set(504, 'Gateway Timeout («шлюз не отвечает»)');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}

export const error = new ErrorRepository();
