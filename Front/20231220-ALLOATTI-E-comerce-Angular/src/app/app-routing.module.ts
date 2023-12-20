import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './components/products/list/list.component';
import { ProductComponent } from './components/products/product/product.component';
import { CartComponent } from './components/products/cart/cart.component';

const routes: Routes = [
  {
    path: "products",
    children: [
      {path: "", component: ListComponent},
      {path: "category/:category", component: ListComponent},
      {path: ":id", component: ProductComponent}
    ]
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "",
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "products"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
