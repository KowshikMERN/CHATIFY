import React from 'react'
import {BsThreeDotsVertical} from "react-icons/bs"
import img1 from "../../assets/FriendRequest1.png"
import img2 from "../../assets/FriendRequest2.png"
import img3 from "../../assets/FriendRequest3.png"
import img4 from "../../assets/FriendRequest4.png"

const Friends = () => {
  return (
    <div className = 'shadow px-[22px] rounded-xl mt-[35px] h-[450px] overflow-y-scroll'>
        <div className = 'flex items-center justify-between '>
            <h2 className = 'font-Poppins font-semibold text-xl text-[#000]'>Friends</h2>
            <BsThreeDotsVertical/>
        </div>

        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img1} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[10px] mr-[75px] '>
                <h3 className = 'font-Poppins font-semibold text-sm text-black'>Raghav</h3>
                <p className = 'font-Poppins text-xs font-normal text-wide'>Dinner?</p>
              </div>             
              <p className = 'text-[10px] text-wide font-normal'>Today, 8:56pm</p>            
            </div>
        </div>
        

        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img2} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[10px] mr-[78px] '>
                <h3 className = 'font-Poppins font-semibold text-sm text-black'>Swathi</h3>
                <p className = 'font-Poppins text-xs font-normal text-wide'>Sure!</p>
              </div>             
              <p className = 'text-[10px] text-wide font-normal'>Today, 2:31pm</p>            
            </div>
        </div>
        

        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img3} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[10px] mr-[74px] '>
                <h3 className = 'font-Poppins font-semibold text-sm text-black'>Kiran</h3>
                <p className = 'font-Poppins text-xs font-normal text-wide'>Hi.....</p>
              </div>             
              <p className = 'text-[10px] text-wide font-normal'>Yesterday, 6:22pm</p>            
            </div>
        </div>
        

        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img4} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[10px] mr-[5px] '>
                <h3 className = 'font-Poppins font-semibold text-sm text-black'>Tejeshwini C</h3>
                <p className = 'font-Poppins text-xs font-normal text-wide'>I will call him today.</p>
              </div>             
              <p className = 'text-[10px] text-wide font-normal'>Today, 12:22pm</p>            
            </div>
        </div>
        

        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img1} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[10px] mr-[75px] '>
                <h3 className = 'font-Poppins font-semibold text-sm text-black'>Raghav</h3>
                <p className = 'font-Poppins text-xs font-normal text-wide'>Dinner?</p>
              </div>             
              <p className = 'text-[10px] text-wide font-normal'>Today, 8:56pm</p>            
            </div>
        </div>
        

        <div className = 'flex items-center mt-[17px] border-b-2 border-shadow pb-[14px]'>
            <img src={img2} alt="" />
            <div className = 'flex items-center'>
              <div className = 'ml-[10px] mr-[74px] '>
                <h3 className = 'font-Poppins font-semibold text-sm text-black'>Raghav</h3>
                <p className = 'font-Poppins text-xs font-normal text-wide'>Dinner?</p>
              </div>             
              <p className = 'text-[10px] text-wide font-normal'>Today, 8:56pm</p>            
            </div>
        </div>
        


      
        
    </div>
  )
}

export default Friends