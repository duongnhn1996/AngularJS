export interface ListMail {
    id: number;
    subject: string;
    name: string;
    messages: string;
    mailto: string;
}
export interface IListMail {
    id: number;
    subject: string;
    name: string;
    messages: string;
    mailto: string;
}
export function CreateEmail(data): IListMail {
    return {
        id: data.id,
        subject: data.subject,
        name: data.name,
        messages: data.messages,
        mailto: data.mailto
    }
}
