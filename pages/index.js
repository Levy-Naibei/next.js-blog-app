import Head from 'next/head'
import Layout, { siteTitle } from './components/Layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am a user centric software engineer with profficiency in production grade software
        </p>
      </section>
      <Link href='/posts'>
        <a>Blog Posts</a>
      </Link>
    </Layout>
  )
}

export default Home;