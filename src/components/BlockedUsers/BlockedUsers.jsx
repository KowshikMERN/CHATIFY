import React from 'react'
import {BsThreeDotsVertical} from "react-icons/bs"
import img1 from "../../assets/FriendRequest1.png"
import img2 from "../../assets/FriendRequest2.png"
import img3 from "../../assets/FriendRequest3.png"
import img4 from "../../assets/FriendRequest4.png"
import img5 from "../../assets/BlockedUsers1.png"

const BlockedUsers = () => {
  return (
    <div className = 'shadow px-[22px] rounded-xl mt-[35px] h-[450px] overflow-y-scroll'>
        <div className = 'flex items-center justify-between '>
            <h2 className = 'font-Poppins font-semibold text-xl text-[#000]'>Blocked Users</h2>
            <BsThreeDotsVertical/>
        </div>

        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img1} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[10px] mr-[46px] '>
                <h3 className = 'font-Poppins font-semibold text-sm text-black'>Raghav</h3>
                <p className = 'font-Poppins text-xs font-normal text-wide'>Dinner?</p>
              </div>             
              <button className = 'px-[8px] bg-praimary rounded-[5px] font-Poppins '><p className = 'text-xl text-white font-semibold'>unblock</p></button>           
            </div>
        </div>
        

        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img2} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[10px] mr-[20px] '>
                <h3 className = 'font-Poppins font-semibold text-sm text-black'>Swathi</h3>
                <p className = 'font-Poppins text-xs font-normal text-wide'>Today,2:31pm!</p>
              </div>             
              <button className = 'px-[8px] bg-praimary rounded-[5px] font-Poppins '><p className = 'text-xl text-white font-semibold'>unblock</p></button>            
            </div>
        </div>
        

        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img3} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[10px] mr-[28px] '>
                <h3 className = 'font-Poppins font-semibold text-sm text-black'>Kiran</h3>
                <p className = 'font-Poppins text-xs font-normal text-wide'>Yesterday, 6:22pm</p>
              </div>             
              <button className = 'px-[8px] bg-praimary rounded-[5px] font-Poppins '><p className = 'text-xl text-white font-semibold'>unblock</p></button>
            </div>
        </div>
        

        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img4} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[10px] mr-[1px] '>
                <h3 className = 'font-Poppins font-semibold text-sm text-black'>Tejeshwini C</h3>
                <p className = 'font-Poppins text-xs font-normal text-wide'>I will call him today.</p>
              </div>             
              <button className = 'px-[8px] bg-praimary rounded-[5px] font-Poppins '><p className = 'text-xl text-white font-semibold'>unblock</p></button>            
            </div>
        </div>
        

        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img5} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[10px] mr-[35px] '>
                <h3 className = 'font-Poppins font-semibold text-sm text-black'>Marvin</h3>
                <p className = 'font-Poppins text-xs font-normal text-wide'>Today, 8:56pm</p>
              </div>             
              <button className = 'px-[8px] bg-praimary rounded-[5px] font-Poppins '><p className = 'text-xl text-white font-semibold'>unblock</p></button>            
            </div>
        </div>
        

        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img2} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[10px] mr-[20px] '>
                <h3 className = 'font-Poppins font-semibold text-sm text-black'>Swathi</h3>
                <p className = 'font-Poppins text-xs font-normal text-wide'>Today, 2:31pm</p>
              </div>             
              <button className = 'px-[8px] bg-praimary rounded-[5px] font-Poppins '><p className = 'text-xl text-white font-semibold'>unblock</p></button>           
            </div>
        </div>
        


      
        
    </div>
  )
}

export default BlockedUsers