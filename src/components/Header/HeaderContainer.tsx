import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { authAPI } from '../../api/api'
import { authReducerType, login, setAuthUserData } from '../../redux/auth-reducer'
import Header from './Header'


type PropsType = {
    setAuthUserData: () => void
    login: () => void
}

class HeaderContainer extends React.Component<any, PropsType> {

    componentDidMount() {
        login()
        //  authAPI.login()
        //      .then( data => {
        //         if (data.resultCode === 0) {
        //             let {id, email, login} = data.data
        //             this.props.setAuthUserData(id, email,login)
        //         }             
        //      })
        }          

    render() {

        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state: authReducerType) => ({
     isAuth: state.isAuth,
     login: state.login

})


export default connect(mapStateToProps, { setAuthUserData, login })(HeaderContainer)