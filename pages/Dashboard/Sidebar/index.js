import React from 'react'
import Brand from './Brand'
import Menus from './Menus'
import styles from './Sidebar.module.css'

export default function index() {
  return (
    <div className={styles.sidebar}>
      <Brand />
      <Menus />
    </div>
  )
}
