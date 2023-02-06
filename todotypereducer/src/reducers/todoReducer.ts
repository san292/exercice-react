import TodoList from '../components/TodoList'
import { TodosType } from './todoTypes'
type TodoActionType =
	| { type: '[Todo] - ADD TODO'; text: string }
	| { type: '[Todo] - DELETE TODO'; id: number }
// | {type:'[Todo] - UPDATE TODO', id:number, text:string}

export const todoReducer = (
	state: TodosType,
	action: TodoActionType
): TodosType => {
	switch (action.type) {
		case '[Todo] - ADD TODO':
			const newTodo = [
				...state.todos,
				{ id: state.todos.length + 1, text: action.text },
			]
			return { ...state, todos: newTodo }

		case '[Todo] - DELETE TODO':
			const filterTodo = [...state.todos].filter(
				(todo) => todo.id !== action.id
			)
			return {
				...state,
				todos: filterTodo,
			}

		default:
			return state
	}
}
