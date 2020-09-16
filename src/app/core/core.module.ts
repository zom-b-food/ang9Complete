import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SorterService } from './sorter.service';

@NgModule({
    imports: [ HttpClientModule ],
    providers: [ SorterService ]
})
export class CoreModule { }
