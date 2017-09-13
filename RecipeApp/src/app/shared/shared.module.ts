import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        DropdownDirective
    ],
    exports : [
        CommonModule,//exported so every new module can use this.. not mandatory
        DropdownDirective]
})
export class SharedModule{

}