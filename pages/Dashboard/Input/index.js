import React, { useContext, useState } from 'react'
// import { SheetContext } from '../../DataContext'
import {format} from 'date-fns'

export default function index() {

  // const { datas, dispatch } = useContext(SheetContext)

  // let titles = []
  // if(datas.engineers.values.length > 0){
  //   titles = Object.keys(datas.engineers.values[0])
  //   console.log(titles)
  // }

  const today = format(new Date(), 'yyyy-MM-dd')
  
  // const [inputValue, setInputValue] = useState(
  //   {
  //     date : 
  //     {
  //       title : '날짜',
  //       name : 'date',
  //       type : 'date',
  //       value : today,
  //     },
  //     name :
  //     {
  //       title : '이름',
  //       name : 'name',
  //       type : 'text',
  //       value : '',
  //     },
  //     cellPhone :
  //     {
  //       title : '휴대폰',
  //       name : 'cellPhone',
  //       type : 'text',
  //       value : '',
  //     },
  //     position :
  //     {
  //       title : '직위',
  //       name : 'position',
  //       type : 'text',
  //       value : '',
  //     },
  //     accountID :
  //     {
  //       title : '주민등록번호',
  //       name : 'accountID',
  //       type : 'text',
  //       value : '',
  //     },
  //     email :
  //     {
  //       title : '이메일',
  //       name : 'email',
  //       type : 'text',
  //       value : '',
  //     },
  //     manager :
  //     {
  //       title : '담당자',
  //       name : 'manager',
  //       type : 'text',
  //       value : '',
  //     },
  //     company :
  //     {
  //       title : '회사명',
  //       name : 'company',
  //       type : 'text',
  //       value : '',
  //     },
  //     phone :
  //     {
  //       title : '전화번호',
  //       name : 'phone',
  //       type : 'text',
  //       value : '',
  //     },
  //     fax :
  //     {
  //       title : '팩스',
  //       name : 'fax',
  //       type : 'text',
  //       value : '',
  //     },
  //     kind :
  //     {
  //       title : '분야',
  //       name : 'kind',
  //       type : 'text',
  //       value : '',
  //     },
  //     grade :
  //     {
  //       title : '등급',
  //       name : 'grade',
  //       type : 'text',
  //       value : '',
  //     },
  //     course :
  //     {
  //       title : '코스',
  //       name : 'course',
  //       type : 'text',
  //       value : '',
  //     },
  //     incomeDate :
  //     {
  //       title : '입금일',
  //       name : 'incomeDate',
  //       type : 'date',
  //       value : '',
  //     },
  //     income :
  //     {
  //       title : '입금액',
  //       name : 'income',
  //       type : 'text',
  //       value : '',
  //     },
  //     taxCheck :
  //     {
  //       title : '계산서발급',
  //       name : 'taxCheck',
  //       type : 'checkbox',
  //       value : '',
  //     },
  //     tax :
  //     {
  //       title : '부가세',
  //       name : 'tax',
  //       type : 'text',
  //       value : '',
  //     },
  //     taxDate :
  //     {
  //       title : '계산서발급일',
  //       name : 'taxDate',
  //       type : 'date',
  //       value : '',
  //     },
  //     product :
  //     {
  //       title : '제품',
  //       name : 'product',
  //       type : 'text',
  //       value : '',
  //     },
  //     location :
  //     {
  //       title : '위치',
  //       name : 'lacation',
  //       type : 'text',
  //       value : '',
  //     },
  //     regDate :
  //     {
  //       title : '등록일',
  //       name : 'regDate',
  //       type : 'date',
  //       value : '',
  //     },
  //     compDate :
  //     {
  //       title : '완료일',
  //       name : 'compDate',
  //       type : 'date',
  //       value : '',
  //     },
  //     license :
  //     {
  //       title : '자격증',
  //       name : 'license',
  //       type : 'text',
  //       value : '',
  //     },
  //     memo :
  //     {
  //       title : '메모',
  //       name : 'memo',
  //       type : 'textarea',
  //       value : '',
  //     },
  //     compleCheck :
  //     {
  //       title : '완료확인',
  //       name : 'compleCheck',
  //       type : 'checkbox',
  //         value : '',
  //     },}
  // )

  const tts = [
    {
      title : '날짜',
      name : 'date',
      type : 'date',
      value : today,
    },
    {
      title : '이름',
      name : 'name',
      type : 'text',
      value : '',
    },
    {
      title : '휴대폰',
      name : 'cellPhone',
      type : 'text',
      value : '',
    },
    {
      title : '직위',
      name : 'position',
      type : 'text',
      value : '',
    },
    {
      title : '주민등록번호',
      name : 'accountID',
      type : 'text',
      value : '',
    },
    {
      title : '이메일',
      name : 'email',
      type : 'text',
      value : '',
    },
    {
      title : '담당자',
      name : 'manager',
      type : 'text',
      value : '',
    },
    {
      title : '회사명',
      name : 'company',
      type : 'text',
      value : '',
    },
    {
      title : '전화번호',
      name : 'phone',
      type : 'text',
      value : '',
    },
    {
      title : '팩스',
      name : 'fax',
      type : 'text',
      value : '',
    },
    {
      title : '분야',
      name : 'kind',
      type : 'text',
      value : '',
    },
    {
      title : '등급',
      name : 'grade',
      type : 'text',
      value : '',
    },
    {
      title : '코스',
      name : 'course',
      type : 'text',
      value : '',
    },
    {
      title : '입금일',
      name : 'incomeDate',
      type : 'date',
      value : '',
    },
    {
      title : '입금액',
      name : 'income',
      type : 'text',
      value : '',
    },
    {
      title : '계산서발급',
      name : 'taxCheck',
      type : 'checkbox',
      value : '',
    },
    {
      title : '부가세',
      name : 'tax',
      type : 'text',
      value : '',
    },
    {
      title : '계산서발급일',
      name : 'taxDate',
      type : 'date',
      value : '',
    },
    {
      title : '제품',
      name : 'product',
      type : 'text',
      value : '',
    },
    {
      title : '위치',
      name : 'lacation',
      type : 'text',
      value : '',
    },
    {
      title : '등록일',
      name : 'regDate',
      type : 'date',
      value : '',
    },
    {
      title : '완료일',
      name : 'compDate',
      type : 'date',
      value : '',
    },
    {
      title : '자격증',
      name : 'license',
      type : 'text',
      value : '',
    },
    {
      title : '메모',
      name : 'memo',
      type : 'textarea',
      value : '',
    },
    {
      title : '완료확인',
      name : 'compleCheck',
      type : 'checkbox',
      value : '',
    },
  ]

  const formHandle = (e) => {
    e.preventDefault()
    console.log(e)
  }

  const handleChange = (e) => {
    const targetName = e.target.name
    console.log("1 : ", targetName)
    // console.log("2 : ", inputValue.targetName)
    const value = e.target.value
    console.log("3 : ", value)
    // setInputValue(targetName.value = value)
  }

  return (
    <>
      <form onClick={formHandle} >
        <div className='container'>
          <div className='inputGroup'>
            <ul>
              {tts.map((menu, index) => (
                <li key={index}>
                  <div>
                    <label htmlFor={menu.name}>{menu.title}</label>
                    <input
                    type={menu.type}
                    id={menu.name}
                    name={menu.name}
                    placeholder={`${menu.title}...`}
                    defaultValue={menu.value}
                    onChange={handleChange}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <input type='submit' value='저장'/>
          </div>
        </div>
      </form>
    </>
  )
}
