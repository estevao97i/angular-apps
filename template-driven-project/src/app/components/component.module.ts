import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material.module";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { PipeModule } from "../pipes/pipes.module";
import { DirectiveModule } from "../directives/directive.module";
import { UsersCardListComponent } from './users-card-list/users-card-list.component';

@NgModule({
    declarations: [
    UsersCardListComponent
  ],
    imports: [
        FormsModule,
        BrowserModule,
        PipeModule,
        DirectiveModule,
        AngularMaterialModule,
    ],
    exports: [
        UsersCardListComponent
    ]
})
export class ComponentModule {}