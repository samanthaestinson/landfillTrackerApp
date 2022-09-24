import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landfillTracker';
  showFiller = false;
  displayedColumns: string[] = ['date', 'item', 'company','weight', 'material'];
  dataSource = ELEMENT_DATA;
  
}


export interface PeriodicElement {
  date: string;
  item: string;
  company:string;
  weight: number;
  material: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: "2015-03-27", item: 'Pizza Box',company:'Piza Pizza', weight: 14.0067, material: 'Coated Paper'},
  {date: "2015-03-27", item: 'Disposable Plate', company:'NA',weight: 15.9994, material: 'Plastic'},
  {date: "2015-03-27", item: 'Napkin', company:'NA',weight: 20.1797, material: 'Paper'},
  {date: "2015-03-26", item: 'Almond Milk Carton', company:'Almond Breeze',weight: 1.0079, material: 'Coated Paper'},
  {date: "2015-03-26", item: 'Grocery Bag', company:'Metro',weight: 4.0026, material: 'Plastic'},
  {date: "2015-03-26", item: 'Napkin', company:'NA',weight: 6.941, material: 'Paper'},
  {date: "2015-03-26", item: 'Chocolate Wrapper', company:'Hershey',weight: 9.0122, material: 'Plastic'},
  {date: "2015-03-25", item: 'Sandwich Bag', company:'Ziplock',weight: 10.811, material: 'Plastic'},
  {date: "2015-03-25", item: 'Sliced Cheese Wrapper', company:'Kraft',weight: 12.0107, material: 'Plastic'},
  {date: "2015-03-24", item: 'Takeout Container',company:'Thai Express', weight: 14.0067, material: 'Plastic'},
  {date: "2015-03-24", item: 'Straw', company:'NA',weight: 15.9994, material: 'Plastic'},
  {date: "2015-03-24", item: 'Disposable Cutlery', company:'NA',weight: 18.9984, material: 'Plastic'},
];
