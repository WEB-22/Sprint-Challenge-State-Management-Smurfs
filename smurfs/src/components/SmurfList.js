import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getSmurf } from '../actions';

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

	const nameHandleChange = (event) => {
		setSmurfName(event.target.value);
		console.log(smurfName);
	};

	const ageHandleChange = (event) => {
		setSmurfName(event.target.value);
		console.log(smurfName);
	};

	const heightHandleChange = (event) => {
		setSmurfName(event.target.value);
		console.log(smurfName);
	};

	return (
		<div>
			{/* // todo come back and look at why im getting this error in the map. */}
			<form>
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

export default connect(mapStateToProps, { getSmurf })(SmurfList);
