import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReportesComponent } from './reportes.component';
import { MaterialModule } from '@app/material.module';
import { AllReportesComponent } from './all-reportes/all-reportes.component';
import { ExporterService } from './exporter.service';

@NgModule({
  declarations: [ReportesComponent, AllReportesComponent],
  imports: [CommonModule, ReportesRoutingModule, MaterialModule],
  providers: [ExporterService],
})
export class ReportesModule {}
