import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit ,AfterViewInit, OnChanges {

  displayedColumns = ['nome', 'email', 'idade', 'ativo'];
  dataSource: any;

  @Input() filter: any;
  @Input() filteredList!: IUser[];
  @Output() userEmitter: EventEmitter<IUser> = new EventEmitter();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IUser>(this.filteredList);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filteredList'].currentValue) {
      this.dataSource = new MatTableDataSource<IUser>(this.filteredList);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  selected(user: IUser) {
    this.userEmitter.emit(user);
  }
}