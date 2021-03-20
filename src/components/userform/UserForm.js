import React from 'react';
import {useForm,useStep} from 'react-hooks-helper';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';
import RegisterForm from './RegisterForm'
import ReviewForm from './ReviewForm';


const defaultData = {
    account: '',
    password: '',
    confirmPassword: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: 'male',


}

const steps = [
    {id: 'login'},
    {id: 'account'},
    {id: 'profile'},
    {id: 'review'}
]

const UserForm = () => {

    const [formData, setForm] = useForm(defaultData);
    const{ step, navigation} =useStep({
        steps,
        initialStep: 0,
    })

    const props = {formData, setForm, navigation}

    switch(step.id){
        case 'login':
            return (
                <LoginForm
                    {...props}
            />);

        case 'account':
            return(
                <RegisterForm
                    {...props}
            />);
        case 'profile':
            return(
                <ProfileForm  
                    {...props}
                />);
        case 'review':
            return(
                <ReviewForm
                    {...props}
                />);   
    }

}

export default UserForm
