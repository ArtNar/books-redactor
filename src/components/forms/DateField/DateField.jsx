import React            from 'react'

import { Input }        from 'components/Input'
import { BaseField }    from 'components/forms/BaseField'

const DateField = (props) => (
    <BaseField
        {...props}
        component={Input}
        // в safari и ie тут будут проблемы :) по хорошему надо писать календарь
        type="date"
    />
)

export default DateField
