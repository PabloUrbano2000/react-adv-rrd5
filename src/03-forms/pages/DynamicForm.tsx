import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MySelect, MyTextInput } from '../components'
import formJson from '../data/custom-form.json'

const initialValues: { [x: string]: any } = {}
const requiredFields: { [x: string]: any } = {}

for (const input of formJson) {
  initialValues[input.name] = input.value
  if (!input.validations) continue

  let schema = Yup.string()
  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido')
    }
    // ... otras reglas
    if (rule.type === 'minLength') {
      schema = schema.min(
        rule.value || 2,
        `Mínimo de ${rule.value || 2} caracteres`
      )
    }
    if (rule.type === 'email') {
      schema = schema.email('ingrese un formato es inválido')
    }
  }

  requiredFields[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(
              ({ type, name, placeholder, options, label, value }) => {
                if (type === 'select') {
                  return (
                    <MySelect
                      key={name}
                      type={type as any}
                      name={name}
                      label={label}
                    >
                      <option value=''>Seleccione una opción</option>
                      {options?.map(({ id, label }) => (
                        <option key={id} value={id}>
                          {label}
                        </option>
                      ))}
                    </MySelect>
                  )
                } else if (['input', 'password', 'email'].includes(type)) {
                  return (
                    <MyTextInput
                      key={name}
                      type={type as any}
                      name={name}
                      // value={value}
                      placeholder={placeholder}
                      label={label}
                    />
                  )
                }
                throw new Error(`El type ${type} no es soportado`)
              }
            )}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
