import React, { createRef, useState } from 'react'
import profile from "../../assets/profile.png"
import {AiOutlineHome,AiFillMessage,AiOutlineSetting} from 'react-icons/ai'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {MdOutlineLogout} from 'react-icons/md'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { BiSolidCloudUpload } from 'react-icons/bi'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";



const Sidebar = () => {
  const[imgUploadPopup,setimgUploadPopup] = useState(false)
  const auth = getAuth();
  const navigate = useNavigate()
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef();

  const handleSignout = ()=>{
    signOut(auth).then(() => {
      console.log('done');
      setTimeout(()=>{
        navigate('/login')
      },2000)
    }).catch((error) => {
      console.log(error.code);
    });
  }

  const handleImgUpload = () =>{
    console.log('img');
    setimgUploadPopup(true)
  }
  
  const handleImgUploadPopupCencel = () =>{
    setimgUploadPopup(false)
  }

  const handleImgChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  return (
    <div className = "bg-praimary h-screen rounded-xl pt-[38px] my-[35px] cursor-pointer">
      <div className = 'relative w-[100px] h-[100px] mx-auto group'>
        <img src={profile} alt="" className = "mx-auto "/>
        <div onClick={handleImgUpload} className = 'w-full h-full bg-overlay rounded-full absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
          <BiSolidCloudUpload className = 'text-white text-[25px]'></BiSolidCloudUpload>
        </div>
      </div>

      <div className = "mt-[78px] relative overflow-hidden py-[20px] after:absolute after:content-[''] after:w-full after:h-full after:bg-white after:top-0 after:left-[25px] after:z-[-1] z-[1] after:rounded-l-xl before:absolute before:content-[''] before:w-[10px] before:h-full before:top-0 before:right-0 before:bg-praimary before:rounded-l-xl before:shadow-md">
        <AiOutlineHome className = 'mx-auto text-5xl text-praimary cursor-pointer'/>
      </div>

      <div className = "mt-[57px]">
        <AiFillMessage className = "mx-auto text-5xl text-[#BAD1FF] cursor-pointer"></AiFillMessage>
      </div>

      <div className = "mt-[70px]">
        <MdOutlineNotificationsNone className = "mx-auto text-5xl text-[#fff] cursor-pointer"></MdOutlineNotificationsNone>
      </div>

      <div className = "mt-[70px]">
        <AiOutlineSetting className = "mx-auto text-5xl text-[#fff] cursor-pointer"></AiOutlineSetting>
      </div>

      <div className = "mt-[150px]">
        <MdOutlineLogout onClick = {handleSignout} className = "mx-auto text-5xl text-[#fff] cursor-pointer"></MdOutlineLogout>
      </div>

      {
        imgUploadPopup &&
        <div className = 'w-full h-screen bg-praimary absolute top-0 left-0 z-[11] flex justify-center items-center '>
        <div className = 'bg-white p-4 rounded-xl w-[400px] '>
          <h2 className = 'font-sans font-bold text-[35px]'>IMAGE UPLOAD</h2>
          {
            image && 
              <Cropper
            ref={cropperRef}
            style={{ height: 400, width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            guides={true}
          />
          }
          <input type="file" className = 'my-[25px] ' onChange={handleImgChange}/>
          <div>
            <button className = 'bg-praimary text-white font-sans py-2 px-4 rounded text-2xl font-semibold '>UPLOAD</button>
            <button onClick = {handleImgUploadPopupCencel} className = 'bg-red-600 text-white font-sans py-2 px-4 rounded text-2xl font-semibold  ml-[10px]'>CENCEL</button>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Sidebar