import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { SheetContext } from '../../../../DataContext'

export default function index() {

  const [result, setResult] = useState()
  const [menus, setMenus] = useState([])
  const { datas, dispatch } = useContext(SheetContext)
  const router = useRouter()

  const setResultData = () => {
    if(router.query.category === 'eng'){
      setResult(datas.engineers.values[router.query.id])
      if(datas){
        setMenus(Object.keys(datas.engineers.values[router.query.id]))
      }
    }else{
      setResult(datas.license.values[router.query.id])
      if(datas){
        setMenus(Object.keys(datas.license.values[router.query.id]))
      }
    }
  }

  useEffect(()=>{
    setResultData()
  },[datas])

  return (
    <div className='container'>
      {result ? (
        menus.map((menu, index) => (
          <div key={index}>
            <h3>{`${menu} : ${result[menu]}`}</h3>
          </div>
        ))
      ) : null}

    </div>
  )
}
