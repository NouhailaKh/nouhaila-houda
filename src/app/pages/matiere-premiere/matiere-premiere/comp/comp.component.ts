import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { CompData } from 'app/@core/data/comp';

@Component({
  selector: 'ngx-comp1',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss'],
})
export class CompComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      Name: {
        title: 'Nom',
        type: 'string',
      },
      Reference : {
        title: 'Reference',
        type: 'number',
      },
      Price: {
        title: 'Price',
        type: 'Float',
      },
      Quantite: {
        title: 'Quantité Commandée',
        type: 'Number',
      },
      Date: {
        title: 'Date de Production',
        type: 'date',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: CompData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
