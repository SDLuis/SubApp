/* eslint-disable @typescript-eslint/consistent-type-imports */
import { useReducer } from 'react'
import { Sub } from '../types'

interface FormState {
  inputValues: Sub
}

type FormReducerAction = {
  type: 'change_value'
  payload: {
    inputName: string
    inputValue: string
  }
} | {
  type: 'clear'
}

const INITIAL_STATE = {
  nick: '',
  avatar: '',
  subMonths: 0,
  description: ''
}

const formReducer = (state: FormState['inputValues'], action: FormReducerAction): Sub => {
  switch (action.type) {
    case 'change_value':
      const { inputName, inputValue } = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    case 'clear':
      return INITIAL_STATE
  }
}

const useNewSub = (): [Sub, React.Dispatch<FormReducerAction>] => {
  return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSub
