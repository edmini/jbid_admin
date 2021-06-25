import React from 'react'
import Image from 'next/image'
import styles from './Brand.module.css'

export default function index() {
  return (
    <div className={styles.container}>
      <Image className={styles.profileImg} src='/kkami_.jpg' alt='profile img' width={80} height={80} />
      <h1 className={styles.brand}>HOSANG SHIN</h1>
    </div>
  )
}
