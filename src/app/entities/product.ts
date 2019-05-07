export class Product {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    category: string;
    price: number;
    dateTimeCreated?: Date;
    dateTimeEdited?: Date;
    activeFromDate?: Date;
    expirationDate?: Date;

    productVariations: ProductVariation[];
}

export class ProductVariation {
    id: number;
    inStock: number;
    // price: number; //Remove and use the price on product?
    sku: string;
    discountPercent?: number; //Add this to the product instead like price to keep things simple?

    productId: number;
    // productVariationAttributes: ProductVariationAttribute[];
}

// export class ProductVariationAttribute {
    // id;
    // name: string;
    // value: string;

    // productVariationId: number;
// }