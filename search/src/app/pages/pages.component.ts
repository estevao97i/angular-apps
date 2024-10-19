import { Component } from "@angular/core";
import { IUser } from "../interfaces/user.interface";
import { UsersList } from "../data/user-list";
import { Filter } from "../interfaces/filter.interface";
import { listOfUsersByFilter } from "../utils/list-of-users-by-filter";

@Component({
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent {

    selectedUser!: IUser;
    filter: any;
    listUsers: IUser[];
    filteredUsersList: IUser[];

    constructor() {
        this.listUsers = UsersList;
        this.filteredUsersList = UsersList;
    }

    selectUser(user: IUser) {
        this.selectedUser = user;
    }

    filterUsers(req: Filter) {
        this.filteredUsersList = listOfUsersByFilter(req, this.listUsers)
    }
}