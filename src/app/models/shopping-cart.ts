import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
    // items: ShoppingCartItem[];
    items: ShoppingCartItem[] = [];

    // constructor(public items: ShoppingCartItem[]) { }
    constructor(public itemsMap: { [key: string]: ShoppingCartItem }) {
        // tslint:disable-next-line:forin
        for (const productId in itemsMap) {
            const item = itemsMap[productId];
            this.items.push(new ShoppingCartItem(item.product, item.quantity));
        }
    }

    // get productIds() {
    //     return Object.keys(this.items);
    // }

    get totalItemsCount() {
        let count = 0;
        // tslint:disable-next-line:forin
        for (const productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;
    }

    get totalPrice() {
        let sum = 0;
        // tslint:disable-next-line:forin
        for (const productId in this.items) {
            sum += this.items[productId].totalPrice;
        }

        return sum;
    }
}
