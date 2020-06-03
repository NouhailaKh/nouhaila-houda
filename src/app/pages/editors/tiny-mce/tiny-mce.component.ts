import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tiny-mce-page',
  template: `<div  >
    <nb-card>
      <nb-card-header>
        Planning
      </nb-card-header>
      <nb-card-body>
        <ngx-tiny-mce></ngx-tiny-mce>
      </nb-card-body>
    </nb-card>
    </div>
    <div  >
    <button class="btn btn-success btn-block" >Save</button>
  </div>
  `,
})
export class TinyMCEComponent {
}
