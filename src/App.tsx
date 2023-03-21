import React from 'react'
import useSubs from './hooks/useSubs'
import List from './components/List'
import Form from './components/Form'

function App (): React.ReactElement<HTMLElement> {
  const { subs, handleNewSub } = useSubs()
  return (
    <div className='App h-screen flex flex-col items-center p-10'>
      <p className='text-5xl font-black'>Sub List</p>
      <div className='flex gap-5'>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
      </div>
    </div>
  )
}

export default App
