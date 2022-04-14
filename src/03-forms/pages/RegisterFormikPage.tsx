import { ErrorMessage, Field, Form, Formik } from 'formik'
import '../styles/styles.css'
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>RegisterFormikPage</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string().min(2, 'Debe tener minimo 2 caracter').max(15, 'Debe tener maximo 15 caracter').required('Requerido'),
                        email: Yup.string().email('Email invalido').required('Requerido'),
                        password1: Yup.string().min(6, 'Debe tener minimo 6 caracter').required('Requerido'),
                        password2: Yup.string().oneOf([Yup.ref('password1')], 'Los password deben ser iguales').min(6, 'Debe tener minimo 6 caracter')
                    })
                }
            >
                {
                    ({handleReset}) => (
                        <Form>
                            <MyTextInput
                                type="text"
                                placeholder='Diego'
                                name='name'
                                label='Nombre'
                            />

                            <MyTextInput
                                type="email"
                                placeholder='Diego@gmail.com'
                                name='email'
                                label='Email'
                            />

                            <MyTextInput
                                type="password"
                                placeholder='****'
                                name='password1'
                                label='Password'
                            />

                            <MyTextInput
                                type="password"
                                placeholder='****'
                                name='password2'
                                label='Confirm Password'
                            />

                            <button type="submit">Create</button>
                            <button type="button" onClick={ handleReset } >Reset form</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
