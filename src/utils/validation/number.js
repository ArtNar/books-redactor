import * as Yup from 'yup'
import { messages } from './messages'

export const number = Yup
    .number()
    .typeError(messages.isNumber)

export const integer = number
    .integer(messages.isInteger)

export const integerRequired = number
    .integer(messages.isInteger)
    .required(messages.required)
