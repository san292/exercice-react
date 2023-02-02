export interface CountState {
    count: number;
}


export type CountActionType =
| { type: '[Count] - Increment' | '[Count] - Decrement' | '[Count] - Reset' }



export const CountReducer = (state: CountState, action: CountActionType): CountState => {

      switch (action.type) {
      case '[Count] - Increment':
        return {
...state,count:state.count + 1
}
    case '[Count] - Decrement':
        return {
...state,count:state.count - 1
        }
    case '[Count] - Reset':
        return {
...state,count:0
        }

        default:
        return state;
                          }
};