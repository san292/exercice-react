export const Count = ({ state, dispatch }) => {
	return (
		<>
			<h1>count : {state.count}</h1>

			<button onClick={() => dispatch({ type: 'INCREMENT' })}>
				{' '}
				+ 1
			</button>

			<button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>

			<button onClick={() => dispatch({ type: 'DECREMENT' })}>
				{' '}
				- 1
			</button>
		</>
	)
}
