import React from 'react'


export default function SelectDate({ month, actionMonth }) {
  const monthArray = [0,1,2,3,4,5,6,7,8,9,10,11]

  return (
    <div>
      <select defaultValue={''} onChange={actionMonth}>
        <option value=''>all</option>
        {monthArray.map((item, index) => (
          <option key={index} value={index}> {item+1}월 </option>
        ))}        
      </select>
    </div>
  )
}
