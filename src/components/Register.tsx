import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces";
import {authActions} from "../redux";
import {useAppDispatch, useAppSelector} from "../hooks";

const Register = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useAppDispatch();
    const {registerError} = useAppSelector(state => state.auth);
    const reg:SubmitHandler<IAuth> = async (user) => {
        await dispatch(authActions.register({user}))
    }
    return (
        <div>
            {registerError && <h5>{registerError}</h5>}
            <form onSubmit={handleSubmit(reg)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>register</button>
            </form>
        </div>
    );
};

export {Register};