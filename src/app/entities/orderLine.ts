import { Item } from './item';
import { Order } from './order';

// Should we use DTOs?
// Why is orderline saved when added to cart?
// Orderline is saved to check item stock price etc??
export class OrderLine {
    id: number;
    addedToCart: Date;
    refunded: boolean;
    refundedAt: Date;
    // price: number; //Get price from item

    // Relation to Item
    // item: Item;
    // itemId: number;

    // Relation to Order
    // order: Order;
    // orderId: number;
}
