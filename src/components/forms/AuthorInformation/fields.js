import {
    authorName,
} from 'utils/validation'

export default {
    name: {
        name: 'name',
        defaultValue: '',
        validationRule: authorName,
    },
    surname: {
        name: 'surname',
        defaultValue: '',
        validationRule: authorName,
    },
}
