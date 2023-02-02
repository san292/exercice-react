import { useReducer, useState } from 'react'
import { Count } from './components/Count'
import { reducerCount } from './reducers/reducerCount'

import './App.css'
const initialState = { count: 0 }

function App() {
	const [state, dispatch] = useReducer(reducerCount, initialState)
	return (
		<div className='App'>
			<h1>React Reducer</h1>
			<Count
				state={state}
				dispatch={dispatch}
			/>
		</div>
	)
}

export default App

// export function WithOutReducer (){
// const [count, setCount] = useState(0);

// return (
//   <div className='App'>
//     <h1>React Reducer</h1>
//     <h1>{count}</h1>
//     <button onClick={()=> setCount(count + 1)}>+ 1</button>
//     <button onClick={()=> setCount(0)}>Reset</button>
//     <button onClick={()=> setCount(count - 1)}>- 1</button>
//   </div>
// );
// }
