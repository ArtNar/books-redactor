import React            from 'react'

import { Input }        from 'components/Input'
import { BaseField }    from 'components/forms/BaseField'

const NumberField = (props) => (
    <BaseField
        {...props}
        component={Input}
        type="number"
    />
)

export default NumberField
