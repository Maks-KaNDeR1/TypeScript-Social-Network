import React from 'react'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import Header from './Header'
import { logout } from '../../redux/auth-reducer';

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

class HeaderContainer extends React.Component<any, PropsType> {

    render() {
        return (
            <Header isAuth={this.props.isAuth}
                login={this.props.login}
                logout={this.props.logout} />
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


export default connect(mapStateToProps, { logout })(HeaderContainer)