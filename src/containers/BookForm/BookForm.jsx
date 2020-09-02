import { withFormik }                       from 'utils/hoc/withFormik'
import { getValidationSchemaFromFields }    from 'utils/helpers/getValidationSchemaFromFields'
import BookFormView                         from './BookFormView'
import fields                                from './fields'

const BookForm = withFormik({
    validationSchema: getValidationSchemaFromFields(fields),
    displayName: 'BookForm',
})(BookFormView)

export default BookForm
