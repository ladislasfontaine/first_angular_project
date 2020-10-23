export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      status: 'on'
    },
    {
      name: 'Ordinateur',
      status: 'on'
    },
    {
      name: 'Télévision',
      status: 'off'
    },
    {
      name: 'Chaudière',
      status: 'en panne'
    }
  ];

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
