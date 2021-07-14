import React from 'react'
import styles from '../styles/Home.module.css'
// Edit

export default function Navbar(){
	return (
		<div className={styles.container}>
			<nav className={styles.navbar}>
			<ul className={styles.list1}>
			<li className={styles.list2}> 
				<p> <a href="facebook.com">Home</a> <p>test</p></p>
				</li>
				<li>
				<p> <a href="twitter.com">Services</a></p>
				</li>
				</ul>
				</nav>
</div>
		)

}
