import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribed-products',
  templateUrl: './subscribed-products.component.html',
  styleUrls: ['./subscribed-products.component.css']
})
export class SubscribedProductsComponent implements OnInit {
  product_list=[
    {qty:'3',subs_state:'pause', product_img:'https://bookmysabzi.com/image/cache/catalog/gokul%20buffalo%20milk-800x800.png',product_name:'Gokul full Caw cream milk 100% Pure',product_quantity:'500',product_price:'80',measure_unit:'ml'},
    {qty:'1',subs_state:'resume', product_img:'https://www.jiomart.com/images/product/600x600/490000073/tata-iodised-salt-1-kg-product-images-o490000073-p490000073-0-202206021938.jpg',product_name:'tata salt',product_quantity:'250',product_price:'120',measure_unit:'kg'},
    {qty:'5',subs_state:'resume', product_img:'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',product_name:'fresh tomato',product_quantity:'1',product_price:'80',measure_unit:'kg'},
    {qty:'6',subs_state:'resume', product_img:'https://gumlet.assettype.com/swarajya/2019-10/e064f284-2e3d-4f4a-96bb-1a3fdc65a6bb/Screen_Shot_2019_10_10_at_2_14_08_PM.png?w=480&h=270&auto=format%2Ccompress&fit=max',product_name:'dna news',product_quantity:'1',product_price:'11.5',measure_unit:'per'},
    {qty:'1',subs_state:'pause', product_img:'https://www.jiomart.com/images/product/original/490031707/silver-coin-traditional-chakki-atta-5-kg-product-images-o490031707-p490031707-0-202206241206.jpg',product_name:'silver coin atta',product_quantity:'5',product_price:'250',measure_unit:'kg'},
    {qty:'2',subs_state:'resume', product_img:'https://www.bigbasket.com/media/uploads/p/xxl/30000356-2_4-amul-masti-dahi.jpg',product_name:'amul curd',product_quantity:'2',product_price:'165',measure_unit:'kg'},
    {qty:'5',subs_state:'pause', product_img:'https://m.media-amazon.com/images/I/412TbDp8+mL.jpg',product_name:'fortune sunflower oli',product_quantity:'5',product_price:'350',measure_unit:'lt'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
