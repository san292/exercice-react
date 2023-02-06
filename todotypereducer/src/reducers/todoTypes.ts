export type TodosType = {
	[x: string]: any
	todos: TodoType[]
}

export type TodoType = {
	id: number
	text: string
}
export type FunctionTodo = {
	deleteTask: (id: number) => void
}
