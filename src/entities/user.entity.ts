import { randomUUID } from 'crypto'

type IUser = {
    name: string
    password: string
    username: string
}

export class User{
    id: string
    name: string
    username: string
    password: string
    isAdmin: boolean

    private constructor(props: IUser) {
    this.name = props.name
    this.password = props.password
    this.isAdmin = false
    this.username = props.username
    this.id = randomUUID()
    }

    static create(props: IUser){
        const user = new User(props)
        return user
    }
}