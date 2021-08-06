import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from './components/Layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

export const getStaticProps = async() => {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData }
  }
}

const Home = ({ allPostsData }) => {
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
      {/* loop thru data and render html */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              {title} <br/>
              {id} <br/>
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Home;