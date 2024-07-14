import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, QueryList, Renderer2, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Todo } from '../../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements AfterViewInit, OnChanges, DoCheck {

  @Input() deleteAll!: boolean;
  @Input() newTask!: Todo;

  listTodo: Todo[] = JSON.parse(localStorage.getItem('list') || '[]')
  check: boolean = false
  draggingElement: HTMLElement | null = null;
  closestLi: HTMLElement | null = null;
  lastElement: HTMLElement | null = null;

  @ViewChildren('itemAtividade') itemAtividade!: QueryList<ElementRef>;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['deleteAll']?.currentValue != undefined) {
      this.listTodo = [];
    }
    if (changes['newTask']?.currentValue != undefined) {
      this.listTodo = [...this.listTodo, this.newTask]
    }
    this.changeDetector.detectChanges();
    this.reassignDragAndDropListeners();
  }

  ngAfterViewInit() {
    this.reassignDragAndDropListeners();
  }

  ngDoCheck(): void {
    this.setLocalStorage();
    // this.listTodo.sort((first, last) => {
    //   return Number(first.check) - Number(last.check);
    // }) 
  }

  setLocalStorage() {
    localStorage.setItem('list', JSON.stringify(this.listTodo));
  }

  reassignDragAndDropListeners() {
    this.itemAtividade.forEach(elem => {
      elem.nativeElement.removeEventListener('dragstart', this.onDragStart.bind(this)); // Remove os listeners antigos
      elem.nativeElement.removeEventListener('dragend', this.onDragEnd.bind(this));
      elem.nativeElement.removeEventListener('dragover', this.onDragOver.bind(this));
      elem.nativeElement.removeEventListener('drop', this.onDrop.bind(this));

      elem.nativeElement.addEventListener('dragstart', this.onDragStart.bind(this)); // Adiciona os listeners novos
      elem.nativeElement.addEventListener('dragend', this.onDragEnd.bind(this));
      elem.nativeElement.addEventListener('dragover', this.onDragOver.bind(this));
      elem.nativeElement.addEventListener('drop', this.onDrop.bind(this));
    });
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

  delete(event: any, index: number) {
    event.stopPropagation();

    this.listTodo.splice(index, 1);
  }

}
