import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getSmurf, createSmurf } from '../actions';

import Smurf from './Smurf.js';

const SmurfList = ({ getSmurf, smurfs, isFetching, error }) => {
	const [ smurfName, setSmurfName ] = useState('');
	const [ smurfAge, setSmurfAge ] = useState('');
	const [ smurfHeight, setSmurfHeight ] = useState('');

	useEffect(
		() => {
			getSmurf();
		},
		[ getSmurf ]
	);

	if (isFetching) {
		return <h3>Smurfs aren't home Yet!</h3>;
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		const newSmurf = {
			name: smurfName,
			age: smurfAge,
			height: smurfHeight
		};
		createSmurf(newSmurf);
		console.log('smurfs', smurfs);
	};

	const nameHandleChange = (event) => {
		setSmurfName(event.target.value);
	};

	const ageHandleChange = (event) => {
		setSmurfName(event.target.value);
	};

	const heightHandleChange = (event) => {
		setSmurfName(event.target.value);
	};

	return (
		<div>
			{/* // todo come back and look at why im getting this error in the map. */}
			<form onSubmit={handleSubmit}>
				<label>
					Smurf Name:
					<input type="text" name="name" onChange={nameHandleChange} />
					Smurf Age:
					<input type="text" name="age" onChange={ageHandleChange} />
					Smurf Height:
					<input type="text" name="height" onChange={heightHandleChange} />
				</label>
				<button type="submit">Add</button>
			</form>
			{smurfs.map((smurf) => {
				return <Smurf smurf={smurf} />;
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		isFetching: state.isFetching,
		error: state.error
	};
};

export default connect(mapStateToProps, { getSmurf, createSmurf })(SmurfList);
