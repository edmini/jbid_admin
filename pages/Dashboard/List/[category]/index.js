import React, { useState } from 'react'
// import Top from './Top'
import AddBtn from './AddBtn'
import DataList from './DataList'

export default function index() {

  return (
    <div className='container'>
      {/* <Top month='month' actionMonth='selectMonth' data='search' action='searchText' /> */}
      {/* <AddBtn /> */}
      <DataList />

    </div>
  )
}
