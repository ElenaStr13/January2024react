import {FC, PropsWithChildren} from "react";
import {authService} from "../services";
import {Navigate} from "react-router-dom";
import {UseAppLocation} from "../hooks";

interface IProps extends PropsWithChildren {

}

const AuthRequired: FC<IProps> = ({children}) => {
    const access = authService.getAccessToken();
    const {pathname} = UseAppLocation();

    if (!access) {
        return <Navigate to={'/login'} state={pathname}/>
    }
    return (
        <>
            {children}
        </>
    );
};

export {AuthRequired};