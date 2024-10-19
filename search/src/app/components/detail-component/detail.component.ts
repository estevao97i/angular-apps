import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnChanges {

  @Input() userSelected: IUser = { } as IUser;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userSelected'].currentValue) {
      console.log(this.userSelected);
    }
  }
}
