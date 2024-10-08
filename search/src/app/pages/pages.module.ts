import { NgModule } from "@angular/core";
import { PagesRoutingModule } from "./pages.routing.module";
import { CommonModule } from "@angular/common";
import { PagesComponent } from "./pages.component";
import { ComponentModule } from "../components/component.module";

@NgModule({
    declarations: [
        PagesComponent,
    ],
    imports: [
        PagesRoutingModule,
        CommonModule,
        ComponentModule
    ]
})
export class PagesModule {}