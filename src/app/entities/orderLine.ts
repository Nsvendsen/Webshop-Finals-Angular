export class OrderLine {
    // id: number;
    // price: number;
    // discountPercent: number;
    // dateTimeCreated?: Date;
    // // refunded: boolean;
    // // refundedAt: Date;

    //This entity is made from 3 tables in the database: order_lines, product_variations and products.
    id: number;
    price: number;
    sku: string;
    size?: string;
    name: string; 

    // orderId: number;
}
