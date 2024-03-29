const delay = require('./delay');

describe('delay', () => {
    // В тесте делаем колбэк асинхронным
    test('Корректное значение', async () => {
        /*
         * Результат выполнения функции поместим в переменную sum.
         * Вызываем функцию delay.
         * Прописываем математическую операцию, результат выполнения которой оиждается через 1000 миллисекунд.
         */
        const sum = await delay(() => 5 + 5, 1000);
        // Ожидаем, что сумма равна 10
        expect(sum).toBe(10);
    })
})