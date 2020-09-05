/* eslint-disable no-plusplus */
import { messages } from './messages'
import { stringNotRequired } from './string'

const validISBN10 = (isbn) => {
    if (isbn.length !== 10) {
        return false
    }

    let sum = 0
    for (let i = 0; i < isbn.length; i++) {
        if (isbn[i] === 'X' && i < 9) {
            return false
        }
        if (isbn[i] !== 'X') {
            sum += Number(isbn[i]) * (i + 1)
        } else {
            sum += 1
        }
    }
    return sum % 11 === 0
}

const validISBN13 = (isbn) => {
    if (isbn.length !== 13) {
        return false
    }

    let sum = 0
    for (let i = 0; i < isbn.length; i++) {
        sum += Number(isbn[i]) * (i % 2 !== 0 ? 3 : 1)
    }
    return sum % 10 === 0
}

const isValidISBN = (str = '') => {
    if (str.length !== 10 && str.length !== 13) {
        return false
    }

    switch (str.length) {
    case 10:
        return validISBN10(str)
    case 13:
        return validISBN13(str)
    default:
        return false
    }
}

const MIN = 10
const MAX = 13

export const isbn = stringNotRequired
    .min(MIN, messages.tooShort(MIN))
    .max(MAX, messages.tooLong(MAX))
    .test('test-isbn', messages.isISBN, (value) => !value || isValidISBN(value))
