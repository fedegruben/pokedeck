const productos = [
  {
    id: '1',
    name: 'Charizard',
    price: 18500,
    category: 'base-set',
    img: 'https://images.pokemontcg.io/base1/4_hires.png',
    stock: 3,
    description: 'Carta holográfica clásica de Charizard.',
  },
  {
    id: '2',
    name: 'Pikachu',
    price: 7500,
    category: 'base-set',
    img: 'https://images.pokemontcg.io/base1/58_hires.png',
    stock: 6,
    description: 'Carta clásica de Pikachu de tipo eléctrico.',
  },
  {
    id: '3',
    name: 'Mewtwo',
    price: 9200,
    category: 'base-set',
    img: 'https://images.pokemontcg.io/base1/10_hires.png',
    stock: 4,
    description: 'Carta holográfica de Mewtwo de tipo psíquico.',
  },
  {
    id: '4',
    name: 'Blastoise',
    price: 11500,
    category: 'base-set',
    img: 'https://images.pokemontcg.io/base1/2_hires.png',
    stock: 2,
    description: 'Carta holográfica clásica de Blastoise.',
  },
  {
    id: '5',
    name: 'Venusaur',
    price: 10500,
    category: 'base-set',
    img: 'https://images.pokemontcg.io/base1/15_hires.png',
    stock: 4,
    description: 'Carta holográfica clásica de Venusaur.',
  },
  {
    id: '6',
    name: 'Snorlax',
    price: 9800,
    category: 'jungle',
    img: 'https://images.pokemontcg.io/base2/11_hires.png',
    stock: 5,
    description: 'Carta holográfica de Snorlax de la colección Jungle.',
  },
  {
    id: '7',
    name: 'Vaporeon',
    price: 8700,
    category: 'jungle',
    img: 'https://images.pokemontcg.io/base2/12_hires.png',
    stock: 4,
    description: 'Carta holográfica de Vaporeon de la colección Jungle.',
  },
  {
    id: '8',
    name: 'Scyther',
    price: 8200,
    category: 'jungle',
    img: 'https://images.pokemontcg.io/base2/10_hires.png',
    stock: 6,
    description: 'Carta holográfica de Scyther de la colección Jungle.',
  },
  {
    id: '9',
    name: 'Dragonite',
    price: 12500,
    category: 'fossil',
    img: 'https://images.pokemontcg.io/base3/4_hires.png',
    stock: 3,
    description: 'Carta holográfica de Dragonite de la colección Fossil.',
  },
  {
    id: '10',
    name: 'Gengar',
    price: 10800,
    category: 'fossil',
    img: 'https://images.pokemontcg.io/base3/5_hires.png',
    stock: 4,
    description: 'Carta holográfica de Gengar de la colección Fossil.',
  },
  {
    id: '11',
    name: 'Lapras',
    price: 8900,
    category: 'fossil',
    img: 'https://images.pokemontcg.io/base3/10_hires.png',
    stock: 5,
    description: 'Carta holográfica de Lapras de la colección Fossil.',
  },
  {
    id: '12',
    name: 'Dark Charizard',
    price: 15800,
    category: 'team-rocket',
    img: 'https://images.pokemontcg.io/base5/4_hires.png',
    stock: 2,
    description: 'Carta holográfica de Dark Charizard de Team Rocket.',
  },
  {
    id: '13',
    name: 'Dark Blastoise',
    price: 14200,
    category: 'team-rocket',
    img: 'https://images.pokemontcg.io/base5/3_hires.png',
    stock: 3,
    description: 'Carta holográfica de Dark Blastoise de Team Rocket.',
  },
  {
    id: '14',
    name: 'Dark Dragonite',
    price: 13500,
    category: 'team-rocket',
    img: 'https://images.pokemontcg.io/base5/5_hires.png',
    stock: 4,
    description: 'Carta holográfica de Dark Dragonite de Team Rocket.',
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos)
    }, 2000)
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productoEncontrado = productos.find(
        (producto) => producto.id === productId,
      )

      if (productoEncontrado) {
        resolve(productoEncontrado)
      } else {
        reject(new Error('Producto no encontrado'))
      }
    }, 2000)
  })
}