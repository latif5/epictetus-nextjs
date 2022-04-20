import React from 'react'
import PostTitle from '@/components/PostTitle'
import PostAuthor from '@/components/PostAuthor'

export default function InfoPost({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob
}) {
  return (
    <>
      <PostTitle 
        category={category} 
        date={date} 
        title={title}
      />
      <p className="text-white/60 mt-5 w-10/12 ">{shortDescription} </p>
      <PostAuthor 
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </>
  )
}
