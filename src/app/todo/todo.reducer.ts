import { TodoActions, TodoActionTypes } from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Hacer la web');
const todo2 = new Todo('Crear los servicios');

const initialState: Todo[] = [todo1, todo2];

export function todoReducer(state = initialState, action: TodoActions ): Todo[] {
    switch (action.type) {
        case TodoActionTypes.AgregarTodo: {
            return [ ...state, new Todo( action.texto ) ];
        }
        case TodoActionTypes.ToggleTodo: {
            return state.map( todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            });
        }
        case TodoActionTypes.EditarTodo: {
            return state.map( todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        texto: action.texto
                    };
                } else {
                    return todoEdit;
                }
            });
        }
        case TodoActionTypes.EliminarTodo: {
            return state.filter( todoEdit => {
                return todoEdit.id !== action.id;
            });
        }
        case TodoActionTypes.ToggleAll: {
            return state.map( todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.allCompletado
                };
            });
        }
        case TodoActionTypes.LimpiarCompletados: {
            return state.filter( todoEdit => {
                return !todoEdit.completado;
            });
        }

        default: {
            return state;
        }
    }
}