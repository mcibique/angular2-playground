import { Component } from '@angular/core';
import './footer.component.scss';

@Component({
  selector: 'footer',
  template: require('./footer.component.html')
})
export class Footer {
  public copyright: string = '(c) 2016';
}
