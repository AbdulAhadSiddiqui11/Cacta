import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified as VerifiedIcon } from 'react-icons/go';

import useAuthStore from '../store/authStore';
import NoResults from './NoResults';
import { IUser } from '../types';

// interfaces and types
interface IComment {
    comment: string;
    length?: number;
    _key: string,
    postedBy: {
        _ref: string;
        _id?: string;
    }
}

interface Iprops {
    isPostingComment: boolean;
    comment: string;
    setComment: Dispatch<SetStateAction<string>>;
    addComment: (e: React.FormEvent) => void;
    comments: IComment[];
}

const Comments = ({ comment, setComment, addComment, comments, isPostingComment}: Iprops) => {
    const { userProfile, allUsers } = useAuthStore();

    return (
        <div className='border-t-2 border-gray-200 pt-4 px-10 bg-[#f8f8f8] border-b-2 lg:pb-0 pb-[100px]'>
            <div className='overflow-scroll lg:h-[457px]'>
                {comments?.length > 0 ? (
                    comments.map((comment, idx) => (
                        <>
                            {allUsers?.map((user: IUser) => (
                                user._id === (comment.postedBy._id || comment.postedBy._ref) && (
                                    <div className='p-2 mb-4 items-center bg-white rounded-xl' key={idx}>
                                        <Link
                                            href={`/profile/${user._id}`}
                                        >
                                            <div className='flex items-start gap-3'>
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
                                        <div className='pl-4 pt-1'>
                                            <p>
                                                {comment.comment}
                                            </p>
                                        </div>
                                    </div>
                                )
                            ))}
                        </>
                    ))
                ) : (
                    <NoResults text="Be the first one to add a comment" />
                )}
            </div>

            {userProfile && (
                <div className='pt-5 pb-6 px-2 md:px-10'>
                    <form onSubmit={addComment} className='flex gap-4'>
                        <input 
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Add a comment"
                            className='bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg'
                        />
                        <button 
                            className='text-md text-gray-400'
                            onClick={addComment}
                        >
                            {isPostingComment ? 'Commenting...' : 'Comment'}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Comments;