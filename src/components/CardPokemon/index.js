import React from 'react';
import './card-pokemon.css';

function CardPokemon(props){
	return(
		<div className="flip-card" style={{ backgroundColor: `${props.colorTheme}` }}>
		  	<div className="flip-card-inner">
				<div className="flip-card-front" style={{ backgroundColor: `${props.colorTheme}` }}>
			      	<img className='img-pokemon' src={props.pokemon.img} alt="Image Pokemon" />
					<div className="container">
					    <h1>
						    <b>{props.pokemon.name}</b>
						</h1> 
					</div>
				</div>
				<div className="flip-card-back" style={{ backgroundColor: `${props.colorTheme}` }}>
				    <h3>{props.pokemon.name}</h3> 
				    <div className="container-line-card-back">
				    	<h4>Dados básicos</h4>
				    	<p>Altura: {props.pokemon.height}</p>
				    	<p>Peso: {props.pokemon.weight}</p>
				    </div>

				    <div className="container-line-card-back">
				    	<h4>Fraquezas</h4>
				    	{
				    		props.pokemon.weaknesses.map((i, index) => (
				    			<p key={index}>{i}</p>
				    		))
				    	}				    	
				    </div>

				    <div className="container-line-card-back">
				    	<h4>Evoluções anteriores</h4>
				    	{
				    		props.pokemon.prev_evolution ?
				    		props.pokemon?.prev_evolution?.map((evolution, index) => (
				    			<p key={index}>{evolution.name}</p>
				    		))
				    		:
				    		(<p>-</p>)
				    	}				    	
				    </div>

				    <div className="container-line-card-back">
				    	<h4>Próximas evoluções</h4>
				    	{
				    		props.pokemon.next_evolution ?
				    		props.pokemon?.next_evolution?.map((evolution, index) => (
				    			<p key={index}>{evolution.name}</p>
				    		))
				    		:
				    		(<p>-</p>)
				    	}				    	
				    </div>

				</div>
			</div>
		</div>
	);
}

export default CardPokemon;