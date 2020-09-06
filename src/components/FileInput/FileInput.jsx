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
        const filesArray = Array.from(inputValues)

        if (onChange) {
            onChange(filesArray[0])
        }
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
        if (error) {
            imgRef.current.src = ''
            return
        }

        if (value instanceof File) {
            const fReader = new FileReader()
            fReader.onload = () => {
                imgRef.current.src = fReader.result
            }
            fReader.readAsDataURL(value)
        } else if (typeof value === 'string') {
            imgRef.current.src = value
        }
    }, [value, error])

    return (
        <div className={cn()}>
            <input
                name={name}
                ref={inputRef}
                disabled={disabled}
                onChange={handleChange}
                type="file"
                hidden
            />
            <div>
                {label && (
                    <div className={cn('label')}>{label}</div>
                )}
                {!value && (
                    <Button
                        onClick={handleOpenDialog}
                        disabled={disabled}
                    >
                        Загрузить
                    </Button>
                )}
            </div>
            <img ref={imgRef} src="" height="200" alt="" />
            <div>
                <FieldError error={error} />
            </div>
            {value && (
                <Button
                    onClick={handleDelete}
                    disabled={disabled}
                >
                    Удалить
                </Button>
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
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({}),
    ]),
}

export default FileInput
