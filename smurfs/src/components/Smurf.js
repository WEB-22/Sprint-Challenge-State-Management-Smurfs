import React from 'react';

const Smurf = ({ smurf }) => {
	return (
		<div>
			<div>
				<h2>name: {smurf.name}</h2>
				<h2>age: {smurf.age}</h2>
				<h2>height: {smurf.height}</h2>
			</div>
		</div>
	);
};

export default Smurf;
