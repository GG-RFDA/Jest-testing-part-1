// Создаём функцию, принимающую число в промежутке от 0 до 100
const validateValue = (value) => {
    // Если число выходит за пределы допустимного значения, то возвращается false
    if(value < 0 || value > 100) {
        return false;
    }
    // Иначе возвращается true
    return true;
}
// Экспортируем функцию
module.exports = validateValue;