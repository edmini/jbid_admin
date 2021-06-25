import React from 'react'
import Link from 'next/link'
import styles from './Menu.module.css'

export default function index( { menuData } ) {
  return (
    <Link href={menuData.link} as={menuData.asLink}>
      <div className={menuData.active ? `${styles.container} ${styles.active}` : styles.container}>
        <h1 className={styles.menu}>{menuData.title}</h1>
      </div>
    </Link>
  )
}
