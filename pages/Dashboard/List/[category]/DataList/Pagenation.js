import React from 'react'
import _ from 'lodash'
import styles from './Pagenation.module.css'

export default function Pagenation({ page, selectedPage }) {

  const pages = _.range(1, page.totalPage + 1)

  return (
    <div className='pagenation'>
      <ul>
        <li onClick={()=>{selectedPage(1)}}>{'<<'}</li>
        <li onClick={()=>{selectedPage(page.currentPage > 1 ? page.currentPage - 1 : 1)}}>{'<'}</li>
        {pages.map((item, index) => (
          <li className={page.currentPage === item ? 'active' : null} key={index} onClick={()=>{selectedPage(item)}}>{item}</li>
        ))}
        <li onClick={()=>{selectedPage(page.currentPage < page.totalPage ? page.currentPage + 1 : pages.length)}}>{'>'}</li>
        <li onClick={()=>{selectedPage(pages.length)}}>{'>>'}</li>
      </ul>
    </div>
  )
}
