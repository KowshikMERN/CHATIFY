import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Sidebar from '../../components/sidebar/Sidebar';
import GroupList from '../../components/GroupList/GroupList';

const Home = () => {
  const auth = getAuth();
  const data = useSelector(state=>state.userLoginInfo.userInfo)
  const navigate = useNavigate()
  const [verify,setVerify] = useState(false)
  useEffect(()=>{
    if(!data){
      navigate('/login')
    }
  },[])

  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
      setVerify(true)
    } 
  });

  return (

    <div>
         {
          verify ?
          <div className = 'flex'>
            <div className = 'w-[186px]'>
              <Sidebar/>
            </div>
            <div className = 'w-[427px] ml-[43px]'>
              <GroupList/>
            </div>
            <div className = 'w-[344px]'>fgnjflkjg</div>
            <div className = 'w-[344px]'>fgnjflkjg</div>
          </div> 
          :
          <div className = 'w-full h-screen bg-praimary flex justify-center items-center gap-x-[10px]'>
            <p className = 'p-4 bg-white rounded text-red-600 font-bold text-2xl '>PLEASE VERIFY YOUR EMAIL</p>
            <button className='p-4 bg-red-600 text-white font-bold text-2xl rounded'>
              <Link to = '/login'>BACK TO LOGIN</Link>
            </button>
          </div>
         }
    </div>
  )
}

export default Home