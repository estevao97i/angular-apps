import { Component, Input, OnInit, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../types/post.type';
import { Observable, of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  private readonly postService = inject(PostService);
  post$: Observable<Post[]> = of([])
  @Input() set userId(value: string) {
    this.post$ = this.postService.getPostsByUser(value);
  } 
}
