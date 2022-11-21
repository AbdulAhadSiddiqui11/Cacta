import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

import Logo from '../utils/cacta-logo.png';
import { createOrGetUser } from '../utils';


import useAuthStore from '../store/authStore';


const navbarStyle: CSSProperties = {
    backgroundColor: '#ffde54',
}

const style123 = "background-color: #ffde54;";

const Navbar = () => {
    const { userProfile, addUser, removeUser } = useAuthStore();

    return (
        <div className='w-full flex justify-between item-center border-b-2 border-gray-200 py-2 px-4' style={navbarStyle}>
            <Link href="/">
                <div className='w-[100px] md:w-[130px]'>
                    <Image 
                        className ='cursor-pointer' 
                        src = {Logo} 
                        alt = "cacta" 
                        layout = "responsive" 
                    />
                </div>
            </Link>
            <div>
                SEARCH
            </div>
            <div>
                {userProfile ? (
                    <div className='flex gap-5 md:gap-10'>
                        <Link href='/upload'>
                            <button className='border-2 px-2 md:px-4 py-1 text-md font-semibold flex items-center gap-2 rounded-xl text-[#46426e]'>
                                <IoMdAdd className='text-xl' /> {` `}
                                <span className='hidden md:block'>Upload</span>
                            </button>
                        </Link>
                        {userProfile.image && (
                            <Link href="/">
                                <>
                                    <Image 
                                        width={35}
                                        height={35}
                                        className='rounded-full cursor-pointer'
                                        src={userProfile.image}
                                        alt="profile photo"
                                    />
                                </>
                            </Link>
                        )}
                        <button
                            type='button'
                            className='px-2'
                            onClick={() => {
                                googleLogout();
                                removeUser();
                            }}
                        >
                            <AiOutlineLogout color="red" fontSize={21} />
                        </button>
                    </div>
                ) : (
                    <GoogleLogin 
                        onSuccess={(response) => createOrGetUser(response, addUser)}
                        onError={() => console.log("error")}
                    />
                )}
            </div>
        </div>
    );
}

export default Navbar;