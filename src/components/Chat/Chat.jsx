import React from 'react'
import msgImg1 from '../../assets/msg1.png'
import msgDot1 from '../../assets/msgDot.png'
import { TbTriangleFilled } from "react-icons/tb";
import { IoCameraOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import ModalImage from "react-modal-image";
import login from "../../assets/login.png";

const Chat = () => {
    return (
        <div className='rounded-lg shadow my-[34px] pt-[24px] pr-[26px] pb-[33px] pl-[51px] overflow-y-scroll h-[950px]'>
            <div className=' '>
                <div className='flex items-center  border-b-2 border-shadow mb-[56px] pb-[25px]'>
                    <div className='relative '>
                        <img src={msgImg1} alt="" />
                        <img src={msgDot1} alt="" className='absolute bottom-[-7px] right-[-7px]' />
                    </div>
                    <div className='ml-[33px]  mr-[390px]'>
                        <h2 className='text-2xl font-Poppins text-black font-semibold'>Swathi </h2>
                        <p className='font-Poppins text-sm text-secondary'>Online</p>
                    </div>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="25" viewBox="0 0 5 25" fill="none">
                            <path d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" fill="#5F35F5" />
                            <path d="M2.5 15C3.88071 15 5 13.8807 5 12.5C5 11.1193 3.88071 10 2.5 10C1.11929 10 0 11.1193 0 12.5C0 13.8807 1.11929 15 2.5 15Z" fill="#5F35F5" />
                            <path d="M2.5 25C3.88071 25 5 23.8807 5 22.5C5 21.1193 3.88071 20 2.5 20C1.11929 20 0 21.1193 0 22.5C0 23.8807 1.11929 25 2.5 25Z" fill="#5F35F5" />
                        </svg>
                    </div>
                </div>
                <div className=''>
                    {/* receiver msg start */}
                    <div className='w-full mt-[24px]'>
                        <div className='relative py-[15px] px-[52px] rounded-lg bg-[#F1F1F1] inline-block'>
                            <h3 className='font-Poppins text-black text-base font-semibold'>Hey There !
                            </h3>
                            <TbTriangleFilled className='absolute bottom-[-3px] left-[-11px] text-[#F1F1F1] text-2xl' />
                        </div>
                        <p className='text-overlay text-xs font-Poppins font-medium mt-[5px]'>Today, 2:01pm</p>
                    </div>
                    {/* receiver msg end */}

                    {/* sender msg start */}
                    <div className='w-full mt-[29px] text-right'>
                        <div className='relative py-[15px] px-[52px] rounded-lg bg-praimary inline-block '>
                            <h3 className='font-Poppins text-white text-base font-semibold'>Hello...
                            </h3>
                            <TbTriangleFilled className='absolute text-2xl bottom-[-3px] right-[-9px] text-praimary' />
                        </div>
                        <p className='text-overlay text-xs font-Poppins font-medium mt-[5px]'>Today, 2:12pm</p>
                    </div>
                    {/* sender msg end */}
                    {/* receiver msg start */}
                    <div className='w-full mt-[24px] '>
                        <div className='relative py-[10px] px-[10px] rounded-lg bg-[#F1F1F1] inline-block mr-[350px]'>
                            <ModalImage
                                small={login}
                                large={login}
                            />;
                            <p className='text-black text-xs font-Poppins font-medium mt-[5px]'>Today, 2:12pm</p>
                        </div>
                    </div>
                    {/* receiver msg end */}

                    {/* sender msg start */}
                    <div className='  w-full mt-[25px] text-right flex flex-row-reverse'>
                        <div className='relative py-[10px] px-[10px] rounded-lg bg-praimary  text-right inline-block ml-[350px]'>
                            <ModalImage
                                small={login}
                                large={login}
                            />;
                            <p className='text-white text-xs font-Poppins font-medium mt-[5px]'>Today, 2:12pm</p>
                        </div>
                    </div>
                    {/* sender msg end */}

                    <div className='mt-[35px] flex justify-between'>
                        <div className='relative'>
                            <input type="text" className='bg-[#F1F1F1] px-[15px] py-[15px] rounded-[10px] w-[537px]' />
                            <svg className='absolute top-[20px] right-[50px]' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <g clip-path="url(#clip0_2_180)">
                                    <path d="M7.5 14.0625C5.75952 14.0625 4.09032 13.3711 2.85961 12.1404C1.6289 10.9097 0.9375 9.24048 0.9375 7.5C0.9375 5.75952 1.6289 4.09032 2.85961 2.85961C4.09032 1.6289 5.75952 0.9375 7.5 0.9375C9.24048 0.9375 10.9097 1.6289 12.1404 2.85961C13.3711 4.09032 14.0625 5.75952 14.0625 7.5C14.0625 9.24048 13.3711 10.9097 12.1404 12.1404C10.9097 13.3711 9.24048 14.0625 7.5 14.0625ZM7.5 15C9.48912 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48912 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15Z" fill="#707070" />
                                    <path d="M11.5603 8.90625C11.6426 9.04877 11.6859 9.21043 11.6859 9.375C11.6859 9.53957 11.6426 9.70123 11.5603 9.84375C11.149 10.5566 10.5571 11.1485 9.84436 11.5599C9.13158 11.9714 8.32301 12.1878 7.5 12.1875C6.67716 12.1877 5.86877 11.9711 5.15617 11.5597C4.44357 11.1483 3.85189 10.5565 3.44063 9.84375C3.35838 9.7013 3.31507 9.53972 3.31503 9.37524C3.31498 9.21076 3.35822 9.04916 3.44039 8.90667C3.52256 8.76418 3.64077 8.64581 3.78315 8.56346C3.92554 8.48111 4.08708 8.43767 4.25156 8.4375H10.7484C10.913 8.4375 11.0747 8.48082 11.2172 8.56311C11.3597 8.64539 11.478 8.76374 11.5603 8.90625ZM6.5625 6.09375C6.5625 6.87 6.1425 6.09375 5.625 6.09375C5.1075 6.09375 4.6875 6.87 4.6875 6.09375C4.6875 5.3175 5.1075 4.6875 5.625 4.6875C6.1425 4.6875 6.5625 5.3175 6.5625 6.09375ZM10.3125 6.09375C10.3125 6.87 9.8925 6.09375 9.375 6.09375C8.8575 6.09375 8.4375 6.87 8.4375 6.09375C8.4375 5.3175 8.8575 4.6875 9.375 4.6875C9.8925 4.6875 10.3125 5.3175 10.3125 6.09375Z" fill="#707070" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_180">
                                        <rect width="15" height="15" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <IoCameraOutline className='absolute text-2xl top-[15px] right-[15px] ' />
                        </div>
                        <div className='px-[15px] py-[15px] bg-praimary rounded-[10px] w-[45px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <g clip-path="url(#clip0_205_2)">
                                    <path d="M13.9453 0.0937652L0.36621 7.92775C-0.164063 8.23244 -0.0966805 8.97072 0.430663 9.19337L3.54492 10.5L11.9619 3.08205C12.123 2.93849 12.3516 3.15822 12.2139 3.32521L5.15625 11.9238V14.2822C5.15625 14.9736 5.99121 15.2461 6.40137 14.7451L8.26172 12.4805L11.9121 14.0098C12.3281 14.1856 12.8027 13.9248 12.8789 13.4766L14.9883 0.820328C15.0879 0.228531 14.4521 -0.199204 13.9453 0.0937652Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_205_2">
                                        <rect width="15" height="15" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Chat