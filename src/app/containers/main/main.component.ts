import { Component } from '@angular/core';

import { ModalComponent } from '../../components/modal/modal.component';
import { ModalService } from  '../../components/modal/modal.service';
import { Navigation } from './navigation/navigation.component';

import './main.component.scss';

@Component({
  selector: 'main',
  directives: [ Navigation, ModalComponent ],
  providers: [ ModalService ],
  template: require('./main.component.html')
})
export class Main {}
