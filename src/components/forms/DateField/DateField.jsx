import React            from 'react'

import { Input }        from 'components/Input'
import { BaseField }    from 'components/forms/BaseField'

const DateField = (props) => (
    <BaseField
        {...props}
        component={Input}
        type="datetime-local"
    />
)

export default DateField
