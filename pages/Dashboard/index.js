import React from 'react'
import Sidebar from './Sidebar'
import styles from './Dashboard.module.css'

export default function index() {

  return (
    <div className={styles.dashboard}>
      <Sidebar />
    </div>
  )
}
