import { Component } from '@angular/core';
import { buttons } from '../../../shared/data/button/button';

@Component({
  selector: 'app-default-style',
  templateUrl: './default-style.component.html',
  styleUrls: ['./default-style.component.scss'],
})
export class DefaultStyleComponent {
  btns = buttons.defaultButtons;
  btns2 = buttons.defaultButtons2;
  groupBtn = buttons.buttonsGroup;
  constructor() {}

  ngOnInit(): void {}
}
