import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';

import { SanityAssetDocument } from '@sanity/client';

import useAuthStore from '../store/authStore';
import { client } from '../utils/client';

import { topics } from '../utils/constants';
import { BASE_URL } from '../utils';

const Upload = () => {
  const [isLoding, setIsLoading] = useState(false);
  const [videoAsset, setVideoAsset] = useState<SanityAssetDocument | undefined | null>(null);
  const [wrongFileType , setWrongFileType] = useState(false);
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState(topics[0].name);
  const [savingPost, setSavingPost] = useState(false);

  const { userProfile }: { userProfile: any } = useAuthStore();

  const router = useRouter();

  useEffect(() => {
    if (!userProfile) router.push('/');
  }, [userProfile, router]);

  const uploadVideo = async (e: any) => {
    const selectedFile = e.target.files[0];
    const fileTypes: string[] = ['video/mp4', 'video/ogg','video/webm'];

    if(fileTypes.includes(selectedFile.type)) {
      setWrongFileType(false);
      setIsLoading(true);
      client.assets.upload('file', selectedFile, {
        contentType: selectedFile.type,
        filename: selectedFile.name,
      }).then((data) => {
        setVideoAsset(data);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
      setWrongFileType(true);
    }
  }

  const handlePost = async () => {
    if(caption && videoAsset?._id && category) {
      setSavingPost(true);

      const document = {
        _type: 'post',
        caption,
        video: {
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref: videoAsset._id,
          } ,
        },
        userId: userProfile._id,
        postedBy: {
          _type: 'postedBy',
          _ref: userProfile._id,
        },
        topic: category,
      }

      await axios.post(`${BASE_URL}/api/post`, document);

      router.push('/');
    }
  };

  const handleDiscard = () => {
    setSavingPost(false);
    setVideoAsset(undefined);
    setCaption('');
    setCategory('');
  };
  
  return (
    <div className='flex w-full h-full absolute left-0 top-[60px] lg:top-[70px] mb-10 pt-10 lg:pt-20 bg-[#F8F8F8] justify-center'>
      <div className='bg-white rounded-lg xl:h-[80vh] flex gap-6 flex-wrap justify-center items-center p-14 pt-6'>
        <div>
          <div>
            <p className='text-2xl font-bold'>
              Upload Video
            </p>
            <p className='text-md text-gray-400 mt-1'>
              Post a video to your account
            </p>
          </div>
          <div className='border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-10 w-[260px] h-[458px] p-10 cursor-pointer hover:border-yellow-300 hover:bg-gray-100'>
            {isLoding ? (
              <p className='text-center text-3xl text-yellow-400 font-semibold'>
                Uploading...
              </p>
            ) : (
              <div>
                {videoAsset ? (
                  <div className=' rounded-3xl w-[300px]  p-4 flex flex-col gap-6 justify-center items-center'>
                    <video
                      src={videoAsset.url}
                      loop
                      controls
                      className='rounded-xl h-[462px] mt-16 bg-black'
                    >
                    </video>
                    <div className='flex justify-between gap-20'>
                      <p className='text-lg'>{videoAsset.originalFilename}</p>
                      <button
                        type='button'
                        className=' rounded-full bg-gray-200 text-red-400 p-2 text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out'
                        onClick={() => setVideoAsset(undefined)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                ) : (
                  <label className='cursor-pointer'>
                    <div className='flex flex-col items-center justify-center h-full'>
                      <div className='flex flex-col items-center justify-center'>
                        <p className='font-bold text-xl'>
                          <FaCloudUploadAlt className='text-6xl text-gray-300' />
                        </p>
                        <p className='text-xl font-semibold'>
                          Upload Video
                        </p>
                      </div>
                      <p className='text-gray-400 text-center mt-10 text-sm leading-10'>
                        MP4 or WebM or Ogg <br />
                        720x1280 or higher <br />
                        Up to 10 minutes <br />
                        Less than 2GB
                      </p>
                      <p className='bg-[#ffde54] text-center mt-10 rounded text-white text-md font-medium p-2 w-52 outline-none'>
                        Select File
                      </p>
                      <input
                        type='file'
                        name='upload-video'
                        className='w-0 h-0'
                        onChange={uploadVideo}
                      />
                    </div>
                  </label>
                )}
              </div>
            )}
            {wrongFileType && (
              <p className='text-center text-xl text-red-400 font-semibold mt-4 w-[260px]'>
                Please select a video file
              </p>
            )}
          </div>
        </div>
          <div className='flex flex-col gap-3 pb-10'>
              <label className='text-md font-medium'>
                Caption
              </label>
              <input 
                type='text'
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="rounded lg:after:w-650 outline-none text-md border-2 border-gray-200 p-2"
              />
              <label className='text-md font-medium'>
                Choose a Category
              </label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
              >
                {topics.map((topic) => (
                  <option 
                    key={topic.name} 
                    className="outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                    value={topic.name}
                  >
                      {topic.name}
                  </option>
                ))}
              </select>
              <div className='flex gap-6 mt-10'>
                <button
                  onClick={handleDiscard}
                  type='button'
                  className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
                >
                  Discard
                </button>
                <button
                  onClick={handlePost}
                  type='button'
                  className="bg-[#ffde54] text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
                >
                  {savingPost ? 'Posting...' : 'Post'}
                </button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Upload;