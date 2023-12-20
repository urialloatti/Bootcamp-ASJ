import { CategoryInterface } from "./categoryInterface";

export interface ProductInterface {
    id: number,
    title: string,
    price: number,
    description: string,
    category: CategoryInterface,
    images: string[]
}

export interface CartProduct {
    product: ProductInterface,
    quantity: number
}