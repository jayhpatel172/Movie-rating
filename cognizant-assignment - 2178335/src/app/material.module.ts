import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatGridListModule, MatTooltipModule,MatSnackBarModule],
    exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatGridListModule, MatTooltipModule,MatSnackBarModule]
})

export class MaterialModule {}