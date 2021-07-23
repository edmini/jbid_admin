import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import TableBody from './TableBody'
import Search from './Search'
import styles from './DataList.module.css'

import { SheetContext } from '../../../../DataContext' 

export default function index() {

  const [search, setSearch] = useState('')
  const [month, setMonth] = useState(null)
  const router = useRouter()

  const selectMonth = (e) => {
    setMonth(e.target.value) 
  }

  const searchText = (e) => {
    setSearch(e.target.value)
  }

  const queryText = () =>{
    router.query.manager ? setSearch(router.query.manager) : setSearch('')
  }


  const dayLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const { datas, dispatch } = useContext(SheetContext)

  const resultData = router.query.category === 'eng' ? datas.engineers.values : datas.license.values
  
  let filteredData = []
  if(search){
    if(month){
      const startDate = new Date(`2021-${Number(month)+1}-1`)
      const endDate = new Date(`2021-${Number(month)+1}-${dayLength[Number(month)]}`)
      filteredData = resultData.filter((d) => d.manager === search).filter(function(item) {
        return new Date(item.incomeDate) >= startDate &&  new Date(item.incomeDate) <= endDate
      })
    }else{
      filteredData = resultData.filter((d) => d.manager === search)
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

  useEffect(()=>{
    queryText()
  }, [router.query.manager])


  return (
    <div>
      
      <Search searchValue={search} searchTextAction={searchText} searchMonthAction={selectMonth} dataLength={filteredData.length} selectMonth={month} />
      {datas.engineers.loading ?
      (<div className='loading'><h1>Loading....</h1></div>) :
      (<TableBody lists={filteredData} count={filteredData.length} />)}
      
    </div>
  )
}
