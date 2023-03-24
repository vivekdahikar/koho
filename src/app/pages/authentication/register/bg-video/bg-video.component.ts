import { Component } from '@angular/core';

@Component({
  selector: 'app-bg-video',
  templateUrl: './bg-video.component.html',
  styleUrls: ['./bg-video.component.scss'],
})
export class BgVideoComponent {
  public show: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  showPassword() {
    this.show = !this.show;
  }
}
