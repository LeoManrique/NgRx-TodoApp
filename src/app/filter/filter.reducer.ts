import { FiltrosValidos, FilterActionTypes, FilterActions } from './filter.actions';

const initialState: FiltrosValidos = 'todos';

export function filterReducer(state = initialState, action: FilterActions ): FiltrosValidos {
    switch (action.type) {
        case FilterActionTypes.SET_FILTRO: {
            return action.filtro;
        }
        default: {
            return state;
        }
    }
}