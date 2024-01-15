import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatInputModule,
  MatFormFieldModule,
  FormsModule,
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatDividerModule
];

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, ...MATERIAL_MODULES],
  exports: [CommonModule, ...MATERIAL_MODULES],
})
export class MaterialModule {}
