import { Music } from "./music.model"

export interface IUser {
    name: string
    username: string
    url: string
    email: string
    password: string
    birthDate: string
    state: number
    musics: Music[]
}

export type Users = IUser[];