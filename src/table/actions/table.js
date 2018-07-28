import fetchJSON from '../../data/fetchJSON';

export function fetchSuccess (response) {
    return {
        type: 'FETCH_DATA',
        payload: response
    }
}

export function fetch () {
    return {
        type: 'FETCH_TABLE'
    }
}

export function fetchAsync() {
    return function (dispatch) {
        console.log('first step');
        return fetchJSON.then(data => {
            console.log(data);
            return dispatch(fetchSuccess(data));
        })
    }
}