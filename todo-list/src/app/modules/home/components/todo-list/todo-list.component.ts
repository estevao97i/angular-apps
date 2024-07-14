import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Todo } from '../../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, AfterViewInit{

  listTodo: Todo[] = []
  check: boolean = false
  draggingElement: HTMLElement | null = null;
  closestLi: HTMLElement | null = null;
  lastElement: HTMLElement | null = null;

  @ViewChildren('itemAtividade') itemAtividade!: QueryList<ElementRef>;

  constructor() {}

  ngOnInit(): void {
    this.listTodo.push({check: false , description:'tarefa de casa'})
    this.listTodo.push({check: false , description:'dormir'})
    this.listTodo.push({check: false , description:'estudar'})
    this.listTodo.push({check: false , description:'comer'})
    this.listTodo.push({check: false , description:'comer'})
    this.listTodo.push({check: false , description:'comer'})
    this.listTodo.push({check: false , description:'comer'})
    this.listTodo.push({check: false , description:'comer'})
    this.listTodo.push({check: false , description:'comer'})
    this.listTodo.push({check: false , description:'comer'})
    this.listTodo.push({check: false , description:'comer'})
    this.listTodo.push({check: false , description:'comer'})
  }
  
  ngAfterViewInit() {
    this.itemAtividade.forEach(elem => {
      elem.nativeElement.addEventListener('dragstart', this.onDragStart.bind(this));
      elem.nativeElement.addEventListener('dragend', this.onDragEnd.bind(this));
      elem.nativeElement.addEventListener('dragover', this.onDragOver.bind(this));
      elem.nativeElement.addEventListener('drop', this.onDrop.bind(this));
    })
  }

  onDragStart(event: DragEvent) {
    const target = event.target as HTMLElement;
    this.draggingElement = target;
    if (event.dataTransfer) {
      event.dataTransfer?.setData('text/plain', target.innerHTML);
      event.dataTransfer?.setData('index', this.getElementIndex(target).toString());
      event.dataTransfer.effectAllowed = 'move'
    }
    this.draggingElement.classList.add('dragging');
  }

  onDragEnd(event: DragEvent) {
    if (this.draggingElement) {
      this.draggingElement.classList.remove('dragging');
      this.draggingElement.classList.remove('sobreItem');
      this.draggingElement = null;
    }
    if (this.closestLi) {
      this.closestLi.classList.remove('sobreItem');
    }
    this.itemAtividade.forEach(item => item.nativeElement.classList.remove('sobreItem'))
    this.closestLi = null;
    this.lastElement = null;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
      const target = event.target as HTMLElement;
      const closestLi = target.closest('li') as HTMLElement;

      if (closestLi && closestLi !== this.draggingElement) {
        if (this.lastElement && this.lastElement !== closestLi) {
          this.lastElement.classList.remove('sobreItem');
        }

        closestLi.classList.add('sobreItem');
        this.lastElement = closestLi;
      }
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (!event.dataTransfer) return;
    
    const target = event.target as HTMLElement;
    const fromIndex = parseInt(event.dataTransfer.getData('index'), 10);
    const closetLi = target.closest('li')!;
    const toIndex = this.getElementIndex(closetLi);
    
    if (fromIndex !== toIndex) {
      const movedItem = this.listTodo.splice(fromIndex, 1)[0];
      this.listTodo.splice(toIndex, 0, movedItem);
    }

    if (this.lastElement) {
      this.lastElement.classList.remove('sobreItem');
    }
  }

  getElementIndex(element: HTMLElement): number {
    return Array.from(element.parentElement!.children).indexOf(element);
  }

  clickCheck(atividade: any) {
    atividade.check = !atividade.check
  }

  delete(event: any, atividade: any) {
    event.stopPropagation();
  }

}
