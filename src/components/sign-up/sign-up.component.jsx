import React, {Component} from 'react';

import './sign-up.style.scss';
import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';



class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert(`Passwords don't match`);
            return;
        }

        try {
           const {user} = await auth.createUserWithEmailAndPassword({email, password});
           
           await createUserProfileDocument(user, {displayName});

           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '' 
           });
        } catch(error) {
            console.error(error);
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState( {[name]: value});
    }


    render() {
        return (
            <div className='signup'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='displayName' 
                    type='text' 
                    value={this.state.displayName} 
                    handleChange={this.handleChange}
                    label='Display Name'
                    required
                    />

                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='email'
                    required
                    />

                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='Password'
                    required
                    />

                    <FormInput 
                    name='confirmPassword' 
                    type='password' 
                    value={this.state.confirmPassword} 
                    handleChange={this.handleChange}
                    label='Confirm Password'
                    required
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;