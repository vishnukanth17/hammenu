import { isNgContainer } from '@angular/compiler';
import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {


 @Input() sideNavStatus:boolean=false;

  list=[
    {
      number:'1',
      name: 'home',
      icon :'fa-solid fa-house',
    },
    {
      number:'2',
      name: 'Analytics',
      icon :'fa-solid fa-chart-line',
    },
    {
      number:'3',
      name: 'products',
      icon :'fa-solid fa-box',
    },
    {
      number:'4',
      name: 'order',
      icon :'fa-solid fa-cart-shopping',
    },
    {
      number:'5',
      name: 'settings',
      icon :'fa-solid fa-gear',
    },
    {
      number:'6',
      name: 'About',
      icon :'fa-solid fa-circle-info',
    },
    {
      number:'7',
      name: 'contact',
      icon :'fa-solid fa-phone',
    },
  ]


}
