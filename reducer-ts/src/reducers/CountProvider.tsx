import { FC, PropsWithChildren, useReducer } from 'react'
import { initialState } from './initialState'
import { NameContext } from './NameContext'
import { CountReducer } from './reducerCount'

export interface NameState {
	Property: boolean
}

const Name_INITIAL_STATE: NameState = {
	Property: false,
}
export const NameProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(CountReducer, initialState)

	return (
		<NameContext.Provider value={{ ...state, dispatch }}>
			{children}
		</NameContext.Provider>
	)
}
