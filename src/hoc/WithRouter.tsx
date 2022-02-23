
import React, { ComponentType } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


export function withRouter<T>(Component: ComponentType<T>) {
    function ComponentWithRouterProp(props: T) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
 }
 
