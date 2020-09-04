/* eslint-disable no-use-before-define */
export const messages = {
    required: 'Заполните поле',
    isNumber: 'Значение должно быть числом',
    isDate: 'Значение должно быть датой',
    isBoolean: 'Значение должно быть Истина/Ложь',
    isInteger: 'Значение должно быть целым числом',
    isPositiveInteger: 'Значение должно быть целым положительным числом',
    isString: 'Значение должно быть строкой',
    emailInvalid: 'Некорректный адрес электронной почты',
    phoneNumberInvalid: 'Некорректный номер',
    rangeValueInPast: 'Укажите дату не меньше текущей',
    rangeValueInvalid: 'Укажите дату окончания больше даты начала',
    tooShort: (value = 0) => `Значение должно быть минимум ${value} ${declOfNum(value, ['символ', 'символа', 'символов'])}`,
    tooLong: (value = 0) => `Значение должно быть максимум ${value} ${declOfNum(value, ['символ', 'символа', 'символов'])}`,
    min: (value = 0) => `Минимальное значение - ${value}`,
    max: (value = 0) => `Максимальное значение - ${value}`,
}

function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2]

    return titles[(number % 100 > 4 && number % 100 < 20)
        ? 2
        : cases[(number % 10 < 5) ? number % 10 : 5]]
}
