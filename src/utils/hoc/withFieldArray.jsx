import React            from 'react'
import { FieldArray }   from 'formik'

export const withFieldArray = (Component) => ({ name, ...rest }) => (
    <FieldArray name={name}>
        {({ push, remove }) => (
            <Component
                {...rest}
                name={name}
                push={push}
                remove={remove}
            />
        )}
    </FieldArray>
)
