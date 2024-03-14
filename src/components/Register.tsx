import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {Button, TextField} from "@mui/material";
import {authActions} from "../redux";

import {IAuth} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";


const Register = () => {
    const {register, handleSubmit} = useForm<IAuth>();
    const dispatch = useAppDispatch();
    const {registerError} = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    const reg: SubmitHandler<IAuth> = async (user) => {
        const {meta:{requestStatus}} = await dispatch(authActions.register({user}));

        if (requestStatus==='fulfilled'){ //if request is write, then do navigation
            navigate('/login')
        }
    };

    return (
        <div>
            {registerError && <h5>{registerError}</h5>}
            <form onSubmit={handleSubmit(reg)} style={{margin:'10px 0', display:'flex', alignItems:'center'}}>
                <TextField label="Username" variant="outlined" {...register('username')}/>
                <TextField  label="Password" variant="outlined" {...register('password')} />
                <Button variant={'contained'}>register</Button>
            </form>
        </div>
    );
};

export {Register};