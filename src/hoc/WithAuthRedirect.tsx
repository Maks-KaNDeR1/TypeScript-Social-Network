import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { AppRootStateType } from '../redux/redux-store';


let mapStateToPropsForRedirect = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

type PropsType = {
    isAuth: boolean
}


export const WithAuthRedirect = (Component: any) => {
   
    class RedirectComponent extends React.Component<any, PropsType> {
        render() {
            if (!this.props.isAuth) return <Navigate to='/login' />
            return <Component {...this.props} />
        }
    }
   
    let ConectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConectedAuthRedirectComponent;
}


export default WithAuthRedirect