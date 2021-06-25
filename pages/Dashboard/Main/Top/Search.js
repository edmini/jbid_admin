import React from 'react'
import styles from './Search.module.css'

export default function Search({data, action}) {

  return (
    <div>
      <input className={styles.inputText} type='text' placeholder='Search...' value={data} onChange={action}/>
    </div>
  )
}
