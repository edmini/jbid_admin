import React, { useState } from 'react'
import Top from './Top'
import AddBtn from './AddBtn'
import DataList from './DataList'
import styles from './Main.module.css'

export default function index() {

  // const today = new Date()
  // const thisMonth = today.getMonth()
  const [search, setSearch] = useState('')
  const [month, setMonth] = useState(null)

  const searchText = (e) => {
    setSearch(e.target.value)
  }

  const selectMonth = (e) => {
    setMonth(e.target.value) 
  }

  return (
    <div className={styles.container}>
      <Top month={month} actionMonth={selectMonth} data={search} action={searchText}/>
      {/* <AddBtn /> */}
      <DataList data={search} month={month}/>

    </div>
  )
}
