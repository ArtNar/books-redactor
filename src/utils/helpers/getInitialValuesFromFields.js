/* eslint-disable no-underscore-dangle */
export const getInitialValuesFromFields = (obj) => {
    const result = {}

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
