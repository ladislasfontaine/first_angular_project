import { Subject } from 'rxjs/Subject';

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
}
