import { User } from "./user";
import { OrderLine } from "./orderline";
import { PaymentInfo } from "./paymentInfo";

export class Order {
    id: number;
    orderState: string;
    paymentInfo: string;
    // totalPrice: number;
    // paidAt: Date;


    //Relation to User
    // user: User;
    // userId: number;

    //Relation to OrderLines
    orderLines: OrderLine[];

    //Relation to paymentInfo
    // paymentInfo: PaymentInfo;
    // paymentInfoId: number;
}