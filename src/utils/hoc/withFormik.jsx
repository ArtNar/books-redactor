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

            if (errors) {
                setErrors(errors)
            } else {
                onFinish()
            }
        } catch (error) {
            onError('Ошибка сохранения', error)
        } finally {
            setSubmitting(false)
        }
    },
    displayName,
    ...rest,
})(Component)
