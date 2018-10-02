import React from 'react';


const SearcBox = ({Searchfield, SearchChange}) =>
{

	return(
			<div className = 'pa2'>
				<input 
				className = 'pa3 ba b--green bg-lightest-blue' 
				type = "Search" 
				placeholder = "Search Robots" 
				onChange= {SearchChange}/>
			</div>
		);

}

export default SearcBox;