import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

import { topics } from '../utils/constants';

const Discover = () => {
    const router = useRouter();
    const { topic } = router.query;
    
    const activeTopicStyle: string ="xl:border-2 hover:bg-primary xl:border-[#ffde54] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#ffde54]";
    const topicStyle: string = "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#46426e]";

    return (
        <div className='xl:border-b-2 xl:border-gray-200 pb-6'>
            <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
                Popular Topics
            </p>
            <div className='flex gap-3 flex-wrap'>
                {topics.map((currentTopic) => (
                <Link href={`/?topic=${currentTopic.name}`} key={currentTopic.name}>
                    <div className={topic === currentTopic.name ? activeTopicStyle : topicStyle}>
                        <span className='font-bold text-2xl xl:text-md'>
                            {currentTopic.icon}
                        </span>
                        <span className='font-medium text-md hidden xl:block capitalize'>
                            {currentTopic.name}
                        </span>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    )
}

export default Discover