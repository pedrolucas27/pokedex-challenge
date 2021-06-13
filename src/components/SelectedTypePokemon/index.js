import React from 'react';

import './selected-type.css';

function SelectedTypePokemon(props){
	return(

		<select className="custom-select" onChange={(e) => props.selectType(e.target.value)}>
			<option value="tools">Todos</option>
		    {
			 	props.options.map((item, index) => (
				   	<option key={index} value={item.type}>
						{item.type}
		    		</option>
		    	))
		    }
		</select>		
	)
}

export default SelectedTypePokemon;