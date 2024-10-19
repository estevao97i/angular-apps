import { Component } from "@angular/core";
import { IUser } from "../interfaces/user.interface";
import { UsersList } from "../data/user-list";
import { Filter } from "../interfaces/filter.interface";
import { isWithinInterval } from "date-fns";

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
        this.filteredUsersList = this.listOfUsersByFilter(req, this.listUsers)
    }
    
    listOfUsersByFilter(req: Filter, listUsers: IUser[]): IUser[] {
        let filteredList: IUser[] = [];
        
        filteredList = this.filterByName(req, listUsers);
        filteredList = this.filterByStatus(req, filteredList);
        filteredList = this.filterByDate(req, filteredList);
    
        return filteredList;
    }
    
    filterByName(req: Filter, listUsers: IUser[]): IUser[] {
        const NAME_NOT_TYPED = req.nome === null || req.nome === undefined || req.nome === '';
        
        if (NAME_NOT_TYPED) {
            return listUsers;
        }
        
        return listUsers.filter((user) => user.nome.toLowerCase().startsWith(req.nome.toLowerCase()))
    }
    
    filterByStatus(req: Filter, listUsers: IUser[]): IUser[] {
        const STATUS_NOT_TYPED = req.status === null || req.status === undefined;
        
        if (STATUS_NOT_TYPED) {
            return listUsers;
        }
        
        return listUsers.filter((user) => req.status === user.ativo)
    }
    
    filterByDate(req: Filter, listUsers: IUser[]) {
        const DATE_INICIO_NOT_TYPED = req.dateInicio === null || req.dateInicio === undefined;
        const DATE_FIM_NOT_TYPED = req.dateFim === null || req.dateFim === undefined;

        if (DATE_FIM_NOT_TYPED || DATE_INICIO_NOT_TYPED) {
            return listUsers;
        }

        const checkDateInterval = (user: IUser) => {{
            return isWithinInterval(new Date(user.dataCadastro), {start: new Date(req.dateInicio), end: req.dateFim})
        }}
        
        return listUsers.filter(checkDateInterval);
    }
}