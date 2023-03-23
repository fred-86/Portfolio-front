import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'
// import { accountService } from '../_services/account.services'
// import { useSelector } from 'react-redux'
// import { selectLogged } from './selectors'

/**
 * Fonction de vérification de token
 * Et fermetur partie admin
 *
 * @param {Object} props{children}
 * @returns {ReactNode}
 */
export const AuthGuard = ({ children }) => {
    const islogged = useSelector(selectLogged)

    if (!islogged.logged) {
        return <Navigate to="/Sign-in" />
    }
    return children
}

AuthGuard.propTypes = {
    children: PropTypes.element,
}
