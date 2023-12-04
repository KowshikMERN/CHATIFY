import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import img1 from "../../assets/FriendRequest1.png"
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'


const BlockedUsers = () => {
  const data = useSelector(state => state.userLoginInfo.userInfo);
  const db = getDatabase();
  const [blockList, setBlockList] = useState([])

  useEffect(() => {
    const blockRef = ref(db, 'block/');
    onValue(blockRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if(item.val().blockById == data.uid){
          arr.push({
            id : item.key,
            block : item.val().block,
            blockId : item.val().blockId
          })
        }else if(item.val().blockId == data.uid){
          arr.push({
            id : item.key,
            blockBy : item.val().blockBy,
            blockById : item.val().blockById
          })
        }


      })
      setBlockList(arr)

    });
  }, [])
  const handleUnblock = (item)=>{
    console.log(item);
    set(push(ref(db,'friends/')),{
     senderName : item.block,
     senderId : item.blockId,
     receiverName : data.displayName, 
     receiverId : data.uid 
    }).then(()=>{
      remove(ref(db,'block/' + item.id))
    })
  }

  return (
    <div className='shadow px-[22px] rounded-xl mt-[35px] h-[450px] overflow-y-scroll'>
      <div className='flex items-center justify-between '>
        <h2 className='font-Poppins font-semibold text-xl text-[#000]'>Blocked Users</h2>
        <BsThreeDotsVertical />
      </div>
      {
        blockList.map((item) => (
          <div className='flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img1} alt="" />
            <div className='flex items-center'>
              <div className='ml-[10px] mr-[46px] '>
                <h3 className='font-Poppins font-semibold text-sm text-black'>{item.block}</h3>
                <h3 className='font-Poppins font-semibold text-sm text-black'>{item.blockby}</h3>
                <p className='font-Poppins text-xs font-normal text-wide'>Dinner?</p>
              </div>
              {
                !item.blockBy &&
                <button onClick = {()=>handleUnblock(item)} className='px-[8px] bg-praimary rounded-[5px] font-Poppins '><p className='text-xl text-white font-semibold'>unblock</p></button>
              }
            </div>
          </div>
        ))
      }







    </div>
  )
}

export default BlockedUsers