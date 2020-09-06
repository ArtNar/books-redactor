/* eslint-disable no-unused-vars */
import * as Yup from 'yup'
import { messages } from './messages'

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']
const FILE_SIZE = 1000000

const getSupportedExtensions = (formats) => formats.map((format) => {
    const [_, extension] = format.split('/')

    return extension
})

export const image = Yup
    .mixed()
    .test(
        'fileSize',
        messages.fileTooLarge(FILE_SIZE / 1000000), // в мб
        (value) => !value
        || typeof value === 'string' // уже загружена
        || value.size <= FILE_SIZE,
    )
    .test(
        'fileType',
        messages.unsupportedFormat(getSupportedExtensions(SUPPORTED_FORMATS)),
        (value) => !value
        || typeof value === 'string'
        || SUPPORTED_FORMATS.includes(value.type),
    )
