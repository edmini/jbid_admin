import React from 'react'
import User from './User'
import Menus from './Menus'

export default function index() {
  return (
    <>
      <div className='sidebar'>
        <User />
        <Menus />
      </div>
    </>
  )
}
