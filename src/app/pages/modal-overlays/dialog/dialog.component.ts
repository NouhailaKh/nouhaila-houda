import {Component, OnInit} from '@angular/core';
import {MaterialRaw} from './dialog';
import {MaterialRawService} from '../../../@core/mock/dialog.service';

@Component({
  selector: 'ngx-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class DialogComponent implements  OnInit {
  constructor(private materialrawService: MaterialRawService ) {
  }
  ngOnInit(): void {
  }
  public save() {
    this.materialrawService.save() ;
  }

  get materialraw(): MaterialRaw {
    return this.materialrawService.materialraw ;
  }

}
