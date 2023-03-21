import React from 'react'
import { type Sub } from '../types'

interface Props {
  subs: Sub[]
}

export default function List ({ subs }: Props): JSX.Element {
  return (
    <div className='grid grid-cols-3 gap-10 my-5'>
    {
      subs.map((sub) => {
        return (
          <div key={sub.nick} className='flex flex-col items-center p-3 rounded-md border border-solid border-gray-600'>
            <img className='w-20 h-20 rounded-full object-cover' src={sub.avatar} alt={`Imagen de ${sub.nick}`} />
            <h1 className='flex items-center gap-2'>{sub.nick} <p className='text-xs'>({sub.subMonths} Months)</p></h1>
            <p>{sub.description?.substring(0, 100)}</p>
          </div>
        )
      })
    }
  </div>
  )
}
