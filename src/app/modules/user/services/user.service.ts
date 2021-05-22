import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { masterData } from 'src/app/core/constants/dummy-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getMasterData(): Observable<any> {
    return of(masterData);
  }
}
