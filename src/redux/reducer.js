import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from './actions-types';



const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.allCharacters, actions.payload],
                allCharacters: [...state.allCharacters, actions.payload]
            };
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(characteres => characteres.id !== actions.payload)
            }
        case FILTER:

            const filterChar = state.allCharacters.filter(char => char.gender === actions.payload)
            return {
                ...state, myFavorites: filterChar
            }
        case ORDER:
            return {
                ...state,
                myFavorites: actions.payload === 'Ascendente'
                    ? state.allCharacters.sort((a, b) => a.id - b.id)
                    : state.allCharacters.sort((a, b) => b.id - a.id)
            }

        default:
            return { ...state }
    }
}

export default reducer;