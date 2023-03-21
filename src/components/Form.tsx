import useNewSub from '../hooks/useNewSub'
import { Sub } from '../types'

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

export default function Form ({ onNewSub }: FormProps): JSX.Element {
  const [inputValues, dispatch] = useNewSub()

  const handleSubmit = (e: any): void => {
    e.preventDefault()
    onNewSub(inputValues)
    handleClear()
  }

  const handleClear = (): void => {
    dispatch({ type: 'clear' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): React.SetStateAction<any> => {
    const { name, value } = e.target
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 my-5'>
      <input value={inputValues.nick} onChange={handleChange} className='border border-gray-400 rounded-md p-2' type="text" name="nick" placeholder='nick' />
      <input value={inputValues.avatar} onChange={handleChange} className='border border-gray-400 rounded-md p-2' type="text" name="avatar" placeholder='avatar' />
      <input value={inputValues.subMonths} onChange={handleChange} className='border border-gray-400 rounded-md p-2' type="number" name="subMonths" placeholder='sub months' />
      <textarea value={inputValues.description} onChange={handleChange} className='border border-gray-400 rounded-md p-2' name="description" placeholder='description' />
      <button onClick={handleClear} type='button' className='py-2 px-4 bg-[#ccc] rounded-md font-medium'>Clear Form</button>
      <button type='submit' className='py-2 px-4 bg-[#09f] rounded-md font-medium'>Add Sub</button>
    </form>
  )
}
