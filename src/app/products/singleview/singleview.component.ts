import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit {
  id: any
  pdata: any = {}

  constructor(private ds: DataService, private ar: ActivatedRoute, private rout: Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.id = data.id
      console.log(this.id);
    })

    this.ds.getProduct(this.id).subscribe({
      next: (result: any) => {
        // console.log(result);
        this.pdata = result
        console.log(this.pdata);
      }
    })
  }

  delete() {
    this.ds.removeProduct(this.id).subscribe({
      next: (result: any) => {
        alert("deleted")
        this.rout.navigateByUrl("")
      }
    })

  }
}
