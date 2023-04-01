// Импортируем функцию getData и axios
const getData = require('./getData');
const axios = require('axios')
// Все сторонние модули мокаем при помощи функции mock и передаём название модуля
jest.mock('axios')

describe('getData', () => {
    // Создаём переменную response
    let response;
    // Используем функцию beforeEach, чтобы для каждого теста замокать данные
    beforeEach(() => {
        // Присваиваем в response объект
        response = {
            // Заполняем массив данными
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                            "lat": "-37.3159",
                            "lng": "81.1496"
                        }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                        "name": "Romaguera-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                    }
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "address": {
                        "street": "Victor Plains",
                        "suite": "Suite 879",
                        "city": "Wisokyburgh",
                        "zipcode": "90566-7771",
                        "geo": {
                            "lat": "-43.9509",
                            "lng": "-34.4618"
                        }
                    },
                    "phone": "010-692-6593 x09125",
                    "website": "anastasia.net",
                    "company": {
                        "name": "Deckow-Crist",
                        "catchPhrase": "Proactive didactic contingency",
                        "bs": "synergize scalable supply-chains"
                    }
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "address": {
                        "street": "Douglas Extension",
                        "suite": "Suite 847",
                        "city": "McKenziehaven",
                        "zipcode": "59590-4157",
                        "geo": {
                            "lat": "-68.6102",
                            "lng": "-47.0653"
                        }
                    },
                    "phone": "1-463-123-4447",
                    "website": "ramiro.info",
                    "company": {
                        "name": "Romaguera-Jacobson",
                        "catchPhrase": "Face to face bifurcated interface",
                        "bs": "e-enable strategic applications"
                    }
                },
            ]
        }
    })
    test('Корректное значение', async () => {
        // Обращаемся к модулю и вызываем метод mockReturnValue, где передаём переменную response
        axios.get.mockReturnValue(response);
        // Вызываем функцию getData
        const data = await getData()
        /*
         * Описываем ожидания.
         * Ожидаем, что метод axios.get будет вызван ровно 1 раз.
         * 
         */
        expect(axios.get).toBeCalledTimes(1);
        /*
         * Ожидаем, что метод вернёт преобразованный массив c id, т.е. преобразованные числовые данные к строке.
         * Передаём в метод toEqual три id, т.к. ранее замокали массив с тремя элементами.
         * Если в массив передать некорректное значение, то тест упадёт.
         */
        expect(data).toEqual(['1', '2', '3'])
        /*
         * Используем метод toMatchSnapshot, который сформирует файл с результатами вычислений.
         * Если код будет изменён, и тест упадёт, то можно будет наглядно посмотреть, что изменилось.
         */
        expect(data).toMatchSnapshot()
    })
})