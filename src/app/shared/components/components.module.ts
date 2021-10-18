import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, MaterialModule],
})
export class ComponentsModule {}
