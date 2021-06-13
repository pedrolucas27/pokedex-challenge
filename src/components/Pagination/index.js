import React from 'react';
import './pagination.css';

function Pagination(props){
	const pageNumbers = []; 
	for(let i=1; i <= props.totalPages; i++){
		pageNumbers.push(i);
	}

	return(
		<div>
			<div className="pagination">
				<a href="!#">&laquo;</a>
				{
					pageNumbers.map((number) => (
						<a 
							onClick={() => props.onChangePage(number)} 
							key={number} 
							className={number === props.pageActive ? "active":""}
						>
							{number}
						</a>
					))
				}
			  	<a href="!#">&raquo;</a>
			</div>
		</div>
	);
}

export default Pagination;