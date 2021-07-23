import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { engListTitles, licListTitles } from '../../../../components/static/staticData'
import Pagenation from './Pagenation'
import styles from './TableBody.module.css'
import {format} from 'date-fns'

export default function TableBody({ lists, count }) {

  const router = useRouter()

  const [listData, setListData] = useState([])
  const [page, setPage] = useState({
      totalItem : 0,
      totalPage : 0,
      pageSize : 10,
      currentPage : 1,
    })

  const incomeTotal = lists.reduce((acc, cur) => acc + Number(cur.income), 0)
  const taxTotal = lists.reduce((acc, cur) => acc + Number(cur.tax), 0)

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

  const changeAmount = (amount) => {
    if(!amount){
      return
    }
    const result = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
    return (`${result} 원`)
  }

  const listTitles = router.query.category === 'eng' ? engListTitles : licListTitles

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
            {listTitles.map((list, index)=>(
              list.title==='입금' ?
                <th key={index} className={styles.tableDataAmount}>입금<span className={styles.subtitle}>부가세</span></th> :
                <th key={index}>{list.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {/* className={data.lastCheck ? null : styles.cancleItem }  수첩발급 : 검은색, 접수만 : 파란색, 접수도 안됨 : 빨간색*/ }
        {listData.map((data, index) => (
          <Link  key={index} href={`/Dashboard/List/${router.query.category}/${(page.currentPage-1)*page.pageSize+index}`}>
          <tr className={ data.compleCheck ? styles.compleItem : !data.regDate ? styles.nomalItem : !data.lastCheck ? styles.cancleItem : styles.regStyle } >
            {listTitles.map((list)=>(
              list.title === 'no' ?
                <td>{(page.currentPage-1)*page.pageSize+index+1}</td> :
              list.title === '입금' ?
                <td className={styles.tableDataAmount}>{changeAmount(data[list.item])}<span className={styles.subtitle}>{changeAmount(data.tax)}</span></td> :
              list.item === 'incomeDate' && data[list.item] ?
                <td>{format(new Date(data[list.item]), 'yyyy-MM-dd')}</td> :
                <td>{data[list.item]}</td>
            ))}
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
