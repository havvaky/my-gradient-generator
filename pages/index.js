import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cool CSS Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/colors">
            <a>Color Generator</a>
          </Link>
        </div>
      </main>


    </div>
  )
}
