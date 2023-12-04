import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Sidebar from '../../components/sidebar/Sidebar';
import GroupList from '../../components/GroupList/GroupList';
import { userLoginInfo } from '../../slices/userSlice';
import FriendRequest from '../../components/friendRequest/friendRequest';
import Friends from '../../components/Friends/Friends';
import MyGroups from '../../components/MyGroups/MyGroups';
import BlockedUsers from '../../components/BlockedUsers/BlockedUsers';
import UserList from '../../components/UserList/UserList';

const Home = () => {
  const auth = getAuth();
  const data = useSelector(state=>state.userLoginInfo.userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [verify,setVerify] = useState(false)
  useEffect(()=>{
    if(!data){
      navigate('/login')
    }
  },[])

  onAuthStateChanged(auth, (user) => {
    console.log(user,'dfgljkdfgd');
    if (user.emailVerified) {
      setVerify(true)
      dispatch(userLoginInfo(user))
      localStorage.setItem('userLoginInfo', JSON.stringify(userLoginInfo(user)))
    } 
  });

  return (

    <div>
         {
          verify ?
          <div className = 'flex ml-[32px] mr-[23px]'>
            <div className = 'w-[186px]'>
              <Sidebar active = 'Home'/>
            </div>
            <div className = 'w-[427px] ml-[43px]'>
              <GroupList/>
              <FriendRequest/>
            </div>
            
            <div className = 'w-[344px] ml-[43px]'>
              <Friends/>
              <MyGroups/>
            </div>
            <div className = 'w-[427px] ml-[43px]'>
              <UserList/>
              <BlockedUsers/>
            </div>
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