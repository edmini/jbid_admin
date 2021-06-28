import React, { useState } from 'react'
import Top from './Top'
import AddBtn from './AddBtn'
import DataList from './DataList'

export default function index() {

  const [search, setSearch] = useState('')
  const [month, setMonth] = useState(null)

  const searchText = (e) => {
    setSearch(e.target.value)
  }

  const selectMonth = (e) => {
    setMonth(e.target.value) 
  }

  return (
    <div className='container'>
      <Top month={month} actionMonth={selectMonth} data={search} action={searchText}/>
      {/* <AddBtn /> */}
      <DataList data={search} month={month}/>

    </div>
  )
}
