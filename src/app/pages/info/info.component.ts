import { Component, OnInit } from '@angular/core';
import { ManualService } from './manual.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  constructor(private manualSvc: ManualService) {}

  ngOnInit(): void {}

  async getDocument() {
    await this.manualSvc.getDocument().toPromise();
  }
}
