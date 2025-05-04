import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: 'posts/:userId',
                component: PostsComponent
            }
        ]
    },
    // {
    //     path: 'posts/:userId',
    //     component: PostsComponent
    // }
];
