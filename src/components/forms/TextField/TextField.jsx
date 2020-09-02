import React            from 'react'

import { Input }        from 'components/Input'
import { BaseField }    from 'components/forms/BaseField'

const TextField = (props) => (
    <BaseField
        {...props}
        component={Input}
    />
)

export default TextField
