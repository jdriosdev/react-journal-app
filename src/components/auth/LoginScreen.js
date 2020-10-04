import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const {email, password} = formValues

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch( startLoginEmailPassword(email,  password) )
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin() )
  }

  return (
    <>
      <h3 className='title'>Login</h3>

      <form className='form animate__animated animate__fadeIn' onSubmit={handleLogin}>

        <input
          className='input'
          type='text'
          placeholder='Email'
          name='email' 
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />

        <input
          className='input'
          type='password'
          placeholder='password'
          name='password'
          value={password}   
          onChange={handleInputChange}    
        />
        
        <button 
          className='btn pointer btn-block'
          type='submit'
          disabled={ loading }
        >
          Login
        </button>

        
        <div 
          className="google-btn"
          onClick={handleGoogleLogin}
        >
          <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
          </div>
            <p className="btn-text">
                <b>Sign in with google</b>
            </p>
          </div>
      </form>

      <Link 
        className='link'
        to='/auth/register'>Create an account</Link>
    </>
  )
}
