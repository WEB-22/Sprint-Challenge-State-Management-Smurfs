import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const POSTING_SMURFS_SUCCESS = 'POSTING_SMURFS';
export const POSTING_SMURFS_FAILURE = 'POSTING_SMURFS_FAILURE';

export const getSmurf = () => (dispatch) => {
	dispatch({ type: FETCHING_SMURFS_START });
	axios
		.get('http://localhost:3333/smurfs')
		.then((res) => {
			console.log(res);
			dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({
				type: FETCHING_SMURFS_FAILURE,
				payload: `${err.response.message} code: ${err.response.code}`
			});
		});
};

export const createSmurf = (newSmurf) => (dispatch) => {
	axios
		.post(`http://localhost:3333/smurfs`, { newSmurf })
		.then((res) => {
			console.log(res);
			console.log(res.data);
			dispatch({ type: POSTING_SMURFS_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({
				type: FETCHING_SMURFS_FAILURE,
				payload: `${err.response.message} code: ${err.response.code}`
			});
		});
};
