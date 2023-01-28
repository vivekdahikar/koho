import { Component } from '@angular/core';
import * as fileData from '../../../shared/data/components/dashboard/file-manager/file-manager';

@Component({
  selector: 'app-file-items',
  templateUrl: './file-items.component.html',
  styleUrls: ['./file-items.component.scss'],
})
export class FileItemsComponent {
  // data
  public Quickdata = fileData.Quickdata;
  public FoldersData = fileData.FoldersData;
  public FilesData = fileData.FilesData;

  constructor() {}

  ngOnInit(): void {}
  active = 1;
}
