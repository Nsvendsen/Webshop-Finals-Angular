export class Item {
    id: number;
    name: string;
    inStock: number;
    price: number;
    description: string;
    isActive: boolean;
    category: string;
    // dateTimeCreated: Date;
    // dateTimeEdited: Date;
    // expirationDate: Date;
    dateTimeCreated?: Date;
    dateTimeEdited?: Date;
    expirationDate?: Date;
}