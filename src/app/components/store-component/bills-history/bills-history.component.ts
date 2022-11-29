import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills-history',
  templateUrl: './bills-history.component.html',
  styleUrls: ['./bills-history.component.css']
})
export class BillsHistoryComponent implements OnInit {

bills=[
  {no:'1',product_img:'https://www.jiomart.com/images/product/600x600/491186625/good-life-almonds-500-g-product-images-o491186625-p491186625-0-202205180139.jpg',product_name:'Good Life Almonds',date:'10/11/2022',month:'november',qty:'2',ammount:'650',status:'paid'},
  {no:'2',product_img:'https://www.jiomart.com/images/product/600x600/490001530/amulya-dairy-whitener-1-kg-pouch-product-images-o490001530-p490001530-0-202203152214.jpg',product_name:'Amulya Dairy Whitener',date:'12/10/2022',month:'september',qty:'5',ammount:'1255',status:'paid'},
  {no:'3',product_img:'https://www.jiomart.com/images/product/600x600/490000073/tata-iodised-salt-1-kg-product-images-o490000073-p490000073-0-202206021938.jpg',product_name:'Tata Iodised Salt',date:'26/09/2022',month:'August',qty:'2',ammount:'50',status:'un-paid'},
  {no:'4',product_img:'https://www.jiomart.com/images/product/600x600/491417390/tur-arhar-dal-2-kg-product-images-o491417390-p491417390-0-202203170610.jpg',product_name:'Tur / Arhar Dal',date:'20/09/2022',month:'August',qty:'10',ammount:'1565',status:'paid'},
  {no:'5',product_img:'https://www.jiomart.com/images/product/600x600/492367966/surf-excel-easy-wash-detergent-powder-5-kg-product-images-o492367966-p590837659-0-202208111657.jpg',product_name:'Surf Excel Easy Wash Detergent Powder 5 kg',date:'19/05/2022',month:'may',qty:'1',ammount:'650',status:'un-paid'},
  {no:'6',product_img:'https://www.jiomart.com/images/product/original/490031707/silver-coin-traditional-chakki-atta-5-kg-product-images-o490031707-p490031707-0-202206241206.jpg',product_name:'silver coin atta',date:'02/03/2022',month:'march',qty:'5',ammount:'650',status:'un-paid'},
]

  constructor() { }

  ngOnInit(): void {
  }

}
