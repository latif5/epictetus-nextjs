import React from 'react'
import InfoPost from '@/components/InfoPost'
import Image from 'next/image'
import Link from 'next/link'

export default function CardPost({thumbnail, ...infoPost}) {
  return (
    <article>
      <Link href="/detail"><a>
        <Image className="w-full rounded-xl object-cover pb-5" src={thumbnail} layout="responsive" width="600px" height="400px"/>
      </a></Link>
      <InfoPost {...infoPost} />
    </article>
  )
}
