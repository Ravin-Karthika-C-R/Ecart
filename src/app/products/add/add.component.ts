import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { iif } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  addForm= this.fb.group({
    id:['',[Validators.required, Validators.pattern('[0-9]+')]],
    productName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    categoryId: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    description: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z/-: ]+')]],
    price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    is_available: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    product_img: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9:/?=._-]+')]],
    rating: ['', [Validators.required, Validators.pattern('[0-9.]+')]],
    review: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    item: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    warrenty: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  constructor(private fb:FormBuilder, private ds:DataService, private rout:Router){}

  addNewProduct(){

    const path=this.addForm.value
    let productData={
      id:path.id,
      productName:path.productName,
      categoryId:path.categoryId,
      description:path.description,
      price:path.price,
      is_available:path.is_available,
      product_img:path.product_img,
      rating:path.rating,
      review:path.review,
      item:path.item,
      warrenty:path.warrenty
    }
    if(this.addForm.valid){
      this.ds.addProduct(productData).subscribe({
        next:(result:any)=>{
          alert("New product added")
          this.rout.navigateByUrl("")
        }
      })
    }
    else{
      alert('Please fill all the fields');
    }
    

  }
  
}
