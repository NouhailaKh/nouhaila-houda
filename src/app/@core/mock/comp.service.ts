import { Injectable } from '@angular/core';
import { CompData } from '../data/comp';


@Injectable()
export class CompService extends CompData {

  data = [{
    id: 1,
    Name: 'hudabeauty',
    Price: '545',
    Reference: '1245',
  }, {
    id: 2,
    Name: 'nys',
    Price: '785',
    Reference: '1256',
  }, {
    id: 3,
    Name: 'carrion',
    Price: '258',
    Reference: '259' ,
  },
    {
      id: 8,
      Name: 'Mark',
      Price: '856',
      Reference: '2569',
    }] ;
  getData() {
    return this.data;
  }
}
