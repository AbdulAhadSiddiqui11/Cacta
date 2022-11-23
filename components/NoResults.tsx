import React from 'react'

interface IProps {
    text: string;
}

const NoResults = ({ text }: IProps) => {
  return (
    <div className='flex flex-col justify-center items-center text-semibold text-gray-500 pt-10'>{text}</div>
  )
}

export default NoResults