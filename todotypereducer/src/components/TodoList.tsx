import React from 'react'
import { FunctionTodo } from '../reducers/todoTypes'

type PropsType = {
	id: number
	text: string
	deleteTask: FunctionTodo['deleteTask']
}

export default function TodoList({ id, text, deleteTask }: PropsType) {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				width: '20rem',
				height: '2rem',
				border: '.3px solid',
				background: 'gray',
				padding: '.3rem',
				margin: '.2rem',
			}}>
			<h3> {text}</h3>
			<button style={{ margin: '.2rem', padding: '.2rem' }}>
				Update
			</button>
			<button onClick={() => deleteTask(id)}>x</button>
		</div>
	)
}
