export class AppareilService {
  appareils = [
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

  getAppareilById(id: number) {
    const appareil = this.appareils[id] || null;
    return appareil;
  }

  switchOnAll(): void {
    for (let appareil of this.appareils) {
      appareil.status = 'on';
    }
  }

  switchOffAll(): void {
    for (let appareil of this.appareils) {
      appareil.status = 'off';
    }
  }

  switchOn(index: number): void {
    this.appareils[index].status = 'on';
  }

  switchOff(index: number): void {
    this.appareils[index].status = 'off';
  }
}
