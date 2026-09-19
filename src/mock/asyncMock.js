const productos = [
	{
		id: '1',
		name: 'Charizard',
		price: 18500,
		category: 'cartas-individuales',
		img: 'https://images.pokemontcg.io/base1/4_hires.png',
		stock: 3,
		description: 'Carta holográfica clásica de Charizard.',
	},
	{
		id: '2',
		name: 'Pikachu',
		price: 7500,
		category: 'cartas-individuales',
		img: 'https://images.pokemontcg.io/base1/58_hires.png',
		stock: 6,
		description: 'Carta clásica de Pikachu de tipo eléctrico.',
	},
	{
		id: '3',
		name: 'Mewtwo',
		price: 9200,
		category: 'cartas-individuales',
		img: 'https://images.pokemontcg.io/base1/10_hires.png',
		stock: 4,
		description: 'Carta holográfica de Mewtwo de tipo psíquico.',
	},
	{
		id: '4',
		name: 'Blastoise',
		price: 11500,
		category: 'cartas-individuales',
		img: 'https://images.pokemontcg.io/base1/2_hires.png',
		stock: 2,
		description: 'Carta holográfica clásica de Blastoise.',
	},
	{
		id: '5',
		name: 'Venusaur',
		price: 10500,
		category: 'cartas-individuales',
		img: 'https://images.pokemontcg.io/base1/15_hires.png',
		stock: 4,
		description: 'Carta holográfica clásica de Venusaur.',
	},
]

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(productos)
		}, 2000)
	})
}