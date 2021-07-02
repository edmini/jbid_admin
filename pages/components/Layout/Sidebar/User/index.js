import React from 'react'
import Image from 'next/image'
import styles from './User.module.css'

export default function index() {
  return (
    <div className={styles.userwrap}>
      <Image className={styles.profileImg} src='/kkami_.jpg' alt='profile img' width={80} height={80} />
      <h1 className={styles.user}>HOSANG SHIN</h1>
    </div>
  )
}
