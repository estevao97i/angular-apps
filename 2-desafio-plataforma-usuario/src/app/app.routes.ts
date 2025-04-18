import { Routes } from '@angular/router';
import { InicioPageComponent } from './components/inicio-page/inicio-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'general',
        loadChildren: () => import('./components/general-page/general-page.routes').then(m => m.routes)
    },
    {
        path: 'transaction',
        loadChildren: () => import('./components/transaction-page/transaction-page.routes').then(m => m.transactionRoutes)
    },
    {
        path: '**',
        component: NotFoundComponent,
        pathMatch: 'full'
    }
];
