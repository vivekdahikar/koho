import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { LayoutService } from '../../service/layout/layout.service';
import { NavService } from '../../service/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public dark: boolean =
    this.layout.config.settings.layout_version == 'dark-only' ? true : false;

  collapseSidebar: boolean = true;
  constructor(
    private navServices: NavService,
    public layout: LayoutService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  sidebarToggle() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }

  layoutToggle() {
    this.document.body.classList.toggle('dark-only');
  }
  languageToggle() {
    this.navServices.language = !this.navServices.language;
  }
  searchToggle() {
    this.navServices.search = true;
  }

  ngOnInit(): void {}
}
