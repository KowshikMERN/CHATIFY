import React from 'react'
import {BsThreeDotsVertical} from "react-icons/bs"
import img1 from "../../assets/groupList-1.png"
import img2 from "../../assets/groupList-2.png"
import img3 from "../../assets/groupList-3.png"

const GroupList = () => {
  return (
    <div className = 'shadow px-[22px] rounded-xl mt-[35px] h-[450px] overflow-y-scroll'>
        <div className = 'flex items-center justify-between '>
            <h2 className = 'font-Poppins font-semibold text-xl text-[#000]'>Groups List</h2>
            <BsThreeDotsVertical/>
        </div>

        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img1} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[14px] mr-[51px] '>
                <h3 className = 'font-Poppins font-semibold text-lg text-black'>Friends Reunion</h3>
                <p className = 'font-Poppins text-sm font-medium text-wide'>Hi Guys, Wassup!</p>
              </div>             
              <button className = 'px-[22px] bg-praimary rounded-[5px] font-Poppins '><p className = 'text-xl text-white font-semibold'>join</p></button>            
            </div>
        </div>
        


        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img2} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[14px] mr-[59px] '>
                <h3 className = 'font-Poppins font-semibold text-lg text-black'>Friends Forever</h3>
                <p className = 'font-Poppins text-sm font-medium text-wide'>Good to see you.</p>
              </div>
              <button className = 'px-[22px] bg-praimary rounded-[5px] font-Poppins '><p className = 'text-xl text-white font-semibold'>join</p></button>
            </div>
        </div>
        

        <div className = 'flex items-center mt-[17px]  border-b-2 border-shadow pb-[14px]'>
            <img src={img3} alt="" />
            <div className = 'ml-[14px] mr-[67px] '>
              <h3 className = 'font-Poppins font-semibold text-lg text-black'>Crazy Cousins</h3>
              <p className = 'font-Poppins text-sm font-medium text-wide'>What plans today?</p>
            </div>
            <button className = 'px-[22px] bg-praimary rounded-[5px] font-Poppins '><p className = 'text-xl text-white font-semibold'>join</p></button>
        </div>
        

        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img2} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[14px] mr-[51px] '>
                <h3 className = 'font-Poppins font-semibold text-lg text-black'>Friends Reunion</h3>
                <p className = 'font-Poppins text-sm font-medium text-wide'>Hi Guys, Wassup!</p>
              </div>             
              <button className = 'px-[22px] bg-praimary rounded-[5px] font-Poppins '><p className = 'text-xl text-white font-semibold'>join</p></button>            
            </div>
        </div>
        


        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img1} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[14px] mr-[59px] '>
                <h3 className = 'font-Poppins font-semibold text-lg text-black'>Friends Forever</h3>
                <p className = 'font-Poppins text-sm font-medium text-wide'>Good to see you.</p>
              </div>
              <button className = 'px-[22px] bg-praimary rounded-[5px] font-Poppins '><p className = 'text-xl text-white font-semibold'>join</p></button>
            </div>
        </div>
        


        <div className = 'flex items-center mt-[17px]  pb-[21px]'>
            <img src={img3} alt="" />
            <div className = 'ml-[14px] mr-[67px] '>
              <h3 className = 'font-Poppins font-semibold text-lg text-black'>Crazy Cousins</h3>
              <p className = 'font-Poppins text-sm font-medium text-wide'>What plans today?</p>
            </div>
            <button className = 'px-[22px] bg-praimary rounded-[5px] font-Poppins '><p className = 'text-xl text-white font-semibold'>join</p></button>
        </div>
        
    </div>
  )
}

export default GroupList