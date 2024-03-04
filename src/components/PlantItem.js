import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName){
	console.log("tu as cliqué sur une plante nommée " + plantName )
}


function PlantItem({ id, cover, name, water, light, updateCart}) {
	return (
		<li className='lmj-plant-item' 
			
		>
			<img 
				onClick={()=>handleClick(name)}
				key={id}
				className='lmj-plant-item-cover' 
				src={cover} 
				alt={`${name} cover`} 
			/>
			{name}
			<div>
				
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
