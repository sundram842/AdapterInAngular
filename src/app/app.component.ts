import { Component } from '@angular/core';
import { DataChange } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adapterUse';

  changeData:any
  public ngOnInit(): void {
    const data = [
    { id: 1, name: 'Item 1', value: 10 },
    { id: 2, name: 'Item 2', value: 20 },
    { id: 3, name: 'Item 3', value: 30 }
  ];
  
  data.map((item)=>
  {
    const adapt = new DataChange()
    this.changeData =adapt.adapt(data)

  })

  console.log(this.changeData)

  }



}
