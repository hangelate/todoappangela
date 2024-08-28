import { UserInterface } from "./user.interface";

export interface TaskInterface{
    id:string | number; //para permitir strings o numeros, TODO: '1', 1
    title:string;
    tags: string[]; //un array de tipo string, tambien se puede Array<string>
    user: UserInterface;
    status: 'in-progress' | 'completed' | 'wait';
}