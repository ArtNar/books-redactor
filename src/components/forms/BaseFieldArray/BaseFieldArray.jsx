/* eslint-disable no-plusplus */
import React, { useEffect } from 'react'
import PropTypes            from 'prop-types'
import get                  from 'just-safe-get'
import _cn                  from 'utils/cn'
import { withFieldArray }   from 'utils/hoc/withFieldArray'
import { FieldWrapper }     from 'components/FieldWrapper'
import { Button }           from 'components/Button'
import styles               from './BaseFieldArray.module.css'

const cn = _cn('field-array-row', styles)

const BaseFieldArray = withFieldArray(({
    label,
    minFields,
    push,
    remove,
    children,
    disabled,
    values = {},
    name,
    defaultValue = {},
}) => {
    const valuesArray = get(values, name) || []

    const handleAdd = () => push(defaultValue)

    const handleRemove = (idx) => () => remove(idx)

    const renderFieldRow = (idx) => (
        <div
            key={idx}
            className={cn()}
        >
            {children(idx)}
            <div className={cn('button')}>
                <Button
                    color="secondary"
                    onClick={handleRemove(idx)}
                    disabled={disabled || valuesArray.length === minFields}
                >
                    Удалить
                </Button>
            </div>
        </div>
    )

    useEffect(() => {
        if (minFields && minFields > 0 && !valuesArray.length) {
            for (let i = 0; i < minFields; i++) {
                push({})
            }
        }
    }, [])

    return (
        <FieldWrapper>
            {label && (
                <div className={cn('label')}>
                    {label}
                </div>
            )}
            {valuesArray.map((_, idx) => (
                renderFieldRow(idx)
            ))}
            <Button
                disabled={disabled}
                onClick={handleAdd}
            >
                Добавить
            </Button>
        </FieldWrapper>
    )
})

BaseFieldArray.propTypes = {
    children: PropTypes.func,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    minFields: PropTypes.number,
    push: PropTypes.func,
    remove: PropTypes.func,
    valuesArray: PropTypes.arrayOf(
        PropTypes.shape({}),
    ),
}

export default BaseFieldArray
