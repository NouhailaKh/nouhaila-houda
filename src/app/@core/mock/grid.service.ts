import {Injectable} from '@angular/core';
import {Provider} from '../../pages/ui-features/grid/grid';

@Injectable({
  providedIn: 'root' ,
})
export class ProviderService {
  private _provider: Provider ;
  private _providers: Array<Provider> ;
  public save() {
    this.providers.push(this.clone(this.provider)) ;
  }
  get providers(): Array<Provider> {
    if (this._providers == null) {
      this._providers = new Array<Provider>() ;
    }
    return this._providers;
  }

  set providers(value: Array<Provider>) {
    this._providers = value;
  }

  constructor() {}

  get provider(): Provider {
    if (this._provider == null) {
      this._provider = new Provider();
    }
    return this._provider;
  }
  delete(selected) {
    return new Promise(resolve => {
      const index = this.providers.findIndex(provider => provider === selected);
      this.providers.splice(index, 1);
      resolve(true);
    });
  }

  set provider(value: Provider) {
    this._provider = value;
  }

  private clone(provider: Provider) {
    const myclone = new Provider() ;
    myclone.Id = provider.Id ;
    myclone.Name = provider.Name ;
    myclone.Email = provider.Email ;
    myclone.Address = provider.Address ;
    myclone.Phone = provider.Phone ;
    myclone.Actions = provider.Actions ;
    return myclone ;
  }
}
