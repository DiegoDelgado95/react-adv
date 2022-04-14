import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm';
import '../styles/styles.css'

export const RegisterPage = () => {
    const {
        name,
        email,
        password1,
        password2, 
        formData, 
        isValidEmail,
        handleOnChange,
        reset 
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    // const { name, email, password1, password2 } = formData;

    const handleOnSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(formData)
    }

    return (
        <div>
            <h1>RegisterPage</h1>

            <form onSubmit={ handleOnSubmit }>
                <input
                    type="text"
                    placeholder='Name'
                    name='name'
                    value={ name }
                    onChange={ handleOnChange }
                    className={ `${name.trim().length <= 0 && 'has-error'} `}
                />
                { name.trim().length <= 0 && <span>Este campo es obligatorio</span> }

                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    value={ email }
                    onChange={ handleOnChange }
                />
                { !isValidEmail( email ) && <span>Email invalido</span> }

                <input
                    type="password"
                    placeholder='Password'
                    name='password1'
                    value={ password1 }
                    onChange={ handleOnChange }
                />
                { password1.trim().length <= 0 && <span>Este campo es obligatorio</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener 6 caracter</span> }

                <input
                    type="password"
                    placeholder='Repeat Password'
                    name='password2'
                    value={ password2 }
                    onChange={ handleOnChange }
                />
                { password2.trim().length <= 0 && <span>Este campo es obligatorio</span> }
                { password2.trim().length > 0 && password1 !== password2 && <span>Los password deben ser iguales</span> }

                <button type="submit">Create</button>
                <button type="button" onClick={ reset }>Reset form</button>
            </form>
        </div>
    )
}
