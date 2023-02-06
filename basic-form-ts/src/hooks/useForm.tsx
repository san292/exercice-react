import { ChangeEvent, useState } from 'react'

type initialStateType = {
	name: string
	email: string
	password: string
}

export const useForm = (initialState: initialStateType) => {
	const [formData, setFormData] = useState(initialState)

	const reset = () => setFormData(initialState)

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}
	return {
		...formData,
		formData,
		reset,
		onChange,
	}
}
