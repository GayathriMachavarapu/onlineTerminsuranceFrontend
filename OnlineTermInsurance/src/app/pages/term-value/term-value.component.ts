import { Component } from '@angular/core';

@Component({
  selector: 'app-term-value',
  templateUrl: './term-value.component.html',
  styleUrls: ['./term-value.component.css']
})
export class TermValueComponent {
  years:number=0;
  income:number=0;
  result:number=0;
  calculate()
  {
    this.result=this.years*this.income;
  }



}
