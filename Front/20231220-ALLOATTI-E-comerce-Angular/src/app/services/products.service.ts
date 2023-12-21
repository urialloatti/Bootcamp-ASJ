import { filter } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartProduct, FilterList, ProductInterface } from '../interfaces/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL_API: string = "https://api.escuelajs.co/api/v1/products"
  constructor(private http: HttpClient) { }

  productsCart: CartProduct[] = [];
  private cartCounter: number = 0;

  public getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.URL_API);
  }

  public getProduct(id: number): Observable<any> {
    return this.http.get(this.URL_API + "/" + id);
  }

  public getProductsByCategory(id: number): Observable<any> {
    return this.http.get(this.URL_API + "/?categoryId=" + id);
  }

  public addToCart(product: ProductInterface, quantity: number): void {
    let flag = false;
    for(let productCart of this.productsCart) {
      if (productCart.product.id == product.id) {
        productCart.quantity += quantity;
        flag = true;
      }
    }
    if (!flag) {
      this.productsCart.push({product: product, quantity: quantity});
    }
    this.cartCounter += quantity;
  }

  public emptyCart(): void {
    this.productsCart = [];
    this.cartCounter = 0;
  }

  public getCartCounter(): number {
    return this.cartCounter;
  }

  public filterList(filterURL: string | null): Observable<ProductInterface[]> {
    let urlget = this.URL_API + "/?" + filterURL
    return this.http.get<ProductInterface[]>(urlget)
  }

  // public deleteFromCartById(id: number) 
}
