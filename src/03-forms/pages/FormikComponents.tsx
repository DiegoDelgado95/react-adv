import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

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
                    firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                    lastName: Yup.string().max(10, 'Debe de tener 10 caracteres o menos').required('Requerido'),
                    email: Yup.string().email('Email invalido').required('Requerido'),
                    terms: Yup.boolean().oneOf([ true ], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string().notOneOf(['it-jr'], 'Esta opcion no es permitida.').required('Requerido')
                })}
            >
                {
                    formik => (
                        <Form noValidate>
                            <label htmlFor="firstName">First Name</label>
                            <Field
                                type="text"
                                name="firstName"
                            />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor="lastName">Last Name</label>
                            <Field
                                type="text"
                                name="lastName"
                            />
                            <ErrorMessage name="lastName" component="span" />

                            <label htmlFor="emailAddress">Email Address</label>
                            <Field
                                type="email"
                                name="email"
                            />
                            <ErrorMessage name="email" component="span" />

                            <label htmlFor="jobType">Job Type</label>
                            <Field  as="select" name="jobType">
                                <option value="" >Pick something</option>
                                <option value="developer" >developer</option>
                                <option value="designet" >Designer</option>
                                <option value="it-senior" >IT Senior</option>
                                <option value="it-jr" >IT Junior</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />

                            <label>
                                <Field
                                    type="checkbox"
                                    name="terms"
                                />
                                Terms and Conditions
                            </label>
                            <ErrorMessage name="terms" component="span" />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
