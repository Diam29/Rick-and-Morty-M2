import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER } from "./actions-types";



export function addFavorite(character) {
    return async function (dispatch) {
        try {
            await fetch('http://localhost:3001/rickandmorty/fav', {
                method: 'POST',
                body: JSON.stringify(character),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json())
                .then((data) => dispatch({
                    type: ADD_FAVORITE,
                    payload: data,
                }))

        } catch (error) {
            console.log(error);
        }
    }
}

export function deleteFavorite(id) {
    return async function (dispatch) {
        try {
            await fetch(`http://localhost:3001/rickandmorty/fav/${id}`, {
                method: 'DELETE'
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) dispatch({
                        type: DELETE_FAVORITE,
                        payload: id,
                    })
                })
        } catch (error) {
            console.log(error);
        }
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER, payload: gender
    }
}


export const orderCards = (id) => {
    return {
        type: ORDER, payload: id
    }
}


