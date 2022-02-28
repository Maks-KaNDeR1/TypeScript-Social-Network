import React from 'react'
import { Navigate } from 'react-router-dom'
import { authReducerType } from '../redux/auth-reducer';
import { connect } from 'react-redux';


let mapStateToPropsForRedirect = (state: authReducerType) => ({
    isAuth: state.isAuth
});

export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Navigate to='/login' />
            return <Component {...this.props} />
        }
    }

    let ConectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent);
    return ConectedAuthRedirectComponent;
}


export default WithAuthRedirect