import React from 'react'
import Image from 'next/image'
import styles from './Top.module.css'

export default function index({data, action, month, actionMonth}) {

  return (
    <section className={styles.top}>
      <Image className={styles.profileImg} src='/kkami_.jpg' alt='profile img' width={45} height={45} />
      <h1 className={styles.messageIcon}>hosang ...</h1>
    </section>
  )
}
