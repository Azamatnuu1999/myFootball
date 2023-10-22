import { NgModule } from "@angular/core";

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzFormModule } from "ng-zorro-antd/form";


@NgModule({
    imports: [
        NzSelectModule,
        NzTableModule,
        NzDividerModule,
        NzInputModule,
        NzTimePickerModule,
        NzDatePickerModule,
        NzButtonModule,
        NzFormModule
    ],
    exports: [
        NzSelectModule,
        NzTableModule,
        NzDividerModule,
        NzInputModule,
        NzTimePickerModule,
        NzDatePickerModule,
        NzButtonModule,
        NzFormModule
    ]
})
export class NzModule {

}