import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../../../interfaces/productInterface';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  flagAlert: boolean = false;
  productsList!: CartProduct[];
  shipping: number = 27;
  totalPrice: number = 0;
  finalPrice: number = 0;

  constructor(private productService: ProductsService, private router: Router) {}
  ngOnInit(): void {
    this.productsList = this.productService.productsCart;
    for (let cartProduct of this.productsList) {
      this.totalPrice += (cartProduct.product.price * cartProduct.quantity)
    }
    this.finalPrice = this.totalPrice + this.shipping;
  }

  hasProducts(): boolean {
    return this.productsList.length > 0;
  }

  confirmPurchase():void {
    if(confirm("Do you want to confirm the purchase?")) {
      this.flagAlert = !this.flagAlert;
      setTimeout(() => {
        this.productsList = [];
        this.productService.emptyCart();
        this.flagAlert = false;
        this.router.navigateByUrl("/products");
      }, 3500);
    }
  }
}
