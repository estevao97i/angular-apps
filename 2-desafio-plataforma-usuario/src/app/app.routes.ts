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
        loadComponent: () => import('./components/general-page/general-page.component').then(m => m.GeneralPageComponent),
        pathMatch: 'full'
    },
    {
        path: 'transaction',
        loadComponent: () => import('./components/transaction-page/transaction-page.component').then(m => m.TransactionPageComponent)
    },
    {
        path: '**',
        component: NotFoundComponent,
        pathMatch: 'full'
    }
];
