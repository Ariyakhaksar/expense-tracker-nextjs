export interface Transaction{
    id:string;
    text:string;
    amount:number;
    userId: string;
    createAt:Date;
    updateAt:Date;
}