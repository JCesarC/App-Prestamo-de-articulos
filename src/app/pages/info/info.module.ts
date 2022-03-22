import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [InfoComponent],
  imports: [CommonModule, InfoRoutingModule, MaterialModule],
})
export class InfoModule {}
