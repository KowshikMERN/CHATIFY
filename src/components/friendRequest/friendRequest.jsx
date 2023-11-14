import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import img1 from "../../assets/FriendRequest1.png"
import img2 from "../../assets/FriendRequest2.png"
import img3 from "../../assets/FriendRequest3.png"
import img4 from "../../assets/FriendRequest4.png"
import { getDatabase, ref, onValue } from "firebase/database";

const FriendRequest = () => {
  const db = getDatabase();
  const [friendRequestItem, setFriendRequestItem] = useState([])

  useEffect(() => {
    const friendRequestRef = ref(db, 'friendRequest/');
    onValue(friendRequestRef, (snapshot) => {
      let arr = []
      snapshot.forEach((demo) => {
        console.log(demo.val());
        arr.push({ ...demo.val() })

      })
      setFriendRequestItem(arr)
      console.log(friendRequestItem);

    });
  }, [])

  return (
    <div className='shadow px-[22px] rounded-xl mt-[50px] h-[450px] overflow-y-scroll'>
      <div className='flex items-center justify-between '>
        <h2 className='font-Poppins font-semibold text-xl text-[#000]'>FriendRequest</h2>
        <BsThreeDotsVertical />
      </div>

      {
        friendRequestItem.map((demo) => (
          <div className='flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img1} alt="" />
            <div className='flex items-center'>
              <div className='ml-[14px] mr-[104px] '>
                <h3 className='font-Poppins font-semibold text-lg text-black'>{demo.senderName}</h3>
                <p className='font-Poppins text-sm font-medium text-wide'>please accept</p>
              </div>
              <button className='px-[8px] bg-praimary rounded-[5px] font-Poppins '><p className='text-xl text-white font-semibold'>Accept</p></button>
            </div>
          </div>

        ))
      }





    </div>
  )
}

export default FriendRequest