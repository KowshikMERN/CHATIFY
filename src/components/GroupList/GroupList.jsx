import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import img1 from "../../assets/groupList-1.png"
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from 'react-redux';


const GroupList = () => {
  const data = useSelector(state => state.userLoginInfo.userInfo);
  const db = getDatabase();
  const [show, setShow] = useState(false)
  const [groupName, setGroupName] = useState('')
  const [tagLineName, setTagLineName] = useState('')
  const [groupList, setgroupList] = useState([])

  const handleCreateGroupPopup = () => {
    setShow(!show)
  }
  const handleCreateGroup = () => {
    set(push(ref(db, 'myGroup/')), {
      groupName: groupName,
      tagName: tagLineName,
      adminName: data.displayName,
      admineId: data.uid
    })
  }

  useEffect(() => {
    const groupRef = ref(db, 'myGroup/');
    onValue(groupRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (item.val().admineId != data.uid) {
          arr.push(item.val())
        }
        console.log(item.val(), 'gjsfdhgj');

      })
      setgroupList(arr)
    });

  }, [])


  return (
    <div className='shadow px-[22px] rounded-xl mt-[35px] h-[450px] overflow-y-scroll'>
      <div className='flex items-center justify-between '>
        <h2 className='font-Poppins font-semibold text-xl text-[#000]'>Groups List</h2>
        {
          show ?
            <button onClick={handleCreateGroupPopup} className='bg-red-500 rounded-lg text-white p-2 font-semibold font-Poppins'>go back</button>
            :
            <button onClick={handleCreateGroupPopup} className='bg-praimary rounded-lg text-white p-2 font-semibold font-Poppins'>create group</button>
        }

      </div>

      {
        show ?
          <div>
            <input onChange={(e) => setGroupName(e.target.value)} className='w-full border-2 outline-none rounded-lg p-3 mt-5 placeholder:text-[#03014C] font-sans text-xl placeholder:font-semibold  ' type="text" placeholder='group name' />
            <input onChange={(e) => setTagLineName(e.target.value)} className='w-full border-2 outline-none rounded-lg p-3 mt-5 placeholder:text-[#03014C] font-sans text-xl placeholder:font-semibold  ' type="text" placeholder='group tagname' />
            <button onClick={handleCreateGroup} className='bg-praimary text-white p-3 rounded-lg mt-5 font-semibold w-full'>create group</button>
          </div>
          :
          <>
            {
              groupList.map((item)=>(
                <div className='flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
                  <img src={img1} alt="" />
                  <div className='flex items-center'>
                    <div className='ml-[14px] mr-[51px] '>
                      <h5 className='font-Poppins font-bold text-base text-black'>{item.adminName}</h5>
                      <h3 className='font-Poppins font-semibold text-lg text-black'>{item.groupName}</h3>
                      <p className='font-Poppins text-sm font-medium text-wide'>{item.tagName}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </>
      }

    </div>
  )
}

export default GroupList