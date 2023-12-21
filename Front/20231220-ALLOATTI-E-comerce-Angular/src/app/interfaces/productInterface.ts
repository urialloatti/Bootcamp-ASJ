import { filter } from "rxjs";
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

export interface FilterList {
    title: string |undefined,
    price: number |undefined,
    price_min: number |undefined,
    price_max: number |undefined,
    categoryId: number |undefined
}