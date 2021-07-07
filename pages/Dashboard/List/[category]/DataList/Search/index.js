import React from 'react'
import styles from './Search.module.css'

export default function index({ searchValue, searchTextAction, searchMonthAction, dataLength, selectMonth }) {
  const monthArray = [0,1,2,3,4,5,6,7,8,9,10,11]

  return (
    <div className={styles.searchWrap}>
      <input className={styles.inputText} type='text' placeholder='Search...' value={searchValue} onChange={searchTextAction}/>
      <select className={styles.selector} defaultValue={''} onChange={searchMonthAction}>
        <option value=''>all</option>
        {monthArray.map((item, index) => (
          <option key={index} value={index}> {item+1}월 </option>
          ))}        
      </select>
      <h1 className={styles.title}>{searchValue} {selectMonth ? Number(selectMonth)+1 : "전체"}월<span className={styles.count}>{dataLength}</span></h1>
    </div>
  )
}
