import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  shop = [
    { shop_name: 'coral', shop_add: 'Sion,Mumbai 400 022', shop_type: 'General Store', shop_img: 'https://c8.alamy.com/comp/W10B90/coral-bookmakers-betting-shop-name-sign-barnton-street-stirling-scotland-uk-W10B90.jpg' },
    { shop_name: 'mother dairy', shop_add: 'Dharavi, mumbai 400 017', shop_type: 'dairy', shop_img: 'https://content.jdmagicbox.com/comp/mumbai/c6/022pxx22.xx22.161118115411.m4c6/catalogue/navelty-bakery-govandi-east-mumbai-bakeries-k5tg0lck9x-250.jpg' },
    { shop_name: 'walmart', shop_add: 'Andheri', shop_type: 'super market', shop_img: 'https://www.geospatialworld.net/wp-content/uploads/2022/03/wallmart.jpg' },
    { shop_name: 'reliance smart', shop_add: 'matunga', shop_type: 'grocery mall', shop_img: 'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2019-08/reliance.jpg' },
    { shop_name: 'amazone fresh', shop_add: 'dadar', shop_type: 'fruits & vegitables', shop_img: 'https://alexandrialivingmagazine.com/downloads/6988/download/amazon-fresh-franconia.JPG?cb=c67b773186125ab3e5a54dbeff5f79d5&w=4032' },
    { shop_name: 'metro', shop_add: 'lower parel', shop_type: 'bakery', shop_img: 'https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Stores-Open-Graph-Image.jpg?rev=8bf8db4b6eef477885d3c088df73d81b&sc_lang=en-IN' },
    { shop_name: 'sripathy stores', shop_add: 'shivaji nagar', shop_type: 'general store', shop_img: 'https://lh3.googleusercontent.com/p/AF1QipPr1YmPCODG1InHH8rV9QYJ3uLTNLMQ9u6-koh1=w1080-h608-p-no-v0' },
  ];
  product = [
    { product_name: 'Amul Moti Homogenised', product_type: 'milk', product_img: 'https://www.jiomart.com/images/product/600x600/490983639/amul-moti-homogenised-toned-milk-450-ml-esl-pouch-product-images-o490983639-p490983639-0-202203150929.jpg' },
    { product_name: 'Good Life Sugar ', product_type: 'sugar', product_img: 'https://www.jiomart.com/images/product/600x600/491551493/good-life-sugar-m-1-kg-product-images-o491551493-p491551493-0-202204281542.jpg' },
    { product_name: 'Maggi 2-Minute Masala Instant Noodles', product_type: 'food', product_img: 'https://www.jiomart.com/images/product/600x600/490009127/maggi-2-minute-masala-instant-noodles-420-g-product-images-o490009127-p490009127-0-202203142033.jpg' },
    { product_name: 'Fortune Sunlite Refined Sunflower', product_type: 'oil', product_img: 'https://www.jiomart.com/images/product/600x600/490005647/fortune-sunlite-refined-sunflower-oil-5-l-product-images-o490005647-p490005647-0-202205180140.jpg' },
    { product_name: 'Aashirvaad Superior MP Whole Wheat Atta', product_type: 'Wheat', product_img: 'https://www.jiomart.com/images/product/600x600/490750662/aashirvaad-superior-mp-whole-wheat-atta-10-kg-product-images-o490750662-p590150649-0-202203171046.jpg' },
    { product_name: 'Good Life Almonds', product_type: 'Almonds', product_img: 'https://www.jiomart.com/images/product/600x600/491186625/good-life-almonds-500-g-product-images-o491186625-p491186625-0-202205180139.jpg' },
    { product_name: '24 Mantra Organic Poha ', product_type: 'poha', product_img: 'https://www.jiomart.com/images/product/600x600/490922053/24-mantra-organic-poha-aval-500-g-product-images-o490922053-p490922053-0-202203150156.jpg' },
  ]

  shopsDisplay = false;
  productssDisplay = false;

  toggleShops(ids:any) {
    this.shopsDisplay = !this.shopsDisplay;
    $(ids).toggleClass("active");
    this.check();
  };
  toggleProducts(ids:any) {
    this.productssDisplay = !this.productssDisplay;
    $(ids).toggleClass("active");
    this.check();
  };


  check() {
    if (this.shopsDisplay == true && this.productssDisplay == true) {
      $('.nothing-to-display').removeClass('d-none');
    } else {
      $('.nothing-to-display').addClass('d-none');
    }
  }

    constructor() { }

    ngOnInit(): void {
    }

  }
