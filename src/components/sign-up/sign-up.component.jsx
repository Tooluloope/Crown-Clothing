import React from 'react'

import './sign-up.component.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';



class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password:'',
            confirmPassword:'',
            displayName:'',
        }
    
    }

     handleSubmit = async e => {
         e.preventDefault()

        const {email, password, confirmPassword, displayName} = this.state
        console.log(this.state)

        if (confirmPassword !== password) return;

        

        try {
            const{ user }  = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName})
        } catch (error) {
            console.log(error)
        }

        this.setState({
            email: '',
            password:'',
            confirmPassword:'',
            displayName:'',
        })

    }

    handleChange = e => {
       const  {value, name } = e.target;

       this.setState({[name]:value});
    }

    render() {
        const {email, password, confirmPassword, displayName} = this.state;
        return(

            <div className="sign-up">
                <h2 className='title'>
                    I do not have an Account
                </h2>
                <span>
                    Sign up with your email and password
                </span>
                <form className='sign-up-form'  onSubmit = {this.handleSubmit}>
                    <FormInput
                    label="Display Name"
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange = {this.handleChange} required />
                    <FormInput
                    label="Email Address"
                    type='email'
                    name='email'
                    value={email}
                    onChange = {this.handleChange} required />
                    <FormInput
                    label="Password"
                    type='password'
                    name='password'
                    value={password}
                    onChange = {this.handleChange} required />
                    <FormInput
                    label="Confirm Password"
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange = {this.handleChange} required />
                    <CustomButton type='submit' children = {'SIGN UP NOW'}  />
                </form>

                
            </div>
        )
    };
};

export default SignUp;