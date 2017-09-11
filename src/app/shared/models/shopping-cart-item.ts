import { Product } from './product';

export class ShoppingCartItem {
    // product: Product;
    $key: string;
    category: string;
    imageUrl: string;
    price: number;
    title: string;
    quantity: number;

    // constructor(public product: Product, public quantity: number) { }

    constructor(init?: Partial<ShoppingCartItem>) {
        Object.assign(this, init);
    }

    get totalPrice() {
        return this.price * this.quantity;
    }
}
