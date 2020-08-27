import * as ActionTypes from './ActionTypes';

//modules
export const fetchModules = () => (dispatch) => {

    //dispatch(modulesLoading(true));

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: "em@intelli-next.com", password: 12345 })
    };

    return fetch('https://api.myintelli.net/v1/login', requestOptions)
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error' + response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(modules => dispatch(addModules(modules)))
    .catch(error => dispatch(ModulesFailed(error.message)))
}

export const dishesFailed = (errmess) => ({
    type: ActionTypes.MODULES_FAILED,
    payload: errmess
});

export const addModules = (modules) => ({
    type: ActionTypes.ADD_MODULES,
    payload: modules
});