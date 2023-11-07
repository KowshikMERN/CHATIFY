import React, { useState } from 'react'
import img from '../../assets/login.png'
import {FcGoogle} from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import {AiFillEye ,AiFillEyeInvisible} from 'react-icons/ai'
import { getAuth, signInWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast} from 'react-toastify'
import { useDispatch } from 'react-redux'
import { userLoginInfo } from '../../slices/userSlice'


const Login = () => {
    const dispatch = useDispatch()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[showPassword,setShowPassword] = useState('')

    const[emailErr,setEmailErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const[error, setError] = useState('')
    const[forgotPasswordModal,setForgotPasswordModal] = useState(false)
    const [forgotPasswordError , setForgotPasswordError] =useState('')

    const handleEmail = (e)=>{
        setEmail(e.target.value);
        setEmailErr('')
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
        setPasswordErr('')
    }

    const handleClick = () =>{
        if(!email){
            setEmailErr('email is required');
        }else{
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setEmailErr('email is invalid');
          }
        }

        if(!password){
            setPasswordErr('password is required')
        }
        else if(!/(?=.*\d)/.test(password)){
            setPasswordErr('atleast one digit')
        }
        else if(!/(?=.*[a-z])/.test(password)){
            setPasswordErr('atleast one lower case')
        }
        if(email && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)&& /(?=.*\d)/.test(password) && /(?=.*[a-z])/.test(password)){
            signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                toast.success('login successfully done');
                dispatch(userLoginInfo(user.user))
                localStorage.setItem('userLoginInfo', JSON.stringify(userLoginInfo(user.user)))
                setTimeout(()=>{
                    navigate('/home')
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                if(errorCode.includes('auth/invalid-login-credentials')){
                    setError('please give your right email & password');
                }
            });
        } 
    }
    const googleSignIn = ()=>{
        signInWithPopup(auth, provider)
        .then(() => {
            setTimeout(()=>{
                navigate('/home')
            },3000)
        }).catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
        });

    }
    const handleForgotPassword = ()=>{
        setForgotPasswordModal(true)
    }
    const handlePopupClick = ()=>{
        setForgotPasswordModal(false)
    }
    const forgotSubmitPassword = ()=>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log('password');
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            if(errorCode.includes('auth/missing-email')){
                setForgotPasswordError('please give your right email');
            }
        });

    }
  return (
    <div>
        <div className = 'flex'>
        <div className = 'w-1/2 flex justify-end'>
            <div className = 'pt-[221px] pr-[215px]'>
            <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    />
                <h1 className = 'text-[34px] text-[#03014C] font-semibold font-sans '>Login to your account!</h1>
                {
                    error && 
                    <p className = 'text-[20px] bg-red-500 font-semibold font-sans text-white p-2'>{error}</p>
                }
                <div onClick = {googleSignIn} className = 'py-[22px] pr-[42px] pl-[30px] border-2 border-loginBorder rounded-lg w-[225px] my-[30px] cursor-pointer'>
                    <div  className = 'flex gap-x-[9px] items-center'>
                        <div className = ''><FcGoogle/></div>
                        <p className = 'text-[#03014C] font-sans font-semibold text-sm '>Login with Google</p>
                    </div>
                </div>

                <div className = 'mb-[60px] w-[372px]'>
                    <p className = 'text-loginEmail font-sans text-sm font-normal '>Email Addres</p>
                    <input onChange = {handleEmail} className = 'py-[16px] pr-[175px] pl-[10px] border-b-2 border-loginBorder  outline-none' type="email" name="" id="" />
                    {
                        emailErr && <p className = 'text-white font-bold bg-red-500 font-Nunito text-sm rounded p-2 text-center mt-[2px] '>{emailErr}</p>
                    }

                </div>

                <div className = 'relative w-[372px]'>
                    <p className = 'text-loginEmail font-sans text-sm font-normal '>Password</p>
                    <input onChange = {handlePassword} className = 'py-[16px] pr-[175px] pl-[10px] border-b-2 border-loginBorder outline-none' type={showPassword ? 'text' : 'password'} name="" id="" />
                    {
                        showPassword ?
                        <AiFillEye onClick = {()=>setShowPassword(!showPassword)} className = 'absolute top-[33px] right-[23px] text-2xl'></AiFillEye>
                        :
                        <AiFillEyeInvisible onClick = {()=>setShowPassword(!showPassword)} className = 'absolute top-[33px] right-[23px] text-2xl'></AiFillEyeInvisible>
                    }
                  
                    {
                        passwordErr && <p className = 'text-white font-bold bg-red-500 font-Nunito text-sm rounded p-2 text-center mt-[2px] '>{passwordErr}</p>
                    }

                    
                </div>
                <div className = 'w-[424px] mt-[55px]'>
                    <button onClick = {handleClick} className = 'py-[26px] px-[122px] rounded-xl font-sans text-xl font-semibold text-white bg-praimary hover:bg-gray-200 transition duration-500 hover:text-[#EA6C00]'><p href="">Login to Continue</p></button>
                    <p className = 'mt-[45px] font-sm text-[#03014C] font-normal font-sans text-center'>Don’t have an account ? <a className = 'text-[#EA6C00] font-bold hover:text-praimary transform duration-300'><Link to='/registration'>Sign up</Link></a></p>

                    <p onClick = {handleForgotPassword} className = 'mt-[45px] font-sm text-[#EA6C00] cursor-pointer font-sans text-center font-bold'>forgot Password</p>
                </div>
            </div>
        </div>

        <div className = 'w-1/2'>
            <img className = 'h-screen object-cover ' src={img} alt="img" />
        </div>
    </div>
    {
        forgotPasswordModal && 
        <div className = 'absolute top-0 left-0  w-full h-screen bg-praimary flex justify-center items-center'>
    
        <div className = 'w-1/2 bg-white p-10 rounded '>
            <h2 className = 'text-[34px] text-[#03014C] font-semibold font-sans '>forgot password</h2>
            {
                forgotPasswordError && 
                <p className = 'text-[20px] w-1/2 rounded bg-red-500 font-semibold font-sans text-white p-2'>{forgotPasswordError}</p>
            }
        <div  className = 'mt-[62px] relative w-[368px]'>
                    <input onChange = {handleEmail} value = {email} className = 'border-border border-2 rounded-lg py-[26px] pl-[52px] w-full' type="email" placeholder='write your email'/>
                    <p className = 'absolute top-[-8px] left-[34px] pl-[18px] pr-[15px] bg-white font-Nunito font-semibold text-[#11175D] text-[13px] tracking-[1px]'><span className = 'opacity-70 '>Email Address</span></p>
                    {
                        emailErr && <p className = 'text-white font-bold bg-red-500 font-Nunito text-sm rounded p-2 text-center mt-[2px]'>{emailErr}</p>                        
                    }
                </div>
                <div className = 'mt-[10px] gap-x-1 flex'>
                    <button onClick = {forgotSubmitPassword} className = 'w-[200px] py-[26px]  rounded-xl font-sans text-xl font-semibold text-white bg-praimary hover:bg-gray-200 transition duration-500 hover:text-[#EA6C00]'><p >submit</p></button>

                    <button onClick = {handlePopupClick} className = 'w-[200px] py-[26px]  rounded-xl font-sans text-xl font-semibold text-white bg-praimary hover:bg-gray-200 transition duration-500 hover:text-[#EA6C00]'><p>cencel</p></button>
                </div>
        </div>
    </div>
    }
    </div>
  )
}

export default Login