import { Action } from '@ngrx/store';


export enum TodoActionTypes {
    AgregarTodo = '[TODO] Agregar todo',
    ToggleTodo = '[TODO] Toggle todo',
    EditarTodo = '[TODO] Editar todo',
    EliminarTodo = '[TODO] Eliminar todo',
    ToggleAll = '[TODO] Toggle all',
    LimpiarCompletados = '[TODO] Limpiar Completados'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class AgregarTodoAction implements Action {
    readonly type = TodoActionTypes.AgregarTodo;

    constructor( public texto: string ) { }
}

export class ToggleTodoAction implements Action {
    readonly type = TodoActionTypes.ToggleTodo;

    constructor( public id: number ) { }
}

export class EditarTodoAction implements Action {
    readonly type = TodoActionTypes.EditarTodo;

    constructor( public id: number, public texto: string ) { }
}

export class EliminarTodoAction implements Action {
    readonly type = TodoActionTypes.EliminarTodo;

    constructor( public id: number ) { }
}

export class ToggleAllAction implements Action {
    readonly type = TodoActionTypes.ToggleAll;

    constructor( public allCompletado: boolean ) { }
}

export class LimpiarCompletadosAction implements Action {
    readonly type = TodoActionTypes.LimpiarCompletados;

    constructor() { }
}

export type TodoActions = AgregarTodoAction |
                          ToggleTodoAction |
                          EditarTodoAction |
                          EliminarTodoAction |
                          ToggleAllAction |
                          LimpiarCompletadosAction;
