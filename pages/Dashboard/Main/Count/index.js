import React from 'react'
import styles from './Count.module.css'

export default function index( { count } ) {
  return (
    <div className={styles.countWrap}>
      <h1>{count.name}</h1>
      <p>기술자 : <span>{count.engCount}</span></p>
      <p>자격증 : <span>{count.licCount}</span></p>
    </div>
  )
}
