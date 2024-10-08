import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { DetailComponent } from "./detail-component/detail.component";
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        DetailComponent,
        SearchComponent
    ],
    imports: [
        AngularMaterialModule
    ],
    exports: [
        DetailComponent,
        SearchComponent
    ]
})
export class ComponentModule {}