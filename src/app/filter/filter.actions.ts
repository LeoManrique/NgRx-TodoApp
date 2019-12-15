import { Action } from '@ngrx/store';

export enum FilterActionTypes {
    SET_FILTRO = '[Filter] Set Filtro'
}

export type FiltrosValidos = 'todos' |
                             'completados' |
                             'pendientes';

export class SetFiltroAction implements Action {
    readonly type = FilterActionTypes.SET_FILTRO;

    constructor(public filtro: FiltrosValidos) { }
}

export type FilterActions = SetFiltroAction;
