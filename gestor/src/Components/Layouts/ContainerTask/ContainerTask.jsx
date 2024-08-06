import React from 'react'
import './ContainerTask.css'

export const ContainerTask = ({children}) => {
  return (
    <div>
        <ul className='container-tasks'>
            {children}
        </ul>
    </div>
  )
}
