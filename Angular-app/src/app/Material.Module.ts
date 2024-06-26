import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
    exports: [
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatRadioModule,
        MatToolbarModule,
        MatIconModule,
        MatProgressBarModule

    ]
})
export class MaterialModule {

}