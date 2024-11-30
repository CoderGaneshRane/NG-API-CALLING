import { Component } from '@angular/core';
import { DummyApiService } from 'src/app/services/dummy-api.service';

@Component({
  selector: 'app-dummy-api',
  templateUrl: './dummy-api.component.html',
  styleUrls: ['./dummy-api.component.css']
})

export class DummyApiComponent {

  data: any
  show:boolean=false
  num:number=1
  constructor(private service: DummyApiService) { }
  getData() {
    this.service.getDummyData(this.num).subscribe((response) => {
      console.log(response)
      this.data = response
      this.show = true
    })
  }
}
