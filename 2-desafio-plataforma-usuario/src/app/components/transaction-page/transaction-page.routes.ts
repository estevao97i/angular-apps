import { Routes } from "@angular/router";
import { TransactionPageComponent } from "./transaction-page.component";
import { CreditoComponent } from "./credito/credito.component";
import { DebitoComponent } from "./debito/debito.component";

export const transactionRoutes: Routes = [
    {
        path: '',
        component: TransactionPageComponent,
        children: [
            {
                path: '',
                redirectTo: 'credito',
                pathMatch: 'full'
            },
            {
                path: 'credito',
                title: 'Crédito',
                component: CreditoComponent,
            },
            {
                path: 'debito',
                title: 'Débito',
                component: DebitoComponent,
            }
        ]
    }
]