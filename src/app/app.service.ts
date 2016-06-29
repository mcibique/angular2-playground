import { Injectable } from '@angular/core';
import { HmrState } from 'angular2-hmr';

@Injectable()
export class AppState {
  @HmrState() private _state = { };

  get state() {
    return this._state = this._clone(this._state);
  }

  private _clone(object) {
    // simple object clone
    return JSON.parse(JSON.stringify(object));
  }
}
