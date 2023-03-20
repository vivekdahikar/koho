import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { LayoutService } from '../../../service/layout/layout.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent {
  public MIXLayout: string = 'default';
  @HostBinding('@.disabled')
  public selectedValue: any;
  public primary_color: string = '#24695c';
  public secondary_color: string = '#ba895d';

  constructor(public layout: LayoutService) {}

  ngOnInit(): void {}

  applyColor() {
    document.documentElement.style.setProperty(
      '--theme-default',
      this.primary_color
    );
    document.documentElement.style.setProperty(
      '--theme-secondary',
      this.secondary_color
    );
    this.layout.config.color.primary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
  }
  resetColor() {
    document.documentElement.style.setProperty('--theme-default', '#24695c');
    document.documentElement.style.setProperty('--theme-secondary', '#ba895d');
    (<HTMLInputElement>document.getElementById('ColorPicker1')).value =
      '#24695c';
    (<HTMLInputElement>document.getElementById('ColorPicker2')).value =
      '#ba895d';
    this.layout.config.color.primary_color = '#24695c';
    this.layout.config.color.secondary_color = '#ba895d';
  }

  customizeMixLayout(val: any) {
    this.MIXLayout = val;
    this.layout.config.settings.layout_version = val;
    document.body?.classList.remove('light-only', 'dark-only');
    if (val === 'default') {
      document.body?.classList.add('light-only');
    } else {
      document.body?.classList.add('dark-only');
    }
  }
}
