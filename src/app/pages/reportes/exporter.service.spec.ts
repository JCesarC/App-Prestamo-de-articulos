/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExporterService } from './exporter.service';

describe('Service: Exporter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExporterService]
    });
  });

  it('should ...', inject([ExporterService], (service: ExporterService) => {
    expect(service).toBeTruthy();
  }));
});
