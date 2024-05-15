import React, { useContext, useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth'
import { useAuth } from '../contexts/AuthProvider'
import Footer from '../components/Footer'


const Login = () => {
    
const { userLoggedIn } = useAuth()

const navigate = useNavigate();
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [isSigningIn, setIsSigningIn] = useState(false)
const [errorMessage, setErrorMessage] = useState('')

const handleEmailChange = (event) => {
    setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
};

const onSubmit = async(event)=> {
   event.preventDefault()
   if(!isSigningIn) {
    setIsSigningIn(true)
    try {
        await doSignInWithEmailAndPassword(email, password);
        navigate('/')
    } catch(error) {
        setErrorMessage("Error: Can't Login");
        setIsSigningIn(false);
    }
   } else {
    alert("ERROR: Login Not working");
   }
}

const onGoogleSignIn = async(event) => {
    event.preventDefault()
    if(!isSigningIn) {
      try {
        await doSignInWithGoogle();
        navigate('/');
      } catch(error) {
        setErrorMessage("Error: cant Sign in With Google");
        setIsSigningIn(false);
      }
    }
}
  return (
    <div>
          {userLoggedIn && (<Navigate to={'/'} replace={true}/>)}
        <div className='w-full flex justify-center mt-18 mb-36'>
        <form  onSubmit={onSubmit} className='w-[35%] h-[60%] bg-[] flex-col p-12 rounded shadow-custom'>
            <div className='m-2'>
                <div className='w-full border mb-2 border-black h-10 p-5 flex items-center font-bold font-sans'>
                <img src="../src/images/google.png" className='object-contain w-7 mr-2 p-0'/>
                Continue with Google
            </div>
            <div className='w-full border mb-2 border-black h-10 p-5 flex items-center font-bold font-sans'>
                <img src="../src/images/communication_15047435.png" className='object-contain w-7 mr-2 p-0'/>
                Continue with Facebook
            </div>
            <div className='w-full border border-black h-10 p-5 flex items-center font-bold font-sans'>
                <img src="../src/images/apple-logo_747.png" className='object-contain w-7 mr-2 p-0'/>
                Continue with Apple
            </div>
            </div>
            <div className='w-full flex flex-col  p-2 justify-between '>
                <div className='w-full flex flex-col relative'>
                <label
              className={`absolute left-3 transition-all ${
                email ? 'text-blue -top-3 text-sm' : 'top-2 text-base'
              } font-semibold pointer-events-none`}
            >
              Email
            </label><input type="email"
                        autoComplete='off'
                        name='email'
                        placeholder="Email Adress"
                        onChange={handleEmailChange}
                        className= 'peer placeholder-transparent h-10 w-full border border-black text-gray-900
                        '/>
                </div>
                <div className='w-full flex flex-col mt-2 relative'>
                        <label
                    className={`absolute left-3 transition-all ${
                        password ? 'text-blue -top-3 text-sm' : 'top-2 text-base'
                    } font-semibold pointer-events-none`}
                    >
                    Password
                    </label>
                    <input type="password"
                        name='password'
                        autoComplete='off'
                        placeholder="Email Adress"
                        onChange={handlePasswordChange}
                        className= 'peer placeholder-transparent h-10 w-full border border-black text-gray-900'/>
                </div>
                {errorMessage && (<span className='text-red-600 font-bold'>{errorMessage}</span>)}
                <div className='relative mt-2'>
                    <button type='submit' disabled={isSigningIn} className={`w-full py-2 bg-purple-600 text-white font-bold border border-gray-300 ${isSigningIn}`}>{isSigningIn ? 'Signing In...' : 'Sign In'}</button>
                </div >
                <div className='flex justify-center mt-2 '>
                    <p>or <span className='text-blue-800 font-bold'>Forgot Password</span></p>
                </div>
              </div>
            <div className='w-full flex items-center justify-center border-t border-gray-300'>
                <p className='text-sm font-normal'>Don't have an account? <Link to = '/sign-up' className='font-semibold underline text-blue-800'>SignUp <br/>
                    <span>Login with your organaization</span>
                </Link></p>
            </div>
        </form>
    </div>
    <Footer/>
    </div>
    
  )
}

export default Login