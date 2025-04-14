import { Routes } from '@angular/router';
import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { BaseComponent } from './components/base/base.component';
import { InitalComponent } from './components/inital/inital.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PageAComponent } from './components/primeiro/components/page-a/page-a.component';
import { PageBComponent } from './components/primeiro/components/page-b/page-b.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Inicial',
        component: InitalComponent,
    },
    // com lazy loading
    { 
        path: 'component',
        title: 'Base',
        loadComponent: () => import('../app/components/base/base.component').then(m => m.BaseComponent)
    },
    { 
        path: 'component/primeiro',
        title: 'Primeiro',
        component: PrimeiroComponent,
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
            }
        ]
        // loadComponent: () => import('../app/components/primeiro/primeiro.component').then(m => m.PrimeiroComponent)
    },
    { 
        path: 'component/segundo',
        title: 'Segundo',
        loadComponent: () => import('../app/components/segundo/segundo.component').then(m => m.SegundoComponent)
    },
    {
        path: '**',
        title: 'Page not found',
        component: NotFoundComponent,
    }

    // { path: 'component', component: BaseComponent },
    // { path: 'component/primeiro', component: PrimeiroComponent, pathMatch: 'full' },
    // { path: 'component/segundo', component: SegundoComponent, pathMatch: 'full' },

    // { path: 'primeiro', component: PrimeiroComponent, pathMatch: 'full' },
    // { path: 'segundo', component: SegundoComponent, pathMatch: 'full' },
];
