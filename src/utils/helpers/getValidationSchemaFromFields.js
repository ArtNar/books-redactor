import * as Yup from 'yup'

export const getValidationSchemaFromFields = (fields) => {
    const result = {}

    if (Array.isArray(fields)) {
        return Yup.array().of(getValidationSchemaFromFields(fields[0]))
    }

    Object.keys(fields).forEach((key) => {
        const field = fields[key]

        if (typeof field !== 'object') {
            throw new Error(`Wrong type of field "${key}" passed to validation schema. Expected "object" type`)
        }

        if ('validationRule' in field) {
            result[key] = field.validationRule
        } else {
            result[key] = getValidationSchemaFromFields(field)
        }
    })

    return Yup.object().shape({ ...result })
}
