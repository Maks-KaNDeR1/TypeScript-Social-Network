import React from 'react'
import { connect } from 'react-redux'
import { getAuthUserData } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux-store'
import Header from './Header'


type PropsType = {
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<any, PropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
        }          

    render() {

        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
   return {
     isAuth: state.auth.isAuth,
     login: state.auth.login
}}


export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer)