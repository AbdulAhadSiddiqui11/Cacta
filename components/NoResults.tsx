import React from 'react'
import  { MdOutlineVideocamOff }  from   'react-icons/md';
import { BiCommentX } from 'react-icons/bi';
import { MdOutlineNoAccounts } from 'react-icons/md';

interface IProps {
    text: string;
}

const NoResults = ({ text }: IProps) => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <p className='text-8xl'>
        {
          text === 'Be the first one to add a comment' ? <BiCommentX /> 
          : text.includes('No account result') ? <MdOutlineNoAccounts />  
          : <MdOutlineVideocamOff />
        }
      </p>
      <p className='text-2xl text-center'> {text} </p>
    </div>
  )
}

export default NoResults