import { Routes } from "@angular/router";
import { TransactionPageComponent } from "./transaction-page.component";

export const transactionRoutes: Routes = [
    {
        path: '',
        component: TransactionPageComponent,
        children: [
            {
                
            }
        ]
    }
]