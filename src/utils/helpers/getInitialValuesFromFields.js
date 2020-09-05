/* eslint-disable no-underscore-dangle */
export const getInitialValuesFromFields = (obj) => {
    const result = {}

    if (Array.isArray(obj)) {
        return [getInitialValuesFromFields(obj[0])]
    }

    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'object') {
            if ('defaultValue' in obj[key]) {
                result[key] = obj[key].defaultValue
            } else {
                const _obj = getInitialValuesFromFields(obj[key])

                result[key] = _obj
            }
        } else {
            result[key] = ''
        }
    })

    return result
}
