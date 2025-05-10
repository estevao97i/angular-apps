import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TodosComponent } from './components/todos/todos.component';
import { AlbumComponent } from './components/album/album.component';
import { PostComponent } from './components/post/post.component';

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
    },
    {
        path: 'user-detail/:id',
        title: 'Detalhes do Usuário',
        component: UserDetailComponent,
        children: [
            {
                path: '',
                redirectTo: 'todos',
                pathMatch: 'full'
            },
            {
                path: 'todos',
                component: TodosComponent,
                title: 'Todos',
            },
            {
                path: 'album',
                component: AlbumComponent,
                title: 'Albuns',
            },
            {
                path: 'post',
                component: PostComponent,
                title: 'Posts',
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'users',
        pathMatch: 'full'
    },
];
