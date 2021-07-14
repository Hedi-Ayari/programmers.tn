import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import vector1 from '../public/vectors/vector1.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>programmers.tn</title>
        <meta name="description" content="programmers.tn" />
        <link rel="icon" href="/logo.png" />
      </Head>
   <h3 className={styles.bar1}><a href="/">Home</a>&nbsp; &nbsp; &nbsp;<a href="/about">About</a>&nbsp; &nbsp; &nbsp;<a href="/services">Services</a>&nbsp; &nbsp; &nbsp;<a href="/contact">Contact</a></h3>

      <main className={styles.main}>
      <p className={styles.title}>
      Contact</p> <br /> <br />

  <Image src={vector1} alt="Picture of the author" width={550} height={350} />

      </main>

   
      <footer className={styles.footer}>
      <p> Developed by @tn.programmers team and contributors. </p>
      </footer>
    </div>
  )
}
