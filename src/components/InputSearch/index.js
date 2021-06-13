import React from 'react';
import iconSearch from '../../assets/search.png';
import './input-search.css';

function InputSearch(props){
	return(
		<div className='container-input-search'>
			<input 
				type="text" 
				placeholder="Search a Pokemon"
				onChange={(e) => props.onChange(e.target.value)}
			/>
  			<button type="submit">
  				<img className='icon-search-img' src={iconSearch} alt="icon-search" />
  			</button>
		</div>
	);
}

export default InputSearch;