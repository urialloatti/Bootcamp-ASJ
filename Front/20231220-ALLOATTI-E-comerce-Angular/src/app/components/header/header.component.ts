import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import { CategoryInterface } from '../../interfaces/categoryInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(private categoryService: CategoriesService, private productService: ProductsService, private router: Router) {}

  categoryList: CategoryInterface[] = []
  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      (response) => {this.categoryList = response}
    );
  }

  public getCounter() {
    return this.productService.getCartCounter();
  }

  public checkActive(id: number): boolean {
    return this.router.url.endsWith("category/" + id)
  }

}
