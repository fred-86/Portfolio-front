import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'
import { selectLogged } from '../_helpers__/selectorLogged'
// import { accountService } from '../_services/account.services'
import { useSelector } from 'react-redux'

/**
 * Fonction de vérification de token
 * Et fermetur partie admin
 *
 * @param {Object} props{children}
 * @returns {ReactNode}
 */
export const AuthGuard = ({ children }) => {
    const isLogged = useSelector(selectLogged)

    if (!isLogged.logged) {
        return <Navigate to="/auth/sign-in" />
    }
    return children
}

AuthGuard.propTypes = {
    children: PropTypes.element,
}
