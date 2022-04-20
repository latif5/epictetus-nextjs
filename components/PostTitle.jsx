import React from 'react'
import Link from 'next/link'

export default function PostTitle({ category, date, title, center }) {
  return (
    <div>
      <div className={`flex ${center ? 'justify-center' : ''} items-center text-white/60 space-x-4`}>
        <div className="uppercase">
          {category}
        </div>
        <span>&bull;</span>
        <div>
          {date}
        </div>
      </div>
      <h2 className={`text-2xl mt-4 ${center ? 'text-center' : ''}`}>
        <Link href="/detail"><a>{title}</a></Link>
      </h2>
    </div>
  )
}
