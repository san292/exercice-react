export const Count = ({ state, dispatch }) => {
	return <>
  
  <h1>
    {state}
  </h1>
  
  <button onClick={()=> dispatch({type:'INCREMENT'})}>+ 1</button>

</>;
};
