import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

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
      mentorship</p>


<p className={styles.about2}>We're a team of Technical experts in Web, SEO, Security... <br />Our team of experts will provide sufficient consults that will render a top notch Business.</p>






      </main>
      <footer className={styles.footer}>
      <p> Developed by @tn.programmers team and contributors. </p>
      </footer>
    </div>
  )
}
