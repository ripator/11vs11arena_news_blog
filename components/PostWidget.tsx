import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { Category, Post } from '../interfaces';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }: {categories?: string[], slug?: string}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
      .then((res) => setRelatedPosts(res));
    } else {
      getRecentPosts()
      .then((res) => setRelatedPosts(res));
    }
  }, [slug]);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? "You May Like" : "Recent"}
      </h3>
      {relatedPosts.map((post: Post) => (
        <Link 
          key={post.title} 
          href={`/post/${post.slug}`} 
          className='flex lg:flex-col sm:flex-row items-start w-full mb-4 cursor-pointer'>
            <>
              <div className='flex-none'>
                <img 
                  alt={post.title}
                  height='180px'
                  width='180px'
                  src={post.featuredImage1.url}
                />
              </div>
              <div className='flex-grow mt-2 sm:ml-3'>
                <p className='text-gray-700 font-xs font-semibold hover:text-blue-500'>
                  {post.title}
                </p>
              </div>
            </>
        </Link>
      ))}
    </div>
  )
}

export default PostWidget