import * as Yup from 'yup'
import { messages } from './messages'

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
const FILE_SIZE = 1024 * 1000

export const image = Yup
    .mixed()
    // .test(
    //     'fileSize',
    //     messages.fileTooLarge(FILE_SIZE),
    //     (value) => !value
    //     || (Array.isArray(value) && !value.length)
    //     || (Array.isArray(value) && value.every(({ size }) => size <= FILE_SIZE)),
    // )
    // .test(
    //     'fileType',
    //     messages.unsupportedFormat(SUPPORTED_FORMATS),
    //     (value) => !value
    //     || (Array.isArray(value) && !value.length)
    //     || (Array.isArray(value) && value.every(({ type }) => SUPPORTED_FORMATS.includes(type))),
    // )
