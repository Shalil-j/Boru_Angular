import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/pages/service/orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  
orders=[
  {shop_name:'Shubham Dairy',shop_add:'Matunga,Mumbai 400022',date:'02/09/2022',time:'08:00AM',items:'2',amount:'1200',isSubs:false,status:'sended'},
  {shop_name:'Amul Dairy',shop_add:'Sion,Mumbai 400 042',date:'15/08/2022',time:'09:30AM',items:'',amount:'120',isSubs:true,status:'sended'},
  {shop_name:'Vijaya kirana',shop_add:'CST',date:'02/09/2022',time:'02:00PM',items:'5',amount:'1250',isSubs:false,status:'cancelled'},
  {shop_name:'vijay Shop',shop_add:'Dharavi',date:'02/05/2022',time:'08:00PM',items:'',amount:'565',isSubs:true,status:'pending'},
  {shop_name:'Medico Care',shop_add:'Labour Camp',date:'12/11/2022',time:'10:00AM',items:'2',amount:'460',isSubs:false,status:'rejected'},
  {shop_name:'gover dhan',shop_add:'dadar',date:'20/11/2022',time:'04:00PM',items:'',amount:'2050',isSubs:true,status:'preparing'},
  {shop_name:'anna coconut',shop_add:'90, feet road',date:'01/11/2022',time:'11:30AM',items:'1',amount:'50',isSubs:true,status:'sended'},
  {shop_name:'janta market',shop_add:'Wadala',date:'12/11/2022',time:'03:00PM',items:'5',amount:'1250',isSubs:false,status:'cancelled'},
]

  orderDetails:any=[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getAllOrders()
  }

  getAllOrders(){
    var data = {
      "user_id":localStorage.getItem("user_id")
    }
    this.ordersService.getAllOrders(data).subscribe((res:any)=>{
      if(res.status=="true"){
        this.orderDetails = res.data
      }
    })
  }

}
