import React from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';


export class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({email:'', password:''})
    
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({[name]: value})
    }


    



    render() {
        const {email, password} = this.state
       return (
            <div className='sign-in'>

            <h2> I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form action="" onSubmit = {this.handleSubmit} >
            
             
                    
                <FormInput type="email" name="email" handleChange={this.handleChange} value={ email } label='email'/>
                <FormInput type="password" name="password" handleChange={this.handleChange} value={ password } label='password'/>
                <div className="button">
                    <CustomButton type="Submit" children={'SIGN IN'}/>
                    <CustomButton onClick ={signInWithGoogle} children={'SIGN IN WITH GOOGLE'} isGoogleSignin />

                </div>
                
            </form>

            </div>
       ) 
    }
}