import React from 'react'
import { useId } from 'react'
import { forwardRef } from 'react'

function Select({
  options,
  label,
  className = "",
  ...props
},ref) {
  const id=useId();
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className={`$className`}></label>}
    <select 
      id={id} 
      className={`px-3 py-2 bg-white text-black rounded-lg outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 
      {...props} 
      ref={ref}>
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    </div>
  )
}

export default React.forwardRef(Select)