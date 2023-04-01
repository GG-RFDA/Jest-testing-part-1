// Импортируем библиотеку axios
const axios = require('axios');
// Импортируем функцию mapArrayToString
const mapArrayToString = require('../mapArrToStrings/mapArrToStrings');
// Создаём функцию getData
const getData = async () => {
    // Оборачиваем всё в блок try...catch
    try {
        // Создаём переменную response, где вызываем axios с методом get и передаём аргументом URL, т.е. по какому адресу запрашиваем данные
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // Проходимся по массиву пользователей и получаем только id
        const userIds = response.data.map(user => user.id)
        // Вызываем функцию mapArrayToString и передаём id пользователей
        return mapArrayToString(userIds);
        //return userIds;
    } catch(e) {

    }
}

module.exports = getData;