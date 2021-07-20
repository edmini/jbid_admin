import React from 'react'
import Link from 'next/link'
import styles from './Count.module.css'

export default function index( { count } ) {

  return (
    <div className={styles.countWrap}>
      <h1>{count.name}</h1>
      <Link href={`/Dashboard/List/eng?manager=${count.name}`}>
        <a>
          <p>기술자 : <span>{count.engCount}</span></p>
        </a>
      </Link>
      <Link href={`/Dashboard/List/lic?manager=${count.name}`}>
        <a>
          <p>자격증 : <span>{count.licCount}</span></p>
        </a>
      </Link>
    </div>
  )
}
