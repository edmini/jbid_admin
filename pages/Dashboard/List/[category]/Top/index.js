import React from 'react'
import Image from 'next/image'
import Search from './Search'
import SelectDate from './SelectDate'
import styles from './Top.module.css'

export default function index({data, action, month, actionMonth}) {

  return (
    <section className={styles.container}>
      <Search data={data} action={action}/>
      <SelectDate month={month} actionMonth={actionMonth} />
      <Image className={styles.profileImg} src='/kkami_.jpg' alt='profile img' width={145} height={145} />
      <h1 className={styles.messageIcon}>hosang ...</h1>
    </section>
  )
}
