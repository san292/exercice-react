import { CountState,CountActionType } from "../reducers/reducerCount"



type Props = {
 state:CountState,
 dispatch:React.Dispatch<CountActionType>
}



export const Count = ({state,dispatch}:Props) => {
  return (
    <div>
        <h1>{state.count}</h1>

        <button onClick={()=>{dispatch({type:"[Count] - Increment"})}}>+1</button>
        <button onClick={()=>{dispatch({type:"[Count] - Reset"})}}>0</button>
        <button onClick={()=>{dispatch({type:"[Count] - Decrement"})}}>-1</button>

    </div>
  )
}