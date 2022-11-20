import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';

import Logo from '../utils/cacta-logo.png';

const navbarStyle: CSSProperties = {
    backgroundColor: '#ffde54',
}

const style123 = "background-color: #ffde54;";

const Navbar = () => {
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
    </div>
  )
}

export default Navbar;