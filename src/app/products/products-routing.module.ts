import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AddComponent } from './add/add.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [{ path: '', component: AllproductsComponent },
  {path:'add-product',component:AddComponent},
  {path:'view-product/:id',component:SingleviewComponent},
  {path:'edit-product/:id',component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
