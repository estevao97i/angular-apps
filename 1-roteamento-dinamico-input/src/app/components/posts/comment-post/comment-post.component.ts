import { Component, Input, OnInit, inject } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-comment-post',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './comment-post.component.html',
  styleUrl: './comment-post.component.scss'
})
export class CommentPostComponent implements OnInit {
  commentService = inject(PostService);
  comment$: Observable<any[]> = of([]);

  private readonly _activatedRoute = inject(ActivatedRoute);

  @Input() set postId(idPost: any) {
    this._activatedRoute.parent?.params.subscribe((value: any) => {
      this.comment$ = this.commentService.getCommentsByPost(value.userId, idPost);
    })
  };
  
  ngOnInit(): void {
  }
}
