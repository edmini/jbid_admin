import React, { useState } from 'react'
import Menu from './Menu'
import styles from './Menus.module.css'

export default function index() {
  const [menuInfo, setMenuInfo] = useState([
    {
      title : 'HOME',
      link : '/',
      asLink : '/',
      icon : '',
    },
    {
      title : 'Dashboard',
      link : '/Dashboard/Main',
      asLink : '/Dashboard/Main',
      icon : '',
    },
    {
      title : '기술자수첩',
      link : '/Dashboard/List/eng',
      asLink : '/Dashboard/List/eng',
      icon : '',
    },
    {
      title : '자격증접수',
      link : '/Dashboard/List/lic',
      asLink : '/Dashboard/List/lic',
      icon : '',
    },
    {
      title : '입력',
      link : '/Dashboard/Input',
      asLink : '/Dashboard/Input',
      icon : '',
    },
    {
      title : '설정',
      link : '/',
      asLink : '/',
      icon : '',
    },
    // {
    //   title : 'empty',
    //   link : '/',
    //   asLink : '/',
    //   icon : '',
    // },
  ])
  return (
    <nav className={styles.user}>
      {menuInfo.map((item, index)=>(
        <Menu key={index} menuData={item} />
      ))}
    </nav>
  )
}
