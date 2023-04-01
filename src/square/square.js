// Создаём функцию, возводящую число в квадрат
const square = (number) => {
    // Если число равно 1, то и возвращаться будет 1
    if(number === 1) {
        return 1;
    }
    // Иначе число возводится в степень
    return Math.pow(number, 2);
}

module.exports = square;