export interface IListUser {
    id: number;
    username: string;
    password: string;
    role: number;
    fullname: string;
    email:string;
    recaptcha:string
}
export interface IUserLogin{
    username: string;
    password: string;
}

export function CreateUser(data): IListUser {
    return {
        id: null,
        username: data.username,
        password: data.password,
        role: null,
        fullname: data.fullname,
        email: data.email,
        recaptcha: data.recaptcha

    }
}
