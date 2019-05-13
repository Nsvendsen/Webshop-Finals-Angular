export class Product {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    category: string;
    price: number;
    discountPercent?: number;
    dateTimeCreated?: Date;
    dateTimeUpdated?: Date;
    activeFromDate?: Date;
    expirationDate?: Date;

    productVariations?: ProductVariation[];
    //get product images
}

export class ProductVariation {
    id: number; //String?
    inStock: number;
    sku: string;
    size?: string;

    productId?: number; //Does this have to be optional?
}