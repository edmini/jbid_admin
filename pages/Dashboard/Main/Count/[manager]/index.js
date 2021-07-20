import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { SheetContext } from '../../../../DataContext'

export default function index() {

  const { datas, dispatch } = useContext(SheetContext)
  const router = useRouter()

  const tempEngFilter = datas.engineers.values.filter(value => value.manager === router.query.manager)
  console.log(tempEngFilter)

  return (
    <div className='container'>
      <ol>
      {tempEngFilter.map((value) => (
        <li>{value.name}</li>
      ))}
      </ol>
    </div>
  )
}
