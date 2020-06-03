import {Injectable} from '@angular/core';
import {MaterialRaw} from '../../pages/modal-overlays/dialog/dialog';


@Injectable({
  providedIn: 'root' ,
})
export class MaterialRawService {
  private _materialraw: MaterialRaw ;
  private _materialraws: Array<MaterialRaw> ;
  public save() {
    this._materialraws.push(this.clone(this._materialraw)) ;
  }
  get materialraws(): Array<MaterialRaw> {
    if (this._materialraws == null) {
      this._materialraws = new Array<MaterialRaw>() ;
    }
    return this._materialraws;
  }

  set materialraws(value: Array<MaterialRaw>) {
    this._materialraws = value;
  }

  constructor() {}

  get materialraw(): MaterialRaw {
    if (this._materialraw == null) {
      this._materialraw = new MaterialRaw();
    }
    return this._materialraw;
  }
  delete(selected) {
    return new Promise(resolve => {
      const index = this.materialraws.findIndex(materialraw => materialraw === selected);
      this.materialraws.splice(index, 1);
      resolve(true);
    });
  }

  set materialraw(value: MaterialRaw) {
    this._materialraw = value;
  }

  private clone(materialraw: MaterialRaw) {
    const myclone = new MaterialRaw() ;
    myclone.Id = materialraw.Id ;
    myclone.Name = materialraw.Name ;
    myclone.Provider = materialraw.Provider ;
    myclone.Quantity_of_stock = materialraw.Quantity_of_stock ;
    myclone.Reviews = materialraw.Reviews ;
    return myclone ;
  }
}
