import { Injectable } from '@angular/core';
import { ITrainee } from './../models';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  trainees: ITrainee[] = [
    {name: 'Default Name',

    complexion: 'Black',
    hobbies: [],
    gender: 'm',
    dateofbirth: '',
    almamata: '',
    discipline: '',
    id: 0,
    registereddate: new Date(),

    email: '',
    telephone: ''
  }
  ];
  constructor(private httpclient: HttpClient) { }
  // create new trainee
  addTrainee(trainee: ITrainee): Observable<any> {
   return this.httpclient.post(environment.databaseURL + '/trainees.json', trainee)
  }
// we get trainee info
  getTrainees(): Array<ITrainee> {
    return this.trainees;
  }

}
