import {
    stringRequired,
} from 'utils/validation'

export default {
    name: {
        name: 'name',
        defaultValue: '',
        validationRule: stringRequired,
    },
}
