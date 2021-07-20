import React, { useContext } from 'react'
import Count from './Count'
import { SheetContext } from '../../DataContext'
import { managers } from '../../components/static/staticData'

export default function index() {

  const { datas, dispatch } = useContext(SheetContext)

  managers.map((manager) => {
    const tempEngManager = datas.engineers.values.filter(value => value.manager === manager.name)
    manager.engCount = tempEngManager.length
    const tempLicManager = datas.license.values.filter(value => value.manager === manager.name)
    manager.licCount = tempLicManager.length
  })

  return (
    <div className='container'>
      {managers.map((manager, index) => (
        <Count key={index} count={manager} />
      ))}
    </div>
  )
}
