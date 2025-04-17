import { Routes } from "@angular/router";
import { PrimeiroComponent } from "./primeiro.component";
import { PageAComponent } from "./components/page-a/page-a.component";
import { PageBComponent } from "./components/page-b/page-b.component";

export const PrimeiroRoutes: Routes = [
    {
        path: '',
        component: PrimeiroComponent,
        pathMatch: 'full',
        children: [
            {
                path: '',
                title: 'Page A',
                component: PageAComponent
            },
            {
                path: 'page-b',
                title: 'Page B',
                
                component: PageBComponent
            },
            {
                path: 'redirect-b',
                redirectTo: 'page-b'
            },
            {
                path: 'redirect-a',
                redirectTo: 'redirect-a'
            }
        ]
    }
]