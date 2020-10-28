import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'on'
    },
    {
      id: 2,
      name: 'Ordinateur',
      status: 'on'
    },
    {
      id: 3,
      name: 'Télévision',
      status: 'off'
    },
    {
      id: 4,
      name: 'Chaudière',
      status: 'en panne'
    }
  ];

  constructor(private httpClient: HttpClient) {}

  emitAppareilSubject(): any {
    this.appareilSubject.next(this.appareils.slice());
  }

  getAppareilById(id: number) {
    const appareil = this.appareils[id] || null;
    return appareil;
  }

  switchOnAll(): void {
    for (let appareil of this.appareils) {
      appareil.status = 'on';
    }
    this.emitAppareilSubject();
  }

  switchOffAll(): void {
    for (let appareil of this.appareils) {
      appareil.status = 'off';
    }
    this.emitAppareilSubject();
  }

  switchOn(index: number): void {
    this.appareils[index].status = 'on';
    this.emitAppareilSubject();
  }

  switchOff(index: number): void {
    this.appareils[index].status = 'off';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string): void {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilsToServer() {
    this.httpClient
      .put('https://http-client-demo-2966f.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé');
        },
        (error) => {
          console.log('Erreur de sauvegard : ' + error);
        }
      );
  }

  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://http-client-demo-2966f.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur de chargement : ' + error);
        }
      );
  }
}
