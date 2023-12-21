import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FilterList } from '../../../interfaces/productInterface';
import { CategoriesService } from '../../../services/categories.service';
import { CategoryInterface } from '../../../interfaces/categoryInterface';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent implements OnInit{
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private categoryService: CategoriesService) {}

  categoryList: CategoryInterface[] = [];

  ngOnInit(): void {

    this.categoryService.getAll().subscribe(
      (response) => {
        this.categoryList = response;
      });

    this.activatedRoute.paramMap.subscribe((response) => {
      if (response.get("filterParams")) {
        let params = response.get("filterParams");
        this.filterFlag = true;
        let paramsArray = params?.split("&");
        let keyValues = paramsArray?.map((param) => param.split("=")) || [];
        for (let param of keyValues) {
          this.filter[param[0]] = param[1];
          this.filterTags[param[0]] = param[1];
        }
      } else if (response.get("category")) {
        this.filterFlag = true;
        this.filter.categoryId = response.get("category");
        this.filterTags.categoryId = response.get("category");
      }     
    });


  }

  @Output()
  clearFiltersParams: EventEmitter<null> = new EventEmitter;

  filterFlag: boolean = false;

  filter: FilterList | any = {
    title: undefined,
    price: undefined,
    price_min: undefined,
    price_max: undefined,
    categoryId: undefined
  }

  filterTags: FilterList | any = {
    title: undefined,
    price: undefined,
    price_min: undefined,
    price_max: undefined,
    categoryId: undefined
  }


  sendParams(): void {
    let urlFilter = "";
    if (this.filter.title) {
      urlFilter += `title=${this.filter.title}` 
    }
    if (this.filter.price) {
      if (urlFilter != "") {
        urlFilter += "&";
      } 
      urlFilter += `price=${this.filter.price}` 
    }
    if (this.filter.price_min) {
      if (urlFilter != "") {
        urlFilter += "&";
      } 
      urlFilter += `price_min=${this.filter.price_min}` 
    }
    if (this.filter.price_max) {
      if (urlFilter != "") {
        urlFilter += "&";
      }
      urlFilter += `price_max=${this.filter.price_max}` 
    }
    if (this.filter.categoryId) {
      if (urlFilter != "") {
        urlFilter += "&";
      }
      urlFilter += `categoryId=${this.filter.categoryId}` 
    }

    this.filterFlag = !this.filterFlag;
    this.router.navigateByUrl("/products/query/" + urlFilter);
  }

  clearFilters(form: NgForm): void {
    form.reset();
    this.router.navigateByUrl("/products");
  }

  getCategoryName(id: number): string {
    for (let category of this.categoryList) {
      if (category.id == id) {
        return category.name;
      }
    }
    return "";
  }

  removeFilter(key: keyof FilterList): void {
    this.filter[key] = undefined;
    this.filterTags[key] = undefined;
    this.sendParams();
  }

  removeRangeFilter(): void {
    this.filter.price_min = undefined;
    this.filter.price_max = undefined;
    this.filterTags.price_min = undefined;
    this.filterTags.price_min = undefined;
    this.sendParams();
  }
}
