import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit{
  constructor(private ds:DataService){}
  allProducts:any=[]
  categoryProducts:any=[]
  searchString:any=""

  ngOnInit(): void {
    this.ds.getAllProducts().subscribe({
      next:(result:any)=>{
        this.allProducts=result
        // console.log(this.allProducts);
        this.categoryProducts=this.allProducts
      }
    })
    this.searchString=this.ds.search.subscribe((data:any)=>{
      this.searchString=data
      console.log(this.searchString);
      
    })
  }

  categoryProduct(catId:any){
   this.categoryProducts=this.allProducts.filter((item:any)=>
      item["categoryId"]==catId || catId=="")
      console.log(this.categoryProducts);
    
  }

}
