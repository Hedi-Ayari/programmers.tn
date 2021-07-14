import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
      About Us ❓</p> <br /> <br />
      <p className={styles.aboutintro}><b>Who are we 👥 ?</b></p>
      <p className={styles.about2}>We're a bunch of Passionate developers and Engineers held together to initiate This startup. <br />
       We've build the largest most active programming based community in Tunisia and here we are providing a set of free/premium Services.</p>
<p className={styles.aboutintro}><b>The Team 🏆</b></p>
<p className={styles.about2}>There will be a team get to know page. For Now you can check <a href="/contact">Contact.</a></p>

    
      </main>

   
      <footer className={styles.footer}>
      <p> Developed by @tn.programmers team and contributors. </p>
      </footer>
    </div>
  )
}
