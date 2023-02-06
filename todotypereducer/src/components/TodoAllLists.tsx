import { FunctionTodo, TodosType, TodoType } from '../reducers/todoTypes'

import TodoList from './TodoList'

type TodoAllType = {
	todos: TodoType[]
	deleteTask: FunctionTodo['deleteTask']
}

export default function TodoAllLists({ todos, deleteTask }: TodoAllType) {
	if (todos.length < 0) return <h1>aucune tache pour l'instant</h1>
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-around',
				flexDirection: 'column',
			}}>
			{todos.map((todo: TodoType) => (
				<TodoList
					key={todo.id}
					{...todo}
					deleteTask={deleteTask}
				/>
			))}
		</div>
	)
}
