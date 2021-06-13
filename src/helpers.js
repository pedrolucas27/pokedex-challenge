export const searchPokemon = (text, data) => {
	if(text){
		const TEXT_SEARCH = String(text).toUpperCase();
		let array = [];
		data.forEach((pokemon) => {
			if (String(pokemon.name).toUpperCase().includes(TEXT_SEARCH)) { 
				array.push(pokemon); 
			}
		})
		return array;	
	}else{
		return [];
	}
}

export const searchPokemonPerType = (type, data) => {
	if(type){
		let array = [];
		data.forEach((pokemon) => {
			if (pokemon.type[0] === type) { 
				array.push(pokemon); 
			}
		})

		return array;	
	}else{
		return [];
	}
}


export const getColorType = (type) => {
	const TYPE = type.toUpperCase();

	switch(TYPE){
		case 'GRASS':
			return '#7d8545';
		case 'POISON':
			return '#823ec3';
		case 'FIRE':
			return '#a8282b';
		case 'ICE':
			return '#659dba';
		case 'DRAGON':
			return '#d57931';
		case 'ROCK':
			return '#715c3d';
		case 'GROUND':
			return '#8a8331';
		case 'GHOST':
			return '#83417a';
		case 'PSYCHIC':
			return '#452a8d';
		case 'BUG':
			return '#2f9651';
		case 'FIGHTING':
			return '#b64d19';
		case 'ELECTRIC':
			return '#ba9a22';
		case 'WATER':
			return '#145eab';
		case 'FLYING':
			return '#277ba1';
		case 'NORMAL':
			return '#9b9f9b';
		default:
			return '#000';
	}
}