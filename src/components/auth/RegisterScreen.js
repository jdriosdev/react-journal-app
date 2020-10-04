import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import validator from 'validator'
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch()
  const { msgError } = useSelector( state => state.ui );


  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch( startRegisterWithEmailPasswordName(email, password, name ))
    }

  }
  
  const isFormValid = () => {

    if( name.trim().length === 0) {
      //console.log('name is required')
      dispatch( setError('name is required') )
      return false
    } else if ( !validator.isEmail( email ) ) {
      //console.log('Email invalid')
      dispatch( setError('Email invalid') )
      return false;
    } else if (password !== password2 || password.length <= 5 ) {
      //console.log('Password should be at least 6 characters and match each other')
      dispatch( setError('Password should be at least 6 characters and match each other') )
      return false
    }
    dispatch( removeError())
    return true
  }

  return (
    <>
      <h3 className='title'>register</h3>

      <form className='form animate__animated animate__fadeIn' onSubmit={handleRegister}>

        { (msgError) &&
          <div className='auth__alert-error'>
            {msgError}
          </div>
        }

        <input
          className='input'
          type='text'
          placeholder='Name'
          name='name'
          value= {name}
          autoComplete='off'  
          onChange={handleInputChange}    
        />

        <input
          className='input'
          type='text'
          placeholder='Email'
          name='email' 
          value= {email}
          autoComplete='off' 
          onChange={handleInputChange}     
        />

        <input
          className='input'
          type='password'
          placeholder='Password'
          name='password'
          value= {password}   
          onChange={handleInputChange}     
        />

        <input
          className='input'
          type='password'
          placeholder='Confirm password'
          name='password2' 
          value= {password2}  
          onChange={handleInputChange}     
        />

        <button 
          className='btn pointer btn-block'
          type='submit'
          
        >
          Register
        </button>

        
        
      </form>

      <Link 
        className='link'
        to='/auth/login'>Already registered?</Link>
    </>
  )
}
