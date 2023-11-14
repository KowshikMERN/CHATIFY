
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import img1 from "../../assets/FriendRequest1.png"
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from 'react-redux';


const UserList = () => {
  const data = useSelector(state => state.userLoginInfo.userInfo);
  console.log(data);
  const db = getDatabase();
  const [usersList,setUsersList] = useState([])


  useEffect(() => {
    const userRef = ref(db, 'users/');
    onValue(userRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item)=>{
        console.log(item.val(),'item');
        if(data.uid != item.key){
          arr.push({...item.val() , userid : item.key})
        }
        
      })
      setUsersList(arr)
    });

  }, [])
  console.log(usersList);

  const handleFriendRequest = (item)=>{
    console.log(item , 'item');
    set(push(ref(db, 'friendRequest/')),{
      receiverName: item.username,
      receiverid : item.userid,
      senderName : data.displayName,
      senderId : data.uid,
      
    });
  }

  return (
    <div className='shadow px-[22px] rounded-xl mt-[35px] h-[450px] overflow-y-scroll'>
      <div className='flex items-center justify-between '>
        <h2 className='font-Poppins font-semibold text-xl text-[#000]'>User List</h2>
        <BsThreeDotsVertical />
      </div>

      <div className = 'mt-[17px]'>
      
      {
      usersList.map((item)=>(
        <div className='flex  items-center overflow-hidden  border-b-2 border-shadow pb-[14px]'>
        <img src={img1} alt="" />
        <div className='flex items-center'>
          <div className=' ml-[10px] mr-[50px]'>
            <h3 className='font-Poppins font-semibold text-sm text-black'>{item.username}</h3>
            <p className='font-Poppins text-xs font-normal text-wide'>{item.email}</p>
          </div>
          <button onClick={()=>handleFriendRequest(item)} className='px-[8px] bg-praimary rounded-[5px] font-Poppins text-xl text-white font-semibold'>+</button>
        </div>
      </div>
      ))
     }
      </div>

    </div>
  )
}

export default UserList