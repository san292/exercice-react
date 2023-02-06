import { FunctionTodo, TodoType } from '../reducers/todoTypes'

import TodoList from './TodoList'

type TodoAllType = {
	todos: TodoType[]
	deleteTask: FunctionTodo['deleteTask']
	updateTask: FunctionTodo['updateTask']
}

export default function TodoAllLists({
	todos,
	deleteTask,
	updateTask,
}: TodoAllType) {
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
					updateTask={updateTask}
				/>
			))}
		</div>
	)
}
