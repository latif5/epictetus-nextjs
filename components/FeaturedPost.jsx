import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import InfoPost from '@/components/InfoPost'

export default function FeaturedPost() {
  return (
    <article className="container mx-auto md:-mx-4">
      <div className="md:flex lg:items-center">
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
          <Link href="/detail"><a>
            <Image src="/img/tezos-FT1ePvQ1HlE-unsplash.jpg" className="rounded-xl w-full object-cover z-0" layout="responsive" width="800px" height="450px" />
          </a></Link>
        </div>
        <div className="px-4 lg:w-4/12 md:w-5/12 w-full md:px-6 md:my-0 my-6">
          <InfoPost
          category="UI Design"
          date="April 20, 2022"
          title="Understanding color theory: the color wheel and finding complementary colors"
          shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
          authorAvatar="/author-1.png"
          authorName="Leslei Alexander"
          authorJob="UI Designer"
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10 px-4 md:hidden" />
    </article>
  )
}
