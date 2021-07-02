import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Menu.module.css'

export default function index( { menuData } ) {

  const router = useRouter()

  return (
    <Link href={menuData.link} as={menuData.asLink}>
      <div className={menuData.link === router.asPath ? `${styles.menuwrap} ${styles.active}` : styles.menuwrap}>
        <h1 className={styles.menu}>{menuData.title}</h1>
      </div>
    </Link>
  )
}
