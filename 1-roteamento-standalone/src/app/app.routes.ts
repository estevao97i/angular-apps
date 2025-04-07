import { Routes } from '@angular/router';
import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { BaseComponent } from './components/base/base.component';

export const routes: Routes = [
    // com lazy loading
    { 
        path: 'component', 
        loadComponent: () => import('../app/components/base/base.component').then(m => m.BaseComponent)
    },
    { 
        path: 'component/primeiro',
        loadComponent: () => import('../app/components/primeiro/primeiro.component').then(m => m.PrimeiroComponent)
    },
    { 
        path: 'component/segundo',
        loadComponent: () => import('../app/components/segundo/segundo.component').then(m => m.SegundoComponent)
    }

    // { path: 'component', component: BaseComponent },
    // { path: 'component/primeiro', component: PrimeiroComponent, pathMatch: 'full' },
    // { path: 'component/segundo', component: SegundoComponent, pathMatch: 'full' },

    // { path: 'primeiro', component: PrimeiroComponent, pathMatch: 'full' },
    // { path: 'segundo', component: SegundoComponent, pathMatch: 'full' },
];
