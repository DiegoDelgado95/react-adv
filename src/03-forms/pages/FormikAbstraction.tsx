import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {

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
                    firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                    lastName: Yup.string().max(10, 'Debe de tener 10 caracteres o menos').required('Requerido'),
                    email: Yup.string().email('Email invalido').required('Requerido'),
                    terms: Yup.boolean().oneOf([ true ], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string().notOneOf(['it-jr'], 'Esta opcion no es permitida.').required('Requerido')
                })}
            >
                {
                    formik => (
                        <Form>
                            <MyTextInput 
                                label='First Name' 
                                name='firstName' 
                                placeholder='Diego'
                            />

                            <MyTextInput 
                                label='Last Name' 
                                name='lastName' 
                                placeholder='Delgdo'
                            />

                            <MyTextInput 
                                label='Email Addres' 
                                name='email' 
                                placeholder='Delgdo@gmail.com'
                                type="email"
                            />


                            <MySelect label='Job Type' name='jobType' >
                                <option value="" >Pick something</option>
                                <option value="developer" >developer</option>
                                <option value="designet" >Designer</option>
                                <option value="it-senior" >IT Senior</option>
                                <option value="it-jr" >IT Junior</option>
                            </MySelect>

                            <MyCheckbox label='Terms & Conditions' name='terms' />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
