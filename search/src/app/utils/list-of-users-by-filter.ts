import { isWithinInterval } from "date-fns";
import { Filter } from "../interfaces/filter.interface";
import { IUser } from "../interfaces/user.interface";

const filterByName = (req: Filter, listUsers: IUser[]): IUser[] => {
    const NAME_NOT_TYPED = req.nome === null || req.nome === undefined || req.nome === '';

    if (NAME_NOT_TYPED) {
        return listUsers;
    }

    return listUsers.filter((user) => user.nome.toLowerCase().startsWith(req.nome.toLowerCase()))
}

const filterByStatus = (req: Filter, listUsers: IUser[]): IUser[] => {
    const STATUS_NOT_TYPED = req.status === null || req.status === undefined;

    if (STATUS_NOT_TYPED) {
        return listUsers;
    }

    return listUsers.filter((user) => req.status === user.ativo)
}

const filterByDate = (req: Filter, listUsers: IUser[]) => {
    const DATE_INICIO_NOT_TYPED = req.dateInicio === null || req.dateInicio === undefined;
    const DATE_FIM_NOT_TYPED = req.dateFim === null || req.dateFim === undefined;

    if (DATE_FIM_NOT_TYPED || DATE_INICIO_NOT_TYPED) {
        return listUsers;
    }

    const checkDateInterval = (user: IUser) => {
        {
            return isWithinInterval(new Date(user.dataCadastro), { start: new Date(req.dateInicio), end: req.dateFim })
        }
    }

    return listUsers.filter(checkDateInterval);
}

const listOfUsersByFilter = (req: Filter, listUsers: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];
    
    filteredList = filterByName(req, listUsers);
    filteredList = filterByStatus(req, filteredList);
    filteredList = filterByDate(req, filteredList);

    return filteredList;
}

export { listOfUsersByFilter };