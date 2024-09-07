import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextInput } from '../components'
import '../styles/styles.css'

export const FormikAbstractationPage = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(10, 'Debe tener 10 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('Debe ser un correo electrónico válido')
            .required('Requerido'),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Esta opción no es permitida.')
            .required('Requerido')
        })}
      >
        {(formik) => (
          <Form noValidate>
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='Pablito'
            />

            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder='Urbano'
            />

            <MyTextInput
              label='Email Address'
              name='email'
              type='email'
              placeholder='tucorreo@example.com'
            />
            <MySelect label='Job Type' name='jobType'>
              <option value=''>Pick something</option>
              <option value='developer'>Pick something</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-jr'>IT Junior</option>
            </MySelect>
            <MyCheckbox label='Terms and conditions' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
