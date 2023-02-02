export const fetchCat = async (
	text: string,
	color: string
): Promise<string> => {
	const response = await fetch(
		`https://cataas.com/cat/says/${text}?size=50&color=${color}`
	)

	const data = await response
	console.log('data', data)

	return data.url
}

// Rajouter les types pour les paramètres de la fonction
// Rajouter le type de retour de la fonction Promise<string>
