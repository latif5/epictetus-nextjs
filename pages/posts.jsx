import React from 'react'
import Head from 'next/head'
import Layout from '@/layout/Layout'
import Container from '@/components/Container'
import CardPost from '@/components/CardPost'
import SectionHeader from '@/components/SectionHeader'
import dataPosts from '../utils/posts.json'
import { useState } from 'react'

export default function posts() {
  const [posts, setPosts] = useState(dataPosts)

  return (
    <Layout>
      <Head>
        <title>Post - Epictetus</title>
      </Head>
      <Container>
      <SectionHeader>UI Design</SectionHeader>
        <div className="flex flex-wrap mt-4">
          {!posts.length ? (
            <div  className="text-center w-full h-96">
              <h2 className="text-6xl"> No Results Found 😥</h2>
              <p className="text-xl text-white/60 md:w-6/12 w-full mx-auto">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
            </div>
          ) : (posts.map(post => (
            <div className="md:w-4/12 w-full px-4 py-6" key={post.id}>
              <CardPost {...post} />
            </div>
          )))}
        </div>
      </Container>
    </Layout>
  )
}
