import * as Yup from 'yup'

export const arrayOf = (value) => Yup
    .array().of(value)
