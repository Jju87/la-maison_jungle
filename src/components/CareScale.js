import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityOfLightOrWater = {
	1: "de très peu",
	2: "d'un peu",
	3: "de beaucoup"
}


function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	function scaleType() {
		// const = scaleType =
		// careType === 'light' ? (
		// 	<img src={Sun} alt='sun-icon' />
		// ) : (
		// 	<img src={Water} alt='water-icon' />
		// )
		if (careType === 'light'){
			return <img src={Sun} alt='sun-icon' />	
			} else if (careType === 'water'){
				return <img src={Water} alt='water-icon' />
			}
		}
	return (
		<div> {range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span 
					// ci dessous, on ajoute un event onMouseEnter pour afficher la quantité de lumière ou d'eau nécessaire à la plante en
					// fonction de la valeur de scaleValue et de careType
						onMouseEnter={()=>{
							if(careType === 'water'){
								console.log(`Cette plante a besoin ${quantityOfLightOrWater[scaleValue]} d'eau`)
							}else if (careType === 'light'){
								console.log(`Cette plante a besoin ${quantityOfLightOrWater[scaleValue]} de lumière`)
							}
				
						} }
						key={rangeElem.toString()}
					>
				{scaleType()} </span>
				) : null
			)}
		</div>
	)
}

export default CareScale
