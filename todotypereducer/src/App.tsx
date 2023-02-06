import React, { useReducer, useState } from 'react'
import './App.css'
import Input from './components/Input'
import TodoAllLists from './components/TodoAllLists'
import { todoReducer } from './reducers/todoReducer'
import { TodosType } from './reducers/todoTypes'

function App() {
	const [input, setIput] = useState('')

	const initialState: TodosType = {
		todos: [],
	}

	const [state, dispatch] = useReducer(todoReducer, initialState)

	const getInputvalue = (inputValue: string) => {
		setIput(inputValue)
	}

	const addTask = () => {
		dispatch({ type: '[Todo] - ADD TODO', text: input })
		getInputvalue('')
	}
	const deleteTask = (id: number) => {
		dispatch({ type: '[Todo] - DELETE TODO', id })
	}

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		addTask()
	}

	return (
		<div className='App'>
			<Input
				input={input}
				getInputValue={getInputvalue}
				handleSubmit={handleSubmit}
			/>
			<TodoAllLists
				todos={state.todos}
				deleteTask={deleteTask}
			/>
		</div>
	)
}

export default App
