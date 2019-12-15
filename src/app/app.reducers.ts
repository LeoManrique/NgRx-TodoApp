import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filterReducer } from './filter/filter.reducer';
import { FiltrosValidos } from './filter/filter.actions';

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filterReducer
}

export interface AppState {
    todos: Todo[];
    filtro: FiltrosValidos;
}
