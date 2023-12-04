import React, { createRef, useState } from 'react'
import profile from "../../assets/profile.png"
import { AiOutlineHome, AiFillMessage, AiOutlineSetting } from 'react-icons/ai'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { MdOutlineLogout } from 'react-icons/md'
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom'
import { BiSolidCloudUpload } from 'react-icons/bi'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { useSelector } from 'react-redux'
import Home from '../../pages/Home/Home'




const Sidebar = ({active}) => {
  const data = useSelector(state => state.userLoginInfo.userInfo)
  console.log(data, 'kk');
  const storage = getStorage();
  const [imgUploadPopup, setimgUploadPopup] = useState(false)
  const auth = getAuth();
  const navigate = useNavigate()
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef();

  const handleSignout = () => {
    signOut(auth).then(() => {
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    }).catch((error) => {
    });
  }

  const handleImgUpload = () => {
    console.log('img');
    setimgUploadPopup(true)
  }

  const handleImgUploadPopupCencel = () => {
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

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());

      const storageRef = ref(storage, auth.currentUser.uid);

      const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
      uploadString(storageRef, message4, 'data_url').then((snapshot) => {
        console.log('Uploaded a data_url string!');
        getDownloadURL(storageRef).then((downloadURL) => {
          console.log('File available at', downloadURL);
          updateProfile(auth.currentUser, {
            photoURL: downloadURL
          }).then(() => {
            setimgUploadPopup(false)
            setImage('')
            setCropData('')
          })
        });
      });
    }
  }

  return (
    <div className="bg-praimary h-screen rounded-xl pt-[38px] my-[35px] cursor-pointer">
      <div className='relative w-[100px] h-[100px] mx-auto group '>
        <img src={data.photoURL} alt="" className="mx-auto rounded-full w-full h-full" />
        <div onClick={handleImgUpload} className='w-full h-full bg-overlay rounded-full absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
          <BiSolidCloudUpload className='text-white text-[25px]'></BiSolidCloudUpload>
        </div>
      </div>
      <h1 className='text-2xl text-[#ffffff] font-bold font-sans mt-[10px] text-center'>{data.displayName}</h1>

      <div className={`mt-[78px] relative overflow-hidden py-[20px] after:absolute after:content-[''] after:w-full after:h-full ${active == 'Home' && 'after:bg-white'} after:top-0 after:left-[25px] after:z-[-1] z-[1] after:rounded-l-xl before:absolute before:content-[''] before:w-[10px] before:h-full before:top-0 before:right-0 before:bg-praimary before:rounded-l-xl before:shadow-md`}>
        <Link to='/Home'>
          <AiOutlineHome className={`mx-auto text-5xl cursor-pointer ${active == 'Home' ? 'text-praimary' : 'text-white'}`} />
        </Link>
      </div>

      <div className={`mt-[78px] relative overflow-hidden py-[20px] after:absolute after:content-[''] after:w-full after:h-full ${active == 'msg' && 'after:bg-white'} after:top-0 after:left-[25px] after:z-[-1] z-[1] after:rounded-l-xl before:absolute before:content-[''] before:w-[10px] before:h-full before:top-0 before:right-0 before:bg-praimary before:rounded-l-xl before:shadow-md`}>
        <Link to = '/msg'>
          <AiFillMessage className={`mx-auto text-5xl cursor-pointer ${active == 'msg' ? 'text-praimary' : 'text-[#BAD1FF]'}`}></AiFillMessage>
        </Link>
      </div>

      <div className="mt-[70px]">
        <MdOutlineNotificationsNone className="mx-auto text-5xl text-[#fff] cursor-pointer"></MdOutlineNotificationsNone>
      </div>

      <div className="mt-[70px]">
        <AiOutlineSetting className="mx-auto text-5xl text-[#fff] cursor-pointer"></AiOutlineSetting>
      </div>

      <div className="mt-[150px]">
        <MdOutlineLogout onClick={handleSignout} className="mx-auto text-5xl text-[#fff] cursor-pointer"></MdOutlineLogout>
      </div>

      {
        imgUploadPopup &&
        <div className='w-full h-screen bg-praimary absolute top-0 left-0 z-[11] flex justify-center items-center '>
          <div className='bg-white p-4 rounded-xl w-[400px] '>
            <h2 className='font-sans font-bold text-[35px]'>IMAGE UPLOAD</h2>

            {
              image ?
                <div className='w-[100px] h-[100px] rounded-full mx-auto overflow-hidden mb-[20px]'> <div className='img-preview w-[100px] h-[100px] rounded-full'></div>
                </div>
                :
                <div className='w-[100px] h-[100px] rounded-full mx-auto overflow-hidden mb-[20px]'> <img src={data.photoURL} alt="" />
                </div>
            }

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
            <input type="file" className='my-[25px] ' onChange={handleImgChange} />
            <div>
              <button onClick={getCropData} className='bg-praimary text-white font-sans py-2 px-4 rounded text-2xl font-semibold '>UPLOAD</button>
              <button onClick={handleImgUploadPopupCencel} className='bg-red-600 text-white font-sans py-2 px-4 rounded text-2xl font-semibold  ml-[10px]'>CENCEL</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Sidebar