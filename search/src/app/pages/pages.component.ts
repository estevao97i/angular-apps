import { AfterViewInit, Component } from "@angular/core";
import { IUser } from "../interfaces/user.interface";

@Component({
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent {

    selectedUser!: IUser;
    filter: any;

    selectUser(user: IUser) {
        this.selectedUser = user;
    }

    filterUsers(req: { nome?: string, dataInicio: Date, dataFim: Date, status: boolean }) {
        this.filter = req;
    }

}