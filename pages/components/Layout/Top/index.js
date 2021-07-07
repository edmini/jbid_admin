import React from 'react'
import Image from 'next/image'
import styles from './Top.module.css'

export default function index({data, action, month, actionMonth}) {

  return (
    <section className={styles.top}>
      <div className={styles.nameWrap}>
        <h1 className={styles.messageIcon}>HOSANG SHIN</h1>
        <p>admin</p>
      </div>
      <Image className={styles.profileImg} src='/kkami_.jpg' alt='profile img' width={45} height={45} />
    </section>
  )
}
