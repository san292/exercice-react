import { ChangeEvent, CSSProperties, FormEvent, useState } from 'react'
import { useForm } from './hooks/useForm'
import './App.css'

const styleForm: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	width: '300px',
	margin: '0 auto',
	padding: '20px',
	border: '1px solid #ccc',
	borderRadius: '5px',
}

const styleInput: CSSProperties = {
	display: 'block',
	width: '100%',
	padding: '5px',
	marginBottom: '10px',
	border: '1px solid #ccc',
	borderRadius: '5px',
}

function App() {
	const { formData, reset, onChange } = useForm({
		name: '',
		email: '',
		password: '',
	})

	// console.log('name', formData.name)
	// console.log('email', formData.email)
	// console.log('password', formData.password)
	console.log('formdata', formData)

	// const [formData, setFormData] = useState({
	//   name: '',
	//   email: '',
	//   password: '',
	// })

	// const {name, email, password} = formData

	//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	//     setFormData({
	//       ...formData,
	//       [e.target.name]: e.target.value,
	//     })
	//   }
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
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
						value={formData.name}
						onChange={onChange}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						style={styleInput}
						type='email'
						id='email'
						name='email'
						onChange={onChange}
						value={formData.email}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						style={styleInput}
						type='password'
						id='password'
						name='password'
						value={formData.password}
						onChange={onChange}
					/>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default App
