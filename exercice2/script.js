// const children = 'hola animal'
// const className = 'container'
// const className = 'container'
// const props = { children, className }

const Pet = (props) => {
	return React.createElement('div', {}, [
		React.createElement('h1', {}, props.name),
		React.createElement('h2', {}, props.animal),
		React.createElement('h3', {}, props.breed),
	])
}

const App = () => {
	return React.createElement(
		'div',
		{},
		React.createElement(Pet, {
			name: 'luna',
			animal: 'cheval',
			breed: 'Arabian',
		})
	)
}
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))

// const App = () => {

// };

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));
// const App = <div className='container' >Holla</div>

// const Pet = (props) => {
// 	return React.createElement('div', {}, [
// 		React.createElement('h1', {}, props.name),
// 		React.createElement('h2', {}, props.animal),
// 		React.createElement('h2', {}, props.breed),
// 	])
// }

// const App = () => {
// 	return React.createElement('div', {}, [
// 		React.createElement(
// 			Pet,
// 			{ name: 'Luna', animal: 'Dog', breed: 'Havanese' },
// 			null
// 		),
// 		React.createElement(
// 			Pet,
// 			{ name: 'mike', animal: 'Dog', breed: 'Husky' },
// 			null
// 		),
// 	])
// }

// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)
// root.render(React.createElement(App))
