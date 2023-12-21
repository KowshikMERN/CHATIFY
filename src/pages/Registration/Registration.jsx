import React, { useState } from 'react'
import img from '../../assets/registration.png'
import {AiFillEye ,AiFillEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { userLoginInfo } from '../../slices/userSlice';
import { useSelector } from 'react-redux';
import { getDatabase, ref, set } from "firebase/database";


const Registration = () => {
    const db = getDatabase();
    const navigate = useNavigate()
    const auth = getAuth();
    const [email, setEmail] = useState ('')
    const [fullName, setfullName] = useState ('')
    const[password,setPassword] = useState('')
    const [succese,setSuccese] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [fullNameErr, setFullNameErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const [showPassword, setShowPassword] = useState('')

    const click = ()=>{
        if(!email){
            setEmailErr('email is required');
        }
        else{
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                setEmailErr('email is invalide')
            }
        }
        if(!fullName){
            setFullNameErr('fullName is required');
        }
        if(!password){
            setPasswordErr('password is required');
            }
        else if(!/^(?=.*[a-z])/.test(password)){
            setPasswordErr('atlist one lowercase')
        }
        else if(!/(?=.*[0-9])/.test(password)){
            setPasswordErr('atlist one number')
        }
        if(email && fullName && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && /^(?=.*[a-z])/.test(password) && /(?=.*[0-9])/.test(password)){
            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => { 
                    updateProfile(auth.currentUser, {
                        displayName: fullName,
                        photoURL: "./src/assets/profile.png"
                      })
                      .then(() => {
                        sendEmailVerification(auth.currentUser)
                        toast.success('Registration done . please verify your email');  
                        setEmail('')
                        setfullName('')
                        setPassword('')
                        setTimeout(()=>{
                            navigate('/login')
                        },3000)                             
                    }).then(() => {
                            set(ref(db, 'users/' + user.user?.uid), {
                              username: user.user.displayName,
                              email: user.user.email,
                            })

                    })
                })
                                        
                .catch((error) => {
                    const errorCode = error.code;
                    if(errorCode.includes('auth/email-already-in-use')){
                        setEmailErr('email is already in use')
                    }                
                });
        }
    }

    
    const handleEmail = (e)=>{
        setEmail(e.target.value);
        setEmailErr('')
    }
    const Name = (e) =>{
        setfullName(e.target.value);
        setFullNameErr('')
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
        setPasswordErr('')
    }

  return (
    <div className = 'flex'>
        <div className = 'w-1/2 flex justify-end'>
            <div className = 'pr-[69px] pt-[225px]'>
                <h1 className = 'font-Nunito text-[34px] font-bold text-[#11175D]'>Get started with easily register</h1>
                <p className = 'font-Nunito text-[20px] font-normal text-[#000] opacity-50 mt-[13px]'>Free register <span className = 'text-[#808080]'>and</span> you can enjoy it</p>

                {/* {
                    succese && 
                    <p className = 'font-Nunito text-[20px] font-normal text-white p-3 bg-green-500'>{succese}</p>
                } */}
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


                <div  className = 'mt-[62px] relative w-[368px]'>
                    <input onChange = {handleEmail} value = {email} className = 'border-border border-2 rounded-lg py-[26px] pl-[52px] w-full' type="email" placeholder='write your email'/>
                    <p className = 'absolute top-[-8px] left-[34px] pl-[18px] pr-[15px] bg-white font-Nunito font-semibold text-[#11175D] text-[13px] tracking-[1px]'><span className = 'opacity-70 '>Email Address</span></p>
                    {
                        emailErr && <p className = 'text-white font-bold bg-red-500 font-Nunito text-sm rounded p-2 text-center mt-[2px]'>{emailErr}</p>                        
                    }
                </div>

                <div className = 'my-[56px] relative w-[368px]'>
                    <input onChange = {Name} value = {fullName} className = 'border-border border-2 rounded-lg py-[26px] pl-[52px] w-[368px]' type="text" name="" id="" placeholder='write your name'/>
                    <p className = 'absolute top-[-8px] left-[34px] pl-[18px] pr-[15px] bg-white font-Nunito font-semibold text-[#11175D] text-[13px] tracking-[1px]'><span className = 'opacity-70 '>Full name</span></p>
                    {
                        fullNameErr && <p className = 'text-white font-bold bg-red-500 font-Nunito text-sm rounded p-2 text-center mt-[2px]'>{fullNameErr}</p>                        
                    }
                </div>

                <div className = ' relative w-[368px]'>
                    <input onChange = {handlePassword} value = {password} className = 'border-border border-2 rounded-lg py-[26px] pl-[52px] w-[368px]' type={showPassword ? 'text' : 'password'} name="" id="" placeholder='input Password'/>

                    <p className = 'absolute top-[-8px] left-[34px] pl-[18px] pr-[15px] bg-white font-Nunito font-semibold text-[#11175D] text-[13px] tracking-[1px]'><span className = 'opacity-70 '>Password</span></p>

                    {
                        showPassword ?
                        <AiFillEye onClick = {()=>setShowPassword(!showPassword)} className = 'absolute right-[23px] top-[33px] text-2xl'/>
                        :
                        <AiFillEyeInvisible onClick = {()=>setShowPassword(!showPassword)} className = 'absolute right-[23px] top-[33px] text-2xl'/>
                        
                    }

                    {passwordErr &&
                    <p className = 'text-white font-bold bg-red-500 font-Nunito text-sm rounded p-2 text-center mt-[2px]'>{passwordErr}</p>}
                    
                </div>

                <div className = 'mt-[52px] w-[368px]'>
                    <button onClick = {click} className = 'py-[20px] pl-[150px] pr-[140px] bg-praimary  rounded-full text-xl font-Nunito text-white font-semibold mb-[35px] hover:bg-gray-200 transition duration-500 hover:text-[#EA6C00]'><p href="">Sign up</p></button>
                    <p className = 'font-sans text-sm font-normal text-[#03014C] text-center'>Already  have an account ? <a href="" className = 'text-[#EA6C00] font-bold hover:text-praimary transform duration-300'><Link to='/login'>Sign In</Link></a></p>
                </div>
            </div>
        </div>


        <div className = 'w-1/2'>
            <img className = ' h-screen object-cover' src={img} alt="img" />
        </div>
    </div>
  )
}

export default Registration