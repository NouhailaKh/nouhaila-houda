import { Component } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ngx-ckeditor',
  template:
   `<div>
    <nb-card>
      <nb-card-header>
        Rapport
      </nb-card-header>
      <nb-card-body>
        <ckeditor [config]="{ extraPlugins: 'divarea', height: '320' }"></ckeditor>
      </nb-card-body>
    </nb-card>
    </div>
    <div  >
    <button class="btn btn-success btn-block" >Save</button>
  </div>
  `,
})
export class CKEditorComponent {
}
