import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductInterface } from '../../../interfaces/productInterface';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  constructor(private productService: ProductsService, private route: ActivatedRoute) {}

  currentProduct: ProductInterface = {
    id: 0,
    title: "",
    price: 0,
    category: {
      id: 0,
      image: "",
      name: ""
    },
    description: "",
    images: []
  };
  principalImg!: string;
  quantity: number = 1;

  ngOnInit(): void {
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe(
      (response) => {
        console.log(response);
        this.currentProduct = response;
        this.principalImg = this.currentProduct.images[0];
      });
  }

  changeImage(url: string): void {
    console.log(url)
    this.principalImg = url;
  }

  addToCart(): void {
    if(confirm("Do you want to add the product?")) {
      this.productService.addToCart(this.currentProduct, this.quantity);
      alert("Product added succesfully!")
    }
  }
}
