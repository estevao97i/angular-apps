import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
    },
    {
        path: 'users',
        title: 'Lista de Usuários',
        component: UserListComponent,
        children: [
            {
                path: ':id',
                title: 'Detalhes do Usuário',
                component: UserDetailComponent
            }
        ]
    }
];
