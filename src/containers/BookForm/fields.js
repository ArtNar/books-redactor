import {
    bookName,
    amountOfPages,
    publishingHouseName,
    publishYear,
    releaseDate,
    // isbn,
} from 'utils/validation'

export default {
    bookName: {
        name: 'bookName',
        defaultValue: '',
        validationRule: bookName,
    },
    amountOfPages: {
        name: 'amountOfPages',
        defaultValue: '',
        validationRule: amountOfPages,
    },
    publishingHouseName: {
        name: 'publishingHouseName',
        defaultValue: '',
        validationRule: publishingHouseName,
    },
    publishYear: {
        name: 'publishYear',
        defaultValue: '',
        validationRule: publishYear,
    },
    releaseDate: {
        name: 'releaseDate',
        defaultValue: '',
        validationRule: releaseDate,
    },
    isbn: {
        name: 'isbn',
        defaultValue: '',
        validationRule: publishingHouseName,
    },
}
