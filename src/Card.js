import React from 'react';


const Card = ( {id, name, email}) => {

		return (

				<div className= 'bg-light-green tc dib br3 pas3 ma2 grow bw2 shadow-S'>
					<div>
						<img src={`https://robohash.org/${name}?200x200`} alt="robots"/>
					</div>
					<div>
						<h2>{name}</h2>
						<p>{email}</p>
					</div>
				</div>

			);

}

export default Card;