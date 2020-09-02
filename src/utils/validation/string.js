import * as Yup from 'yup'
import { messages } from './messages'

export const stringNotRequired = Yup
    .string()
    .typeError(messages.isString)

export const stringRequired = stringNotRequired
    .required(messages.required)
