import Head from 'next/head';
import Link from 'next/link';
import styles from  '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninja" />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum, ipsa ipsam itaque in soluta commodi tempore numquam, nisi maxime assumenda possimus, laboriosam expedita ab velit similique a impedit vel.
        </p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninjas Listing</a></Link>
      </div>
    </>
  )
}
