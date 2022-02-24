import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { authReducerType, setAuthUserData } from '../../redux/auth-reducer'
import Header from './Header'


type PropsType = {
    setAuthUserData: () => void
}

class HeaderContainer extends React.Component<any, PropsType> {

    componentDidMount() {
         axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
             withCredentials: true
         })
             .then( response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email,login)
                }             
             })
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


export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)