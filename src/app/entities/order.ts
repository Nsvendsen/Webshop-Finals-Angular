import { User } from "./user";
import { OrderLine } from "./orderline";
import { PaymentInfo } from "./paymentInfo";
import { Product } from "./product";

export class Order {
    id: number;
    orderState: string;

    // priceTotal?: number; 
    // dateTimeCreated?: Date;
    
    // paidAt: Date;


    //Relation to User
    // user: User;
    userId?: number; //To later be able to filter arrays in admin page. Can we use the value in paymentInfo?

    //Relation to OrderLines
    orderLines: OrderLine[];

    //Relation to PaymentInfo
    paymentInfo?: PaymentInfo; //Contains userId

    productsInBasket?: Product[]; //This is only used to send the basket to the backend.
}