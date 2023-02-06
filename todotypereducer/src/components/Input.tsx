import React, { ChangeEvent, FormEventHandler } from 'react'
type PropsType = {
	input: string
	getInputValue: (input: string) => void
	handleSubmit: FormEventHandler<HTMLFormElement>
}

export default function Input({
	input,
	getInputValue,
	handleSubmit,
}: PropsType) {
	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		getInputValue(e.target.value)
	}

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '50rem',
				}}>
				<input
					style={{
						margin: '.3rem',
						width: '15rem',
						padding: '.3rem',
						borderRadius: '20px',
						color: '#fff',
					}}
					type='text'
					value={input}
					onChange={handleChange}
					placeholder='vauillez entrez votre tâche svp!'
				/>
				<button
					type='submit'
					style={{ borderRadius: '20px', padding: '.4rem' }}>
					Submit
				</button>
			</form>
		</div>
	)
}
