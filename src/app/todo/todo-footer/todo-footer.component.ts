import { Component, OnInit } from '@angular/core';
import { FiltrosValidos, SetFiltroAction } from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { LimpiarCompletadosAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: FiltrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: FiltrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  cambiarFiltro(nuevoFiltro: FiltrosValidos) {
    const accion = new SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  limpiarCompletados() {
    const accion = new LimpiarCompletadosAction();
    this.store.dispatch(accion);
  }

}
