import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Mínimo 2 caracteres')
            .required('Este campo es requerido'),
          email: Yup.string()
            .email('Formato inválido')
            .required('Este campo es requerido'),
          password1: Yup.string()
            .min(8, 'Mínimo 8 caracteres')
            .required('Este campo es requerido'),
          password2: Yup.string()
            .oneOf(
              [Yup.ref('password1')],
              'Las contraseñas deben ser idénticas'
            )
            .required('Este campo es requerido')
        })}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ errors, touched, handleReset }) => (
          <Form>
            <Field
              name='name'
              type='text'
              placeholder='Name'
              className={`${errors.name && touched.name && 'has-error'}`}
            ></Field>
            <ErrorMessage name='name' component='span'></ErrorMessage>

            <Field
              name='email'
              type='email'
              placeholder='Email'
              className={`${errors.email && touched.email && 'has-error'}`}
            ></Field>
            <ErrorMessage name='email' component='span'></ErrorMessage>

            <Field
              name='password1'
              type='password'
              placeholder='Password'
              className={`${
                errors.password1 && touched.password1 && 'has-error'
              }`}
            ></Field>
            <ErrorMessage name='password1' component='span'></ErrorMessage>

            <Field
              name='password2'
              type='password'
              placeholder='Repeat Password'
              className={`${
                errors.password2 && touched.password2 && 'has-error'
              }`}
            ></Field>
            <ErrorMessage name='password2' component='span'></ErrorMessage>

            <button type='submit'>Create</button>
            <button type='button' onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
