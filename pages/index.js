import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import vector1 from '../public/vectors/vector1.jpg'
import React from 'react'
import Navbar from '../components/Navbar'
import {FacebookShareButton, FacebookIcon} from 'next-share'
import {LinkedinShareButton, LinkedinIcon} from 'next-share'

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
 
        <h1 className={styles.title}>
          Welcome to 👉 <a href="/services">programmers.tn</a>
        </h1>
        <h2 className={styles.second}>A startup that's dedicated to Tunisian students and Engineers. 👷</h2>
        <h3 className={styles.third}>❝Where the mentee comes to become the mentor.❞ 👨‍🏫</h3>
      </main>

      <footer className={styles.footer}>
      <p> Developed by @tn.programmers team and contributors.&nbsp;</p>
              <FacebookShareButton className={styles.social1}
  url={'https://facebook.com/programmers.tn'}
  quote={'our Facebook.'}
  hashtag={'#nextshare'}
>
  <FacebookIcon size={40} round />
</FacebookShareButton> &nbsp;
<LinkedinShareButton url={'https://linkedin.com/in/programmers.tn/'}>
  <LinkedinIcon size={40} round />
</LinkedinShareButton>
      </footer>
    </div>
  )
}
