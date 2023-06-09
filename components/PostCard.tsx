import React from 'react';
import { Post } from '../interfaces';
import Link from 'next/link';
import moment from 'moment';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
          <img 
            src={post.featuredImage1.url} 
            alt={post.title} 
            className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg' 
          />
      </div>
      <h1 className='transition duration-200 text-center mb-4 cursor-pointer hover:text-blue-600 text-3xl font-semibold px-2'>
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-center mb-4 w-full'>
        <div className='font-medium text-gray-700'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span >
            Published: {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
        {post.excerpt}
      </p>
      <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
            Continue Reading
            </span>
        </Link> 
      </div>
    </div>
  )
}

export default PostCard