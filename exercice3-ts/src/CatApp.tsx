import React, { useState } from 'react';
import './App.css';
import { fecthCat } from './utils/catApi';

function CatApp() {
	const [imgCat, setImgCat] = useState('');
	const [value, setValue] = useState({
		text: '',
		color: '',
	});

	const onChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fecthCat(value.text, value.color).then((data) => {
			setImgCat(data);
		});

	
	};

	return (
		<div className='App'>
			Hello les petits chats !!!!!
			<form onSubmit={handleSubmit}>
				<input type='text' value={value.text} name='text' onChange={onChange} />
				<input
					type='text'
					value={value.color}
					name='color'
					onChange={onChange}
				/>
				<button type='submit'>Submit</button>
			</form>
			<img src={imgCat} alt='cat name' />
		</div>
	);
}

export default CatApp;
