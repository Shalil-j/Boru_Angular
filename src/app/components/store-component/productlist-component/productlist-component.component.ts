import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist-component',
  templateUrl: './productlist-component.component.html',
  styleUrls: ['./productlist-component.component.css']
})
export class ProductlistComponentComponent implements OnInit {
  quantity = 1;
  plus() {
    this.quantity = this.quantity + 1;
  }
  minus() {
    if (this.quantity != 0) {
      this.quantity = this.quantity - 1;
    }
  }
  product_service_available = ['hindi newpaper', 'marathi newspaper', 'english newspaper', 'milk', 'grocery', 'curd', 'vegitables', 'bread']
  product_list = [
    { isAvailable: true, isSubs: true, product_img: 'https://bookmysabzi.com/image/cache/catalog/gokul%20buffalo%20milk-800x800.png', product_name: 'Gokul full Caw cream milk 100% Pure', product_quantity: '500', product_price: '80', measure_unit: 'ml' },
    { isAvailable: false, isSubs: false, product_img: 'https://www.jiomart.com/images/product/600x600/490000073/tata-iodised-salt-1-kg-product-images-o490000073-p490000073-0-202206021938.jpg', product_name: 'tata salt', product_quantity: '250', product_price: '120', measure_unit: 'kg' },
    { isAvailable: false, isSubs: false, product_img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg', product_name: 'fresh tomato', product_quantity: '1', product_price: '80', measure_unit: 'kg' },
    { isAvailable: true, isSubs: false, product_img: 'https://www.forbesindia.com/fbimages/900x600/proportional/jpeg/media/images/2010/Sep/topimg_7392_dna_newspaper.jpg', product_name: 'dna news', product_quantity: '1', product_price: '11.5', measure_unit: 'per' },
    { isAvailable: true, isSubs: true, product_img: 'https://www.jiomart.com/images/product/original/490031707/silver-coin-traditional-chakki-atta-5-kg-product-images-o490031707-p490031707-0-202206241206.jpg', product_name: 'silver coin atta', product_quantity: '5', product_price: '250', measure_unit: 'kg' },
    { isAvailable: true, isSubs: false, product_img: 'https://www.bigbasket.com/media/uploads/p/xxl/30000356-2_4-amul-masti-dahi.jpg', product_name: 'amul curd', product_quantity: '2', product_price: '165', measure_unit: 'kg' },
    { isAvailable: false, isSubs: true, product_img: 'https://m.media-amazon.com/images/I/412TbDp8+mL.jpg', product_name: 'fortune sunflower oli', product_quantity: '5', product_price: '350', measure_unit: 'lt' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
