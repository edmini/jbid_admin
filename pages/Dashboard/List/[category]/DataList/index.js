import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import TableBody from './TableBody'
import styles from './DataList.module.css'

import { SheetContext } from '../../../../DataContext' 

export default function index({data, month}) {
  const dayLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const { datas, dispatch } = useContext(SheetContext)

  const router = useRouter()
  const resultData = router.query.category === 'eng' ? datas.engineers.values : datas.license.values
  
  let filteredData = []
  if(data){
    if(month){
      const startDate = new Date(`2021-${Number(month)+1}-1`)
      const endDate = new Date(`2021-${Number(month)+1}-${dayLength[Number(month)]}`)
      filteredData = resultData.filter((d) => d.manager === data).filter(function(item) {
        return new Date(item.incomeDate) >= startDate &&  new Date(item.incomeDate) <= endDate
      })
    }else{
      filteredData = resultData.filter((d) => d.manager === data)
    }
  }else{
    if(month){
      const startDate = new Date(`2021-${Number(month)+1}-1`)
      const endDate = new Date(`2021-${Number(month)+1}-${dayLength[Number(month)]}`)
      filteredData = resultData.filter(function(item) {
        return new Date(item.incomeDate) >= startDate &&  new Date(item.incomeDate) <= endDate
      })
    }else{
      filteredData = resultData
    }
  }

  // console.log(Object.keys(datas.engineers.values[0]))

  return (
    <div>
      <h1 className={styles.title}>{data} {month ? Number(month)+1 : "전체"}월<span className={styles.count}>{filteredData.length}</span></h1>
      <TableBody lists={filteredData} count={filteredData.length} />
    </div>
  )
}
