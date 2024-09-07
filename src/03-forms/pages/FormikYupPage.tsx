import { useFormik } from 'formik'
import Yup from 'yup'
import '../styles/styles.css'

export const FormikYupPage = () => {
  const {
    // handleChange,
    // values,
    handleSubmit,
    // handleBlur,
    errors,
    touched,
    getFieldProps
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .required('Requerido'),
      lastName: Yup.string()
        .max(10, 'Debe tener 10 caracteres o menos')
        .required('Requerido'),
      email: Yup.string()
        .email('Debe ser un correo electrónico válido')
        .required('Requerido')
    }),
    onSubmit: async (values) => {
      console.log(values)
    }
  })

  return (
    <div>
      <h1>Formik Yup</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' {...getFieldProps('firstName')} />

        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor='lastName'>Last Name</label>
        <input type='text' {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email Adress</label>
        <input type='email' {...getFieldProps('email')} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
