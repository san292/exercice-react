import { useReducer } from 'react'
import { CountReducer } from './reducers/reducerCount'
import { initialState } from './reducers/initialState'
import { Count } from './components/Count'
import './App.css'

function App() {
const [state,dispatch] = useReducer(CountReducer,initialState)

  return (
    <div className="App">
      <Count state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App
