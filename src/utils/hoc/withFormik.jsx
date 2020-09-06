import { withFormik as formik } from 'formik'

export const withFormik = ({
    validationSchema,
    displayName,
    ...rest
}) => (Component) => formik({
    mapPropsToValues: ({ initialValues }) => initialValues,
    validationSchema,
    enableReinitialize: true,
    handleSubmit: async (formData, { setSubmitting, setErrors, props }) => {
        const { onSubmit, onError, onFinish } = props

        try {
            const errors = await onSubmit(formData)

            setSubmitting(false)

            if (errors && setErrors) {
                setErrors(errors)
            } else if (onFinish) {
                onFinish()
            }
        } catch (error) {
            setSubmitting(false)

            if (onError) {
                onError(`Ошибка сохранения: ${error.message}`)
            }
        }
    },
    displayName,
    ...rest,
})(Component)
