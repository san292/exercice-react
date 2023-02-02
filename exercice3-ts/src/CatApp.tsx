import React, { useState } from 'react'
import './App.css'
import { fetchCat } from './utils/catApi'

function CatApp() {
	const [imgCat, setImgCat] = useState('')
	const [value, setValue] = useState({
		text: '',
		color: '',
	})
	console.log('imagCar', imgCat)

	const onChange = (e: { target: { name: any; value: any } }) => {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		fetchCat(value.text, value.color).then((data) => {
			console.log('datacat', data)

			setImgCat(data)
		})
	}

	return (
		<div className='App'>
			Hello les petits chats !!!!!
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={value.text}
					name='text'
					onChange={onChange}
				/>
				<input
					type='text'
					value={value.color}
					name='color'
					onChange={onChange}
				/>
				<button type='submit'>Submit</button>
			</form>
			<img
				src={imgCat}
				alt='cat name'
			/>
		</div>
	)
}

export default CatApp
