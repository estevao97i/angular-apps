import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { DetailComponent } from "./detail-component/detail.component";
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from "@angular/common";
import { PipesModule } from "../pipes/pipes.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        DetailComponent,
        SearchComponent,
        ListComponent
    ],
    imports: [
        AngularMaterialModule,
        CommonModule,
        PipesModule,
        ReactiveFormsModule
    ],
    exports: [
        DetailComponent,
        SearchComponent,
        ListComponent
    ]
})
export class ComponentModule {}