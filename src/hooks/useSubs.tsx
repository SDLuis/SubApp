import { useState, useEffect } from 'react'
import { type Sub } from '../types'

interface AppState {
  subs: Sub[]
}

export default function useSubs (): any {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const INITIAL_STATE: Sub[] = [
    {
      nick: 'LouisTejeda',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=LouisTejeda',
      description: 'A veces hace de moderador'
    },
    {
      nick: 'MartaPerez',
      subMonths: 5,
      avatar: 'https://i.pravatar.cc/150?u=MartaPerez'
    },
    {
      nick: 'Laura',
      subMonths: 4,
      avatar: 'https://i.pravatar.cc/150?u=Laura',
      description: 'A veces hace de moderador'
    },
    {
      nick: 'Miguel',
      subMonths: 5,
      avatar: 'https://i.pravatar.cc/150?u=Miguel'
    }
  ]

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }
  return { handleNewSub, subs }
}
