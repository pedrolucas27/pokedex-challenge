import React from 'react';
import './button-type.css';

function ButtomTypePokemon(props){
	return(
		<div className='container-button'>
			<button 
				className='button-type-pokemon' 
				style={{ backgroundColor: `${props.colorTheme}` }}
				onClick={() => props.changeTypePokemons()}
			>
				{props.checkType && (<i className="fa fa-check-circle" style={{ margin: '5px' }}></i>)}
				{props.text.toUpperCase()}
			</button>
		</div>
	);
}

export default ButtomTypePokemon;