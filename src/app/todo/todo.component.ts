import { Component, OnInit } from '@angular/core';
import { ToggleAllAction } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  allCompletado = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll() {
    this.allCompletado = !this.allCompletado;

    const accion = new ToggleAllAction(this.allCompletado);
    this.store.dispatch(accion);
  }

}
