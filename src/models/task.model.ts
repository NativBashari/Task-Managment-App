export class Task{
    id: number;
    title:string;
    description: string;
    isChecked: boolean;
    priority: number;
    constructor(title: string, description: string,isChecked: boolean, priority: number){
        this.title= title;
        this.description= description;
        this.isChecked = isChecked;
        this.priority = priority;
        this.id=0;
    } 

}