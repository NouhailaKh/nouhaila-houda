import {Component, OnInit} from '@angular/core';
import {MaterialRaw} from './dialog';
import {MaterialRawService} from '../../../@core/mock/dialog.service';

@Component({
  selector: 'ngx-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class DialogComponent implements  OnInit {
  msg:any="";
  constructor(private materialrawService: MaterialRawService ) {
  }
  ngOnInit(): void {
  }
  public save() {
    this.materialrawService.save() ;
    this.msg = "Record is successfully added..... "; 
  }

  get materialraw(): MaterialRaw {
    return this.materialrawService.materialraw ;
  }
  clickMe(){
    this.msg = "";
  }
}
