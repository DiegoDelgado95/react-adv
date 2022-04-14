import { Formik, Form } from 'formik'
import { MySelect, MyTextInput } from '../components'
import formJson from '../data/custom-form.json'
import * as Yup from 'yup';

const initialValues:{[key:string]:any} = {}; 
const requiredFields: {[key:string]:any} = {};

for(const input of formJson){
    initialValues[input.name] = input.value;

    if( !input.validations ) continue;

    let schema = Yup.string()

    for( const rule of input.validations ){
        if( rule.type === 'required' ){
            schema = schema.required('Este campo es requerido')
        }

        if( rule.type === 'minLength' ){
            schema = schema.min((rule as any).value, 'Debe tener como minimo '+rule.value)
        }

        if( rule.type === 'email' ){
            schema = schema.email('Debe de ser un email')
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
    console.log(formJson)
    return (
        <div>
            <h1>Dynamic Form</h1>
            <Formik
                initialValues={ initialValues }
                validationSchema={ validationSchema }
                onSubmit={values => console.log(values)}
            >
                {(formik) => (
                    <Form>
                        {
                            formJson.map( ({ type, name, placeholder, label, options}, index) => {

                                if( type === 'input' || type === 'password' || type === 'email' ){
                                    return <MyTextInput 
                                                key={index}
                                                type={(type as any)}
                                                label={label}
                                                name={name}
                                                placeholder={placeholder}
                                            />
                                } else if ( type === 'select' ){
                                    return <MySelect 
                                                key={index}
                                                label={label}
                                                name={name}
                                            >
                                                <option value="" >Select an option</option>
                                                {
                                                    options?.map( ({id, label}, index) => (
                                                    <option key={index} value={id} >{label}</option>
                                                    ))
                                                }
                                            </MySelect>
                                }

                                throw new Error(`El type: ${type} no es soportado `)
                            })
                        }
                        <button type='submit' >Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
