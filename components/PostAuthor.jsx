import React from 'react'
import Image from 'next/image'

export default function PostAuthor({ authorAvatar, authorName, authorJob }) {
  return (
    <div className="flex items-center mt-5">
    <Image src={authorAvatar} className="object-cover rounded-full" width="50" height="50" />
    <div className="ml-4">
      <h3>{authorName}</h3>
      <div className="text-white/60 text-sm mt-1">
        <p>{authorJob}</p>
      </div>
    </div>
  </div>
  )
}
