const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('Корректное значение', () => {
        /*
         * В expect вызываем функцию mapArrToStrings и передаём массив из чисел.
         * Используем метод toEqual, проверяющий "одинаковость" значений.
         */
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    /*
     * Рассматриваем случай, где в массиве могут быть разные типы переменных.
     * Останутся только числа, преобразованные к строке.
     */
    test('Всё смешано', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, 'adasdasda'])).toEqual(['1', '2', '3']);
    })
    // Рассматриваем случай с пустым массивом
    test('Пустой массив', () => {
        expect(mapArrToStrings([])).toEqual([]);
    })
    // Рассматриваем случай, где значения не равны друг другу
    test('Отрицание', () => {
        expect(mapArrToStrings([1,2,3])).not.toEqual([1,2,3,4]);
    })
})