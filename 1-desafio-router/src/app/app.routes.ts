import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'inicio', 
        loadComponent: () => import('../app/inicio/inicio.component').then(m => m.InicioComponent)
    },
    {
        path: 'sobre',
        loadComponent: () => import('../app/sobre/sobre.component').then(m => m.SobreComponent)
    },
    {
        path: 'contatos',
        loadComponent: () => import('../app/contatos/contatos.component').then(m => m.ContatosComponent)
    },
    {
        path: 'info',
        loadComponent: () => import('../app/info/info.component').then(m => m.InfoComponent)
    },
    {
        path: 'sair',
        loadComponent: () => import('../app/sair/sair.component').then(m => m.SairComponent)
    }
];
