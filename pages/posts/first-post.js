import Link from 'next/link'

const FirstPost = () => {
    return (
        <>
            <h2>First blog post</h2>
            <h3>
               <Link href='/'><a>Back to Home page</a></Link>
            </h3>
        </>
    )
}

export default FirstPost;