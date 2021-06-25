import React from 'react'
import Link from 'next/link'
import styles from './AddBtn.module.css'

export default function index() {
  return (
    <Link href='#'>
      <a className={styles.addBtn}>
        <span className={styles.plus}>+</span>
      </a>
    </Link>
  )
}
