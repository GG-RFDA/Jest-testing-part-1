// Функция принимает некоторый колбэк и задержку в миллисекундах
const delay = (callback, ms) => {
	// Возвращаем промис
	return new Promise((resolve) => {
		// Внутри промиса используем метод setTimeout
		setTimeout(() => {
			// Внутри колбэка вызываем функцию resolve и туда передаём результат вызова
			resolve(callback());
			// Вторым аргументом setTimeout передаём задержку в миллисекундах
		}, ms);
	});
};

module.exports = delay;
