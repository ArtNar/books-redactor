import React, { useRef, useEffect } from 'react'
import PropTypes                    from 'prop-types'
import _cn                          from 'utils/cn'
import { Button }                   from 'components/Button'
import { FieldError }               from 'components/FieldError'
import styles                       from './FileInput.module.css'

const cn = _cn('file-input', styles)

const FileInput = ({
    name,
    disabled,
    onChange,
    onDelete,
    label,
    value,
    error,
}) => {
    const inputRef = useRef(null)
    const imgRef = useRef(null)

    const handleChange = ({ target: { files: inputValues } }) => {
        const filesArray = [...Array.from(inputValues)]

        const fReader = new FileReader()
        fReader.onload = () => {
            if (onChange) {
                onChange(fReader.result)
            }
        }
        fReader.readAsDataURL(filesArray[0])
    }

    const handleDelete = () => {
        if (inputRef
            && inputRef.current) {
            inputRef.current.value = ''
        }
        if (imgRef
            && imgRef.current) {
            imgRef.current.src = ''
        }

        if (onDelete) {
            onDelete(null)
        }
    }

    const handleOpenDialog = () => {
        if (!disabled
            && inputRef
            && inputRef.current) {
            inputRef.current.click()
        }
    }

    useEffect(() => {
        if (value) {
            imgRef.current.src = value
        }
    }, [value])

    return (
        <div className={cn()}>
            <input
                className={cn('main-input')}
                name={name}
                ref={inputRef}
                disabled={disabled}
                onChange={handleChange}
                type="file"
                hidden
            />
            <div className={cn('inner')}>
                {label && (
                    <div className={cn('label')}>{label}</div>
                )}
                {!disabled && !value && (
                    <Button
                        onClick={handleOpenDialog}
                    >
                        Загрузить
                    </Button>
                )}
            </div>
            <img ref={imgRef} src="" height="200" alt="" />
            <FieldError error={error} />
            {value && (
                <div className={cn('actions')}>
                    <Button
                        className={cn('action-button')}
                        onClick={handleDelete}
                    >
                        Удалить
                    </Button>
                </div>
            )}
        </div>
    )
}

FileInput.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    value: PropTypes.string,
}

export default FileInput
