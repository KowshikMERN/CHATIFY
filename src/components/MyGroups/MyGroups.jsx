
import React, { useEffect, useState } from 'react'
import {BsThreeDotsVertical} from "react-icons/bs"
import img1 from "../../assets/FriendRequest1.png"
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from 'react-redux';

const MyGroups = () => {
  const data = useSelector(state => state.userLoginInfo.userInfo);
  const db = getDatabase();
  const [myGroupList,setmyGroupList] = useState([])

  useEffect(() => {
    const myGroupRef = ref(db, 'myGroup/');
    onValue(myGroupRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item)=>{
        if(item.val().admineId == data.uid){
          arr.push(item.val())
        }
        console.log(item.val(),'gjsfdhgj');
        
      })
      setmyGroupList(arr)
    });

  }, [])

  return (
    <div className = 'shadow px-[22px] rounded-xl mt-[35px] h-[450px] overflow-y-scroll'>
        <div className = 'flex items-center justify-between '>
            <h2 className = 'font-Poppins font-semibold text-xl text-[#000]'>My Groups</h2>
            <BsThreeDotsVertical/>
        </div>

        {
          myGroupList.map((item)=>(
            <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
              <img src={img1} alt="" />
              <div className = 'flex items-center'>
                <div className = 'ml-[10px] mr-[75px] '>
                  <h5 className = 'font-Poppins font-bold text-base text-black'>{item.adminName}</h5>
                  <h3 className = 'font-Poppins font-semibold text-sm text-black'>{item.groupName}</h3>
                  <p className = 'font-Poppins text-xs font-normal text-wide'>{item.tagName}</p>
                </div>             
                <p className = 'text-[10px] text-wide font-normal'>Today, 8:56pm</p>            
              </div>
          </div>
          ))
        }
                   
    </div>
  )
}

export default MyGroups