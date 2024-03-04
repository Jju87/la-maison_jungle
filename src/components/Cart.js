import '../styles/Cart.css'
import { useState } from 'react'


function Cart({cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plant) => acc + plant.amount * plant.price, 0
	)

	return isOpen ? (
		<div className='lmj-cart'>
			<button 
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				FERMER
			</button>
			{cart.map(({ cover, name, price, amount }, index) => (
				<div className='selected-cart-items' key={`${cover}${name}-${index}`}>
					<img className='cover-cart' src={cover} /> {name} {price}€ x {amount}
				</div>
			))}
			<h2>Panier</h2>
			
			<h3> Total : {total}€</h3>

			<button className='lmj-cart-empty-button' 
					onClick={() => updateCart([])}
			>
				Vider le Panier
			</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
