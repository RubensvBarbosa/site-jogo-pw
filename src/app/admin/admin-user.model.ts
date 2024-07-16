export interface Iuser {
    id: number;
    username: string;
    password: string;
    admin: boolean;
    createdAt: string;
    updatedAt: string;
}

export class User {
    id = 0;
    username = '';


    constructor(user: Iuser){
        this.id = user.id
        this.username = user.username;
    }
}