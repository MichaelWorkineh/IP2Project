import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth'
import { useAuth } from '../contexts/AuthProvider'
import Footer from '../components/Footer'
import PasswordStrengthBar from 'react-password-strength-bar';
import { signupAndSaveUserData } from '../firebase/auth'


const Signup = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
      };

    const onSubmit = async(event)=> {
        event.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            try {
                const user = await signupAndSaveUserData(email, password, name);
                
                alert("Signup Successful");
                navigate('/');

            } catch(error) {
                setErrorMessage("Error: Can't Signup");
                console.log(error);
                setIsRegistering(false);
            }
        } else {
            alert("Error: Signup Not Working");
        }
    }


  return (
    <div>
      <div className='w-full flex justify-center mt-18 mb-36'>
        <form  onSubmit={onSubmit} className='w-[34%] h-[60%] bg-[] flex-col p-12 rounded shadow-custom'>
            
            <div className='w-full flex flex-col  p-2 justify-between '>
                <h3 className='font-bold mb-4 text-black'>SignUp and start learning</h3>
                <div className='w-full flex flex-col mb-2 relative'>
                <label
                    className={`absolute left-3 transition-all ${
                        name ? 'text-black -top-3 text-sm' : 'top-2 text-base'
                    } font-semibold pointer-events-none`}
                    >
                    Full Name
                    </label>
                    <input type="text"
                        autoComplete='off'
                        name='name'
                        onChange={handleNameChange}
                        placeholder="Email Adress"
                        className= 'peer placeholder-transparent h-10 w-full border border-black text-gray-900'/>
                </div>
                <div className='w-full flex flex-col relative'>
                <label
                    className={`absolute left-3 transition-all ${
                        email ? 'text-black -top-3 text-sm' : 'top-2 text-base'
                    } font-semibold pointer-events-none`}
                    >
                    Email
                    </label>
                    <input type="email"
                        autoComplete='off'
                        name='email'
                        placeholder="Email Adress"
                        onChange={handleEmailChange}
                        className= 'peer placeholder-transparent h-10 w-full border border-black text-gray-900'/>
                </div>
                <div className='w-full flex flex-col mt-2 relative'>
                <label
                    className={`absolute left-3 transition-all ${
                        password ? 'text-black -top-3 text-sm' : 'top-2 text-base'
                    } font-semibold pointer-events-none`}
                    >
                    Password
                    </label><input type="password"
                        name='password'
                        autoComplete='off'
                        placeholder="Email Adress"
                        onChange={handlePasswordChange}
                        className= 'peer placeholder-transparent h-10 w-full border border-black text-gray-900'/>
                </div>
                {errorMessage && (<span className='text-red-600 font-bold'>{errorMessage}</span>)}
                <PasswordStrengthBar
            password={password}
            style={{
              width: "200px",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginRight: "170px",
            }}
            scoreWords={["Too weak", "Could be stronger", "Strong Password", "Very Strong"]}
            scoreWordStyle={{ textAlign: "left", textTransform: "capitalize" }}
          />
                <div className='relative mt-2'>
                    <button type='submit' className={`w-full py-2 bg-purple-600 text-white font-bold border border-gray-300`}>Signup</button>
                </div >
                <div className='flex justify-center mt-2 '>
                    <p className='text-sm'>Agree to terms and policity and stuff</p>
                </div>
            </div>
            <div className='w-full flex items-center justify-center border-t border-gray-300'>
                <p className='text-sm font-normal mt-3'>Already have an account? <Link to = '/login' className='font-semibold underline text-blue-800 mt-3'>Login</Link></p>
            </div>
        </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Signup