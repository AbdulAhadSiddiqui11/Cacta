import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified as VerifiedIcon } from 'react-icons/go';

import useAuthStore from '../store/authStore';
import shuffle from '../utils/helperFunctions';
import { IUser } from '../types';

const SuggestedAccounts = () => {
  const { fetchAllUsers, allUsers } = useAuthStore();
  
  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return (
    <div className='lg:border-b-2 border-gray-200 pb-4'>
      <p className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>
        Suggested Accounts
      </p>
      <div>
        {shuffle(allUsers).slice(0, 6).map((user: IUser) => (
          <Link
            href={`/profile/${user._id}`}
            key={user._id}
          >
            <div className='flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold'>
              <div className='w-8 h-8'>
                <Image 
                  src={user.image}
                  width={34}
                  height={34}
                  className='rounded-full'
                  alt='User Profile'
                  layout='responsive'
                />
              </div>
              <div className='hidden xl:block'>
                <p className='flex gap-1 items-ceter text-md font-bold text-primary lowercase'>
                  {user.userName.replaceAll(' ', '')}
                  <VerifiedIcon className='text-blue-400 my-1'/>
                </p>
                <p className='capitalize text-gray-400 text-xs'>
                  {user.userName}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SuggestedAccounts;