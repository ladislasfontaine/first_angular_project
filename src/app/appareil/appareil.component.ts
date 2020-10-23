import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareilStatus;
  }

  getColor(): string {
    if (this.appareilStatus === 'on') {
      return 'green';
    } else if (this.appareilStatus === 'off') {
      return 'red';
    }
  }

  onSwitchOn(): void {
    this.appareilService.switchOn(this.indexOfAppareil);
  }

  onSwitchOff(): void {
    this.appareilService.switchOff(this.indexOfAppareil);
  }
}
