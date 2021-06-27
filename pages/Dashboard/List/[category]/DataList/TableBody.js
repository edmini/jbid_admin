import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Pagenation from './Pagenation'
import styles from './TableBody.module.css'
import {format} from 'date-fns'

const changeAmount = (amount) => {
  if(!amount){
    return
  }
  const result = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
  return (`${result} 원`)
}

export default function TableBody({ lists, count }) {

  const router = useRouter()

  const incomeTotal = lists.reduce((acc, cur) => acc + Number(cur.income), 0)
  const taxTotal = lists.reduce((acc, cur) => acc + Number(cur.tax), 0)

  const [listData, setListData] = useState([])
  const [page, setPage] = useState(
    {
      totalItem : 0,
      totalPage : 0,
      pageSize : 10,
      currentPage : 1,
    }
  )
    //useCallback 또는 useMemo 로 재 실행을 제거하는 방법 공부하기
  const pageSetup = () => {
    setPage(
      {
        ...page,
        totalItem : count,
        totalPage : Math.ceil(count/page.pageSize),
      }
    )
  }
    //useCallback 또는 useMemo 로 재 실행을 제거하는 방법 공부하기
  const handlePageChange = (selPage) => {
    setPage(
      {
        ...page,
        currentPage : selPage,
      }
    )
    pageLists(selPage)
  }
    //useCallback 또는 useMemo 로 재 실행을 제거하는 방법 공부하기
  const pageLists = (selPage) => {
    let listsPerPage = []
    if(selPage){
      listsPerPage = lists.slice((selPage-1)*page.pageSize, (page.pageSize*selPage))
    }else{
      listsPerPage = lists.slice(0, page.pageSize)
    }
    setListData(listsPerPage)
  }

  useEffect(()=>{
    pageSetup()
  }, [count])

  useEffect(()=>{
    pageLists()
  },[lists])

  // page.currentPage*(page.currentPage===1?1:page.pageSize)+index
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>no</th>
            <th>회사명</th>
            <th>이름</th>
            <th>분야</th>
            <th className={styles.tableDataAmount}>입금<span className={styles.subtitle}>부가세</span></th>
            <th>날짜</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
        {listData.map((item, index) => (
          <Link href={`/Dashboard/List/${router.query.category}/${(page.currentPage-1)*page.pageSize+index}`}>
          <tr key={index}>
            <td>{(page.currentPage-1)*page.pageSize+index+1}</td>
            <td>{item.company}</td>
            <td>{item.name}</td>
            <td>{item.kind}</td>
            <td className={styles.tableDataAmount}>{changeAmount(item.income)}<span className={styles.subtitle}>{changeAmount(item.tax)}</span></td>
            <td>{format(new Date(item.date), "yyyy-MM-dd")}</td>
            <td>{item.grade}</td>
          </tr>
          </Link>
        ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='2'>금액총액 : {changeAmount(incomeTotal)}</td>
            <td colSpan='2'>부가세총액 : {changeAmount(taxTotal)}</td>
            <td colSpan='2'>입금총액 : {changeAmount(incomeTotal + taxTotal)}</td>
          </tr>
        </tfoot>
      </table>

      <Pagenation page={page} selectedPage={handlePageChange}/>
    </>
  )
}
