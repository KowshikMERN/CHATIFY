import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import GroupList from '../../components/GroupList/GroupList'
import Friends from '../../components/Friends/Friends'
import Chat from '../../components/Chat/Chat'


const Message = () => {
  return (
    <div>
         <div className = 'flex ml-[32px] mr-[23px]'>
            <div className = 'w-[186px]'>
              <Sidebar active = 'msg'/>
            </div>
            <div className = 'w-[427px] ml-[43px]'>
              <GroupList/>
              <Friends/>
            </div>
            
            <div className = 'w-[689px] ml-[27px] '>
              <Chat/>
            </div>
          </div> 
    </div>
  )
}

export default Message