import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
	getColorType, 
	searchPokemon, 
	searchPokemonPerType 
} from '../../helpers.js';
import CardPokemon from '../../components/CardPokemon';
import InputSearch from '../../components/InputSearch';
import ButtomTypePokemon from '../../components/ButtomTypePokemon';
import Pagination from '../../components/Pagination';
import SelectedTypePokemon from '../../components/SelectedTypePokemon';
import logoTitle from '../../assets/logo.png';
import pokeBall from '../../assets/pokeball.png';
import './view-main.css';
import '../../global.css';

function ViewMain(){
	const [dataTypesPokemon, setDataTypesPokemon] = useState([]);
	const [dataPokemon, setDataPokemon] = useState([]);
	const [dataPokemonAux, setDataPokemonAux] =  useState([]);
	const [pageCurrent, setPageCurrent] = useState(1);
	const ITENS_PER_PAGE = 20;
	
	useEffect(() => {
		axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
		.then((response) => {
			setDataPokemon(response.data.pokemon);
			setDataPokemonAux(response.data.pokemon);
			let arrayTypesPokemon = [];
			let aux = [];
			response.data.pokemon.forEach((pokemon) => {
				pokemon.type.forEach((type) => { 
					if(!aux.includes(type)){ 
						aux.push(type);
						arrayTypesPokemon.push({
							type: type,
							check: false
						})
					} 
				})
			})
			setDataTypesPokemon(arrayTypesPokemon);
		})
		.catch((error) => {
			console.log("ERROOOOOOOOOO");
			console.log(error);
		})
	}, []);

	const indexOfLastPokemon = pageCurrent * ITENS_PER_PAGE;
	const indexOfFirstPokemon = indexOfLastPokemon - ITENS_PER_PAGE;
	const currentPokemons = dataPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);
	const totalPages = Math.ceil(dataPokemon.length / ITENS_PER_PAGE);

	const search = (text) => {
		if(text){
			const dataSearch = searchPokemon(text, dataPokemon);
			setDataPokemon(dataSearch);
		}else{
			setDataPokemon(dataPokemonAux)
		}
	}

	const filterPokemonsPerType = (type) => {
		if(type !== 'tools'){
			const typeSelected = dataTypesPokemon.filter((i) => i.type === type)[0];
			const typeUpdate = { type: type, check: !typeSelected.check };
			let newArrayType = [];
			dataTypesPokemon.forEach((item) => {
				if (item.type === type) { newArrayType.push(typeUpdate) }
				else { newArrayType.push({ type: item.type, check: false }) }
			})
			setDataTypesPokemon(newArrayType);
			if(typeUpdate.check){
				const pokemonsType = searchPokemonPerType(type, dataPokemonAux);
				setDataPokemon(pokemonsType);
			}else{
				setDataPokemon(dataPokemonAux);
			}
		}else{
			setDataPokemon(dataPokemonAux);
		}
		
	}


	return(
		<div className='main'>
			<section className='flex-container header'>
				<div className='item'>
					<img className='title-pokemon-img' src={logoTitle} alt="Logo"/>
				</div>
				<div className='item'>
					<p className='sub-title-1'>
						Uma Pokedex completa criada em React JS
					</p>	
				</div>
				<div className='item'>
					<InputSearch onChange={(value) => search(value)}/>
				</div>
				<div className='item'>
					<img className='icon-poke-ball' src={pokeBall} alt="Poker Bola" />
					<p className='sub-title-2'>
						Filter by Type
					</p>
				</div>
				<hr />
			</section>
			<section className='flex-container wrap'>
				{
					dataTypesPokemon.map((item, index) => (
						<ButtomTypePokemon 
							key={index} 
							text={item.type}
							checkType={item.check}
							colorTheme={getColorType(item.type)}
							changeTypePokemons={() => filterPokemonsPerType(item.type)}
						/>
					))
				}
				<SelectedTypePokemon
					options={dataTypesPokemon}
					selectType={(type) => filterPokemonsPerType(type)}
				/>
				<hr />
			</section>
			<section className='flex-container wrap'>
				{
					currentPokemons.map((pokemon) => (
						<CardPokemon 
							key={pokemon.id} 
							pokemon={pokemon}
							colorTheme={getColorType(pokemon.type[0])}

						/>
					))
				}
			</section>
			<section className='flex-container'>
				<Pagination 
					totalPages={totalPages}
					pageActive={pageCurrent}
					onChangePage={(page) => setPageCurrent(page)}
				/>
			</section>
		</div>
	);
}

export default ViewMain;