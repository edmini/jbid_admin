import React, { useState } from 'react'
import Menu from './Menu'
import styles from './Menus.module.css'

export default function index() {
  const [ active, setActive ] = useState(true)
  const [menuInfo, setMenuInfo] = useState([
    {
      title : 'HOME',
      link : '/',
      asLink : '/',
      icon : '',
    },
    {
      title : '기술자수첩',
      link : '/Dashboard/Main',
      asLink : '/dashboard/main',
      icon : '',
    },
    {
      title : '자격증접수',
      link : '/',
      asLink : '/',
      icon : '',
    },
    {
      title : '설정',
      link : '/',
      asLink : '/',
      icon : '',
    },
    {
      title : 'empty',
      link : '/',
      asLink : '/',
      icon : '',
    },
  ])
  return (
    <nav className={styles.container}>
      {menuInfo.map((item, index)=>(
        <Menu key={index} menuData={item} />
      ))}
      {/* <Menu menu="기술자수첩" />
      <Menu menu="License" />
      <Menu menu="Setting" /> */}
    </nav>
  )
}
