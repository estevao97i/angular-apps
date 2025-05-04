import { Component, Input, OnInit, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../types/post.type';
import { Observable, of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit{

  private readonly postService = inject(PostService);
  post$: Observable<Post[]> = of([])
  @Input() set userId (value: string) {
    this.post$ = this.postService.getPostsByUser(value);
  }

  ngOnInit(): void {
    // this.post$ = this.postService.getPostsByUser(this.userId);
  }

}
