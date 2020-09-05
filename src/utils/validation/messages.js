import { declOfNum } from 'utils/helpers/declOfNum'

export const messages = {
    required: 'Заполните поле',
    isNumber: 'Значение должно быть числом',
    isDate: 'Значение должно быть датой',
    isInteger: 'Значение должно быть целым числом',
    isISBN: 'Значение должно валидным ISBN',
    isString: 'Значение должно быть строкой',
    tooShort: (value = 0) => `Значение должно быть минимум ${value} ${declOfNum(value, ['символ', 'символа', 'символов'])}`,
    tooLong: (value = 0) => `Значение должно быть максимум ${value} ${declOfNum(value, ['символ', 'символа', 'символов'])}`,
    min: (value = 0) => `Минимальное значение - ${value}`,
    max: (value = 0) => `Максимальное значение - ${value}`,
    fileTooLarge: (size = 0) => `Максимальный размер файла - ${size}`,
    unsupportedFormat: (formats = []) => `Разрешенные форматы - ${formats.join(', ')}`,
}
