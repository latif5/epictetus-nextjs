import Layout from '@/layout/Layout'
import Head from 'next/head'
import FeaturedPost from '@/components/FeaturedPost'
import CardPost from '@/components/CardPost'
import Container from '@/components/Container'
import dataPosts from '../utils/posts.json'
import { useState } from 'react'

export default function Home() {
  const [posts, setPost] = useState(dataPosts)

  return (
    <Layout>
      <Head>
        <title>Epictetus</title>
      </Head>
      <Container>
        <FeaturedPost />
        <div className="flex md:-mx-4 flex-wrap mt-4">
          {posts.map(post => (
            <div className="md:w-4/12 w-full px-4 py-6" key={post.id}>
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}
