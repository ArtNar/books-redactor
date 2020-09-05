import {
    bookName,
    amountOfPages,
    publishingHouseName,
    publishYear,
    releaseDate,
    isbn,
    image,
} from 'utils/validation'
import { authorInformationFields } from 'components/forms/AuthorInformation'

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
        validationRule: isbn,
    },
    image: {
        name: 'image',
        defaultValue: null,
        validationRule: image,
    },
    authors: [authorInformationFields],
}
