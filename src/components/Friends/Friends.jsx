import { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import img1 from "../../assets/FriendRequest1.png"
import img2 from "../../assets/FriendRequest2.png"
import img3 from "../../assets/FriendRequest3.png"
import img4 from "../../assets/FriendRequest4.png"
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useSelector } from 'react-redux';

const Friends = () => {
  const data = useSelector(state => state.userLoginInfo.userInfo);
  const db = getDatabase();
  const [friendList, setFriendList] = useState([])

  useEffect(() => {
    const friendRef = ref(db, 'friends/');
    onValue(friendRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if(data.uid == item.val().receiverId || data.uid == item.val().senderId){
          arr.push({...item.val(), id : item.key});
        }        
      })
      setFriendList(arr)
    });
  }, [])

  const handleBlock = (item)=> {
    console.log(item);
    if(data.uid == item.senderId){
      set(push(ref(db,'block/')),{
        block:item.receiverName,
        blockId:item.receiverId,
        blockBy:item.senderName,
        blockById:item.senderId,
      }).then(()=>{
        remove(ref(db,'friends/' + item.id))
      })
    }
    else{
      set(push(ref(db,'block/')),{
        block:item.senderName,
        blockId:item.senderId,
        blockBy:item.receiverName,
        blockById:item.receiverId,
      }).then(()=>{
        remove(ref(db,'friends/' + item.id))
      })
    }
  }
  return (
    <div className='shadow px-[22px] rounded-xl mt-[35px] h-[450px] overflow-y-scroll'>
      <div className='flex items-center justify-between '>
        <h2 className='font-Poppins font-semibold text-xl text-[#000]'>Friends</h2>
        <BsThreeDotsVertical />
      </div>
      {
        friendList.map((item) => (
          <div className='flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img1} alt="" />
            <div className='flex items-center'>
              <div className='ml-[10px] mr-[40px] '>
                <h3 className='font-Poppins font-semibold text-sm text-black'>
                  {
                    item.receiverId == data.uid ? item.senderName : item.receiverName
                  }
                </h3>
                <p className='font-Poppins text-xs font-normal text-wide'>Dinner?</p>
              </div>
              <button onClick = {()=>handleBlock(item)} className = 'px-[22px] bg-praimary rounded-[5px] font-Poppins '><p className = 'text-xl text-white font-semibold'>block</p></button>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Friends