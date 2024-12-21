import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material.module";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { PipeModule } from "../pipes/pipes.module";
import { DirectiveModule } from "../directives/directive.module";
import { UsersCardListComponent } from './users-card-list/users-card-list.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
    declarations: [
    UsersCardListComponent,
    UserFormComponent
  ],
    imports: [
        FormsModule,
        BrowserModule,
        PipeModule,
        DirectiveModule,
        AngularMaterialModule,
    ],
    exports: [
        UsersCardListComponent,
        UserFormComponent
    ]
})
export class ComponentModule {}