import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import img1 from "../../assets/FriendRequest1.png"
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useSelector } from 'react-redux';

const FriendRequest = () => {
  const data = useSelector(state => state.userLoginInfo.userInfo);
  const db = getDatabase();
  const [friendRequestList, setfriendRequestList] = useState([])

  useEffect(() => {
    const friendRequestRef = ref(db, 'friendRequest/');
    onValue(friendRequestRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if(item.val().receiverId == data.uid){
          arr.push({...item.val(), id:item.key})
        }

      })
      setfriendRequestList(arr)

    });
  }, [])
  const handleFriend = (item)=>{
    console.log(item);
    set(push(ref(db, 'friends/')),{
      ...item 
    }).then(()=>{
      remove((ref(db, 'friendRequest/' + item.id)))
    })
  }

  return (
    <div className='shadow px-[22px] rounded-xl mt-[50px] h-[450px] overflow-y-scroll'>
      <div className='flex items-center justify-between '>
        <h2 className='font-Poppins font-semibold text-xl text-[#000]'>FriendRequest</h2>
        <BsThreeDotsVertical />
      </div>

      {
      friendRequestList.length == 0 ?
      <h3 className ='text-2xl text-red-700 font-bold'>DATA NOT FOUND</h3>
      :
        friendRequestList.map((item) => (
          <div className='flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img1} alt="" />
            <div className='flex items-center'>
              <div className='ml-[14px] mr-[104px] '>
                <h3 className='font-Poppins font-semibold text-lg text-black'>{item.senderName}</h3>
                <p className='font-Poppins text-sm font-medium text-wide'>please accept </p>
              </div>
              <button onClick = {()=>handleFriend(item)} className='px-[8px] bg-praimary rounded-[5px] font-Poppins '><p className='text-xl text-white font-semibold'>Accept</p></button>
            </div>
          </div>

        ))
      }





    </div>
  )
}

export default FriendRequest