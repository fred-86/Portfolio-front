import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Banner } from '../../Components/Banner'
import { selectLogged } from '../../_helpers__/selectorLogged'
import { userLogin } from '../../__services__/login.action'
import { validationSchema } from '../../__services__/validation'

export function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLogged = useSelector(selectLogged)

    useEffect(() => {
        if (isLogged.logged) {
            navigate('/admin', { replace: true })
        }
    }, [isLogged])
    const initialValues = {
        email: '',
        password: '',
    }
    const handleSubmit = (values, { resetForm }) => {
        console.log(values)
        const email = values.email
        const password = values.password
        dispatch(userLogin({ email, password }))
        resetForm()
    }
    return (
        <main className="login-wrapper">
            <Banner title="Login" />
            <section className="login-form">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) =>
                        handleSubmit(values, { resetForm })
                    }
                >
                    {({ resetForm }) => (
                        <Form className="form" data-testid="login-form">
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">
                                    Email :
                                </label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="small"
                                    className="text-danger"
                                />
                            </div>
                            <div className="form-group ">
                                <label
                                    className="form-label"
                                    htmlFor="password"
                                >
                                    Mot de passe :
                                </label>
                                <Field
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="small"
                                    className="text-danger"
                                />
                            </div>

                            <div className="form-group form-group--btn form_responsive form_responsive--4">
                                <button type="submit" className="btn btn-save">
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="btn btn-cancel"
                                >
                                    Cancel
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </section>
        </main>
    )
}
