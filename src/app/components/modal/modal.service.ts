import { EventEmitter, Injectable } from '@angular/core';

import { ModalOptions } from './modal-options.model';

@Injectable()
export class ModalService {
  public onShow: EventEmitter<ModalOptions>;
  public onClose: EventEmitter<any>;

  constructor() {
    this.onShow = new EventEmitter<ModalOptions>();
    this.onClose = new EventEmitter();
  }

  public show(title: string, message: string, closeButtonText: string = '') {
    this.onShow.emit(new ModalOptions(title, message, closeButtonText));
  }

  public close() {
    this.onClose.emit({});
  }
}
