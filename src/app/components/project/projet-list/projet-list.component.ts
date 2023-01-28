import { Component } from '@angular/core';
import * as projectData from '../../../shared/data/components/dashboard/project/project-list';
import { Project } from '../../../shared/data/interface/product-list';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.scss'],
})
export class ProjetListComponent {
  active = 1;
  public openTab: string = 'All';

  // data
  public ProjectLists = projectData.ProjectList;
  listUser: Project[] = [];
  filterData: any[] = this.ProjectLists;

  constructor() {}

  // data filter ALL DONE DOING
  public tabbed(val: string) {
    this.openTab = val;

    this.filterData =
      val !== 'All'
        ? this.ProjectLists.filter((data: any) => {
            return data.badge == this.openTab ? true : false;
          })
        : this.ProjectLists;
  }

  ngOnInit(): void {}
}
