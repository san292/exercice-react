export const reducerCount = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
	
		default:
			return state;
	}
};
