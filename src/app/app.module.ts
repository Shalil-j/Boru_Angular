import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StorepageComponent } from './pages/storepage/storepage.component';
import { CheckoutpageComponent } from './pages/checkoutpage/checkoutpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginCarouselComponent } from './components/carousels/login-carousel/login-carousel.component';
import { HomeHeaderCarouselComponent } from './components/carousels/home-header-carousel/home-header-carousel.component';
import { HomeBottomCarouselComponent } from './components/carousels/home-bottom-carousel/home-bottom-carousel.component';
import { FavStore1CarouselComponent } from './components/carousels/fav-store1-carousel/fav-store1-carousel.component';
import { FavStore2CarouselComponent } from './components/carousels/fav-store2-carousel/fav-store2-carousel.component';
import { CatalogueCarouselComponent } from './components/carousels/catalogue-carousel/catalogue-carousel.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { HomepageComponentComponent } from './page-component/homepage-component/homepage-component.component';
import { SearchResultsComponent } from './page-component/search-results/search-results.component';
import { ProfileComponent } from './page-component/profile/profile.component';
import { ShopComponentComponent } from './components/profile-component/shop-component/shop-component.component';
import { SubsBillsComponentComponent } from './components/profile-component/subs-bills-component/subs-bills-component.component';
import { PreOrdersComponentComponent } from './components/profile-component/pre-orders-component/pre-orders-component.component';
import { ChangeNumberComponentComponent } from './components/profile-component/change-number-component/change-number-component.component';
import { ManageAddComponentComponent } from './components/profile-component/manage-add-component/manage-add-component.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductlistComponentComponent } from './components/store-component/productlist-component/productlist-component.component';
import { StoresComponent } from './page-component/stores/stores.component';
import { ProductComponent } from './components/store-component/product/product.component';
import { SubscribedProductsComponent } from './components/store-component/subscribed-products/subscribed-products.component';
import { BillsHistoryComponent } from './components/store-component/bills-history/bills-history.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    StorepageComponent,
    CheckoutpageComponent,
    NavbarComponent,
    FooterComponent,
    LoginCarouselComponent,
    HomeHeaderCarouselComponent,
    HomeBottomCarouselComponent,
    FavStore1CarouselComponent,
    FavStore2CarouselComponent,
    CatalogueCarouselComponent,
    MobileMenuComponent,
    HomepageComponentComponent,
    SearchResultsComponent,
    ProfileComponent,
    ShopComponentComponent,
    SubsBillsComponentComponent,
    PreOrdersComponentComponent,
    ChangeNumberComponentComponent,
    ManageAddComponentComponent,
    CartComponent,
    ProductlistComponentComponent,
    StoresComponent,
    ProductComponent,
    SubscribedProductsComponent,
    BillsHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
