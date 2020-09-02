/* eslint-disable no-use-before-define */
export const messages = {
    required: 'Заполните поле',
    isNumber: 'Значение должно быть числом',
    isBoolean: 'Значение должно быть Истина/Ложь',
    isInteger: 'Значение должно быть целым числом',
    isString: 'Значение должно быть строкой',
    emailInvalid: 'Некорректный адрес электронной почты',
    phoneNumberInvalid: 'Некорректный номер',
    rangeValueInPast: 'Укажите дату не меньше текущей',
    rangeValueInvalid: 'Укажите дату окончания больше даты начала',
    tooShort: (number = 0) => `Поле должно быть минимум ${number} ${declOfNum(number, ['символ', 'символа', 'символов'])}`,
    tooLong: (number = 0) => `Поле должно быть максимум ${number} ${declOfNum(number, ['символ', 'символа', 'символов'])}`,
}

function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2]

    return titles[(number % 100 > 4 && number % 100 < 20)
        ? 2
        : cases[(number % 10 < 5) ? number % 10 : 5]]
}
