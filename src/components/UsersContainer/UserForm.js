import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";

const UserForm = ({setUsers}) => {
    const {reset, register, handleSubmit} = useForm();

    const save = (item)=>{
        userService.create(item).then(({data})=> setUsers(prev=>[...prev, data]));
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            {/*<input type="text" placeholder={'id'} {...register('id')}/>*/}
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'street'} {...register('address.street')}/>
            <input type="number" placeholder={'phone'} {...register('phone')}/>
            <input type="text" placeholder={'website'} {...register('website')}/>
            <button>save</button>
        </form>
    );
};

export {UserForm};