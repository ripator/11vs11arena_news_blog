import React from 'react';
import { Author } from '../interfaces';

const Author = ({ author }: {author: Author}) => {
  return (
    <div className='tex-center mt-20 mb-8 p-8 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14'>
         <img 
         alt={author.name}
         height='80px'
         width='80px'
         className='align-middle rounded-full'
         src={author.photo.url}
      />
      </div>
      <h3 className='text-white my-4 text-xl font-bold font-sans'>
         {author.name}
      </h3>
    </div>
  )
}

export default Author