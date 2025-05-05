import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentPostComponent } from './components/posts/comment-post/comment-post.component';

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
                component: PostsComponent,
                children: [
                    {
                        path: ':postId',
                        component: CommentPostComponent
                    }
                ]
            }
        ]
    },
    // {
    //     path: 'posts/:userId',
    //     component: PostsComponent
    // }
];
