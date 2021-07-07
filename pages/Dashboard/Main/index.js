import React, { useContext } from 'react'
import Count from './Count'
import { SheetContext } from '../../DataContext'

export default function index() {

  const { datas, dispatch } = useContext(SheetContext)

  const managers = [
    {
      name : '최영식',
      engCount : 0,
      licCount : 0,
    },
    {
      name : '신의섭',
      engCount : 0,
      licCount : 0,
    },
    {
      name : '김은희',
      engCount : 0,
      licCount : 0,
    },
    {
      name : '이미연',
      engCount : 0,
      licCount : 0,
    },
    {
      name : '지용현',
      engCount : 0,
      licCount : 0,
    },
    {
      name : '김명서',
      engCount : 0,
      licCount : 0,
    },
    {
      name : '장은영',
      engCount : 0,
      licCount : 0,
    },
    {
      name : '미래건설',
      engCount : 0,
      licCount : 0,
    },
  ]

  managers.map((m) => {
    const tempEngManager = datas.engineers.values.filter(value => value.manager === m.name)
    m.engCount = tempEngManager.length
    const tempLicManager = datas.license.values.filter(value => value.manager === m.name)
    m.licCount = tempLicManager.length
  })

  return (
    <div className='container'>
      {managers.map((m, index) => (
        <Count key={index} count={m} />
      ))}
    </div>
  )
}
