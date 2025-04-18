import { Routes } from "@angular/router";
import { BasicComponent } from "./basic/basic.component";
import { ContactComponent } from "./contact/contact.component";
import { AdressComponent } from "./adress/adress.component";
import { GeneralPageComponent } from "./general-page.component";

export const routes: Routes = [
    {
        path: '',
        component: GeneralPageComponent,
        title: 'Página Geral',

        children: [
            {
                path: '',
                title: 'Básico',
                pathMatch: 'full',
                component: BasicComponent,
            },
            {
                path: 'contact',
                title: 'Contato',
                component: ContactComponent,
            },
            {
                path: 'address',
                title: 'Endereço',
                component: AdressComponent,
            },
        ]

    },
]