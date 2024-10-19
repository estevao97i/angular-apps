import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersList } from 'src/app/data/user-list';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit, OnChanges {

  displayedColumns = ['nome', 'email', 'idade', 'ativo'];
  dataSource: any;

  @Input() filter: any;
  @Output() userEmitter: EventEmitter<IUser> = new EventEmitter();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor() {
    this.dataSource = new MatTableDataSource<IUser>(UsersList);

    console.log(this.dataSource.data)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter'].currentValue) {
      this.filtrarUsers(this.filter);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  selected(user: IUser) {
    // console.log(user)
    this.userEmitter.emit(user);
  }

  filtrarUsers(filter: any) {
    this.dataSource = new MatTableDataSource<IUser>(UsersList);

    console.log(filter)
    if (Object.values(filter).every((r: any) => (!r && typeof r != 'boolean'))) {
      return;
    }

    const res = this.dataSource.filteredData.filter((res: IUser) => {
      return (filter.nome === null || res.nome.toUpperCase().startsWith(filter.nome.toUpperCase()))
              && (filter.status === null || res.ativo === filter.status)
              // && ((filter.dataInicio === null && filter.dataFim === null)
              // || (res.dataCadastro >= filter.dataInicio && res.dataCadastro <= filter.dataFim))
    })

    this.dataSource = new MatTableDataSource<IUser>(res);
  }

}