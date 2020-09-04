import * as Yup from 'yup'
import { messages } from './messages'

export const date = Yup
    .date()
    .typeError(messages.isDate)

export const dateRequired = date
    .required(messages.required)
