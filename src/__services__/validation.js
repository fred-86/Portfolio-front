import * as Yup from 'yup'

/**
 * file to configure validation for te form login
 */
export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required("L'email est requis")
        .email("L'email est invalide"),
    password: Yup.string()
        .required('le mot de passe est requis ')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
})
