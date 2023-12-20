import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartProduct, ProductInterface } from '../interfaces/productInterface';

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
    this.productsCart.push({product: product, quantity: quantity});
    this.cartCounter += quantity;
  }

  public emptyCart(): void {
    this.productsCart = [];
    this.cartCounter = 0;
  }

  public getCartCounter(): number {

    return this.cartCounter;
  }
}
