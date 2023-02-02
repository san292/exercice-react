import { useState } from 'react'
import { useForm } from './hooks/useForm'
import './App.css'

const styleForm = {
	display: 'flex',
	flexDirection: 'column',
	width: '300px',
	margin: '0 auto',
	padding: '20px',
	border: '1px solid #ccc',
	borderRadius: '5px',
}

const styleInput = {
	display: 'block',
	width: '100%',
	padding: '5px',
	marginBottom: '10px',
	border: '1px solid #ccc',
	borderRadius: '5px',
}

function App() {
	const { values, handleInputChange, reset } = useForm({
		name: '',
		email: '',
		password: '',
	})
	console.log('name', values.name)
	console.log('value', values.email)
	console.log('password', values.password)

	// const [formData, setFormData] = useState({
	// 	name: 'man',
	// 	email: 'man@gmail.com',
	// 	password: 123456,
	// })

	// const { name, email, password } = formData

	// const onChange = ({ target }) => {
	// 	const { name, value } = target

	// 	setFormData({ ...formData, [name]: value })
	// }

	// const reset = () => {
	// 	setFormData({
	// 		name: '',
	// 		email: '',
	// 		password: '',
	// 	})
	// }

	const onSubmit = (e) => {
		e.preventDefault()
		reset()
	}

	return (
		<div className='App'>
			<form
				style={styleForm}
				onSubmit={onSubmit}>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						style={styleInput}
						type='text'
						id='name'
						name='name'
						value={values.name}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						style={styleInput}
						type='email'
						id='email'
						name='email'
						onChange={handleInputChange}
						value={values.email}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						style={styleInput}
						type='password'
						id='password'
						name='password'
						value={values.password}
						onChange={handleInputChange}
					/>
				</div>

				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default App
