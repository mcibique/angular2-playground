import { Component, OnDestroy, OnInit } from '@angular/core';

import { ModalOptions } from './modal-options.model';
import { ModalService } from './modal.service';

import './modal.component.scss';

@Component({
  selector: 'modal',
  template: require('./modal.component.html')
})
export class ModalComponent implements OnInit, OnDestroy {
  private title: string = '';
  private message: string = '';
  private show: boolean = false;
  private showSub: any;
  private closeSub: any;

  constructor(private modalService: ModalService) {}

  public ngOnInit() {
    this.showSub = this.modalService.onShow.subscribe(({ title, message }: ModalOptions) => {
      this.title = title;
      this.message = message;
      this.show = true;
    });

    this.closeSub = this.modalService.onClose.subscribe(() => {
      this.reset();
    });
  }

  public ngOnDestroy() {
    this.showSub.unsubscribe();
    this.closeSub.unsubscribe();
  }

  public close() {
    this.modalService.close();
  }

  private reset() {
    this.title = '';
    this.message = '';
    this.show = false;
  }
}
