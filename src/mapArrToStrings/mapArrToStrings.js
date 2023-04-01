// Создаём функцию, принимающую на вход массив с любыми значениями
const mapArrToStrings = (arr) => {
    return arr
         // Фильтруем массив и проверяем, что элементы массива являются числами
        .filter(item => Number.isInteger(item))
        //С помощью метода map преобразовываем элементы к строке
        .map(String);
}

module.exports = mapArrToStrings;