import React from 'react'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import Header from './Header'
import { logout } from '../../redux/auth-reducer';

type PropsType = {

}

class HeaderContainer extends React.Component<any, PropsType> {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => {
   return {
     isAuth: state.auth.isAuth,
     login: state.auth.login,
     
}}


export default connect(mapStateToProps, { logout })(HeaderContainer)