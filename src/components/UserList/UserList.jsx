
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import img1 from "../../assets/FriendRequest1.png"
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from 'react-redux';



const UserList = () => {
  const data = useSelector(state => state.userLoginInfo.userInfo);
  const db = getDatabase();
  const [userList, setUserList] = useState([])
  const [friendRequestList, setfriendRequestList] = useState([])
  const [friendList, setfriendList] = useState([])
  const [searchData, setSearchData] = useState('')


  useEffect(() => {
    const userRef = ref(db, 'users/');
    onValue(userRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (data.uid != item.key) {
          arr.push({ ...item.val(), userid: item.key })
        }

      })
      setUserList(arr)
    });

  }, [])

  const handleFriendRequest = (item) => {
    set(push(ref(db, 'friendRequest/')), {
      receiverName: item.username,
      receiverId: item.userid,
      senderName: data.displayName,
      senderId: data.uid,

    });
  }

  useEffect(() => {
    const friendRequestRef = ref(db, 'friendRequest/');
    onValue(friendRequestRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        arr.push(item.val().receiverId + item.val().senderId);

      })
      setfriendRequestList(arr)

    });
  }, [])

  useEffect(() => {
    const friendRef = ref(db, 'friends/');
    onValue(friendRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        arr.push(item.val().receiverId + item.val().senderId);

      })
      setfriendList(arr)

    });
  }, [])

  const handleSearch = (e) => {
    console.log(e.target.value);
    let arr = []
    if (e.target.value.length == 0) {
      setSearchData([])
    } else {
      userList.filter((item) => {
        if (item.username.toLowerCase().includes(e.target.value.toLowerCase())) {
          arr.push(item)
          setSearchData(arr)
        }
      })
    }
  }

  return (
    <div className='shadow px-[22px] rounded-xl mt-[35px] h-[450px] overflow-y-scroll'>
      <div className='flex items-center justify-between '>
        <h2 className='font-Poppins font-semibold text-xl text-[#000]'>User List</h2>
        <BsThreeDotsVertical />
      </div>
      <div className='fixed'>
        <input onChange={handleSearch} type="text" className='border border-red-500 p-3 outline-none rounded-lg' />
      </div>
      <div className='mt-[60px]'>
        {

          searchData.length > 0 ?
          searchData.map((item)=>(
            <div className='flex  items-center overflow-hidden  border-b-2 border-shadow pb-[14px]'>
            <img src={img1} alt="" />
            <div className='flex items-center'>
              <div className=' ml-[10px] mr-[50px] w-[150px]'>
                <h3 className='font-Poppins font-semibold text-sm text-black'>{item.username}</h3>
                <p className='font-Poppins text-xs font-normal text-wide'>{item.email}</p>
              </div>
              {
                friendList.includes(item.userid + data.uid) ||
                friendList.includes(data.uid + item.userid)
                ?
                <button className='px-[8px] bg-praimary rounded-[5px] font-Poppins text-xl text-white font-semibold '>friend</button>
                :
                friendRequestList.includes(item.userid + data.uid) ||
                friendRequestList.includes(data.uid + item.userid)
                ?
                <button className='px-[8px] bg-praimary rounded-[5px] font-Poppins text-xl text-white font-semibold '>pending</button>
                :
                <button onClick={()=>handleFriendRequest(item)} className='px-[8px] bg-praimary rounded-[5px] font-Poppins text-xl text-white font-semibold '>+</button>
               
              }
              
            </div>
          </div>
          ))
          :
          userList.map((item)=>(
            <div className='flex  items-center overflow-hidden  border-b-2 border-shadow pb-[14px]'>
            <img src={img1} alt="" />
            <div className='flex items-center'>
              <div className=' ml-[10px] mr-[50px] w-[150px]'>
                <h3 className='font-Poppins font-semibold text-sm text-black'>{item.username}</h3>
                <p className='font-Poppins text-xs font-normal text-wide'>{item.email}</p>
              </div>
              {
                friendList.includes(item.userid + data.uid) ||
                friendList.includes(data.uid + item.userid)
                ?
                <button className='px-[8px] bg-praimary rounded-[5px] font-Poppins text-xl text-white font-semibold '>friend</button>
                :
                friendRequestList.includes(item.userid + data.uid) ||
                friendRequestList.includes(data.uid + item.userid)
                ?
                <button className='px-[8px] bg-praimary rounded-[5px] font-Poppins text-xl text-white font-semibold '>pending</button>
                :
                <button onClick={()=>handleFriendRequest(item)} className='px-[8px] bg-praimary rounded-[5px] font-Poppins text-xl text-white font-semibold '>+</button>
               
              }
              
            </div>
          </div>
          ))
        }
      </div>

    </div>
  )
}

export default UserList