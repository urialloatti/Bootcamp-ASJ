import { Component, OnInit } from '@angular/core';
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
  
  filterFlag: boolean = false;

  filterObject: FilterList | any = { // Si le sacamos ese 'any' se rompe en la línea 52
    title: undefined,
    price: undefined,
    price_min: undefined, // se rompe la validación si le pongo un valor.
    price_max: undefined,
    categoryId: undefined // Está hidden en el from
  }

  filterTags: FilterList | any = {
    title: "",
    price: 0,
    price_min: 0,
    price_max: 0,
    categoryId: undefined
  }

  ngOnInit(): void {

    this.categoryService.getAll().subscribe(
      (response) => {
        this.categoryList = response;
      });

    this.activatedRoute.paramMap.subscribe((response) => { // Tomamos los cambios en la url
      if (response.get("filterParams")) { // Si tiene al menos un filterParams, vamos a mostrar los filtros que ya están aplicados
        this.filterFlag = true;
        let params = response.get("filterParams"); // 'key=value&key=value&key=value'
        let paramsArray = params?.split("&"); // ['key=value', 'key=value', 'key=value']
        let keyValues = paramsArray?.map((param) => param.split("=")) || []; // [['key', 'value'], ['key', 'value'], ['key', 'value']]
        for (let param of keyValues) {
          let key: keyof FilterList = param[0] as keyof FilterList;
          this.filterObject[key] = param[1];
          this.filterTags[key] = param[1];
        }
      } else if (response.get("category")) { // Si está seleccionada una categoría, vamos a cargar las etiquetas de las categorías.
        this.filterFlag = true;
        this.filterObject.categoryId = response.get("category");
        this.filterTags.categoryId = response.get("category");
      }     
    });
  }

  sendParams(): void {
    let urlFilter = "";
    if (this.filterObject.title) {
      urlFilter += `title=${this.filterObject.title}` 
    }
    if (this.filterObject.price) {
      if (urlFilter != "") {
        urlFilter += "&";
      } 
      urlFilter += `price=${this.filterObject.price}` 
    }
    if (this.filterObject.price_min) {
      if (urlFilter != "") {
        urlFilter += "&";
      } 
      urlFilter += `price_min=${this.filterObject.price_min}` 
    }
    if (this.filterObject.price_max) {
      if (urlFilter != "") {
        urlFilter += "&";
      }
      urlFilter += `price_max=${this.filterObject.price_max}` 
    }
    if (this.filterObject.categoryId) {
      if (urlFilter != "") {
        urlFilter += "&";
      }
      urlFilter += `categoryId=${this.filterObject.categoryId}` 
    }

    this.filterFlag = !this.filterFlag;
    if (urlFilter.length > 0) {
      this.router.navigateByUrl("/products/query/" + urlFilter);
    } else {
      this.router.navigateByUrl("/products");
    }
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
    this.filterObject[key] = undefined;
    this.filterTags[key] = undefined;
    this.sendParams();
  }

  removeRangeFilter(): void {
    this.filterObject.price_min = undefined;
    this.filterObject.price_max = undefined;
    this.filterTags.price_min = undefined;
    this.filterTags.price_min = undefined;
    this.sendParams();
  }
}
