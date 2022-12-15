import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponentComponent } from './components/profile-component/shop-component/shop-component.component';
import { SubsBillsComponentComponent } from './components/profile-component/subs-bills-component/subs-bills-component.component';
import { ProfileComponent } from './page-component/profile/profile.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { StorepageComponent } from './pages/storepage/storepage.component';
import { PreOrdersComponentComponent } from './components/profile-component/pre-orders-component/pre-orders-component.component';
import { ChangeNumberComponentComponent } from './components/profile-component/change-number-component/change-number-component.component';
import { HomepageComponentComponent } from './page-component/homepage-component/homepage-component.component';
import { StoresComponent } from './page-component/stores/stores.component';
import { ProductlistComponentComponent } from './components/store-component/productlist-component/productlist-component.component';
import { SubscribedProductsComponent } from './components/store-component/subscribed-products/subscribed-products.component';
import { ProductComponent } from './components/store-component/product/product.component';
import { BillsHistoryComponent } from './components/store-component/bills-history/bills-history.component';
import { OrdersComponent } from './page-component/orders/orders.component';
import { SearchResultsComponent } from './page-component/search-results/search-results.component';
import { ManageAddComponent } from './components/address/manage-add/manage-add.component';
import { AddAddressComponent } from './components/address/add-address/add-address.component';
import { OrderBillSummeryComponent } from './components/order-bill-summery/order-bill-summery.component';
import { SubsBillSummeryComponent } from './components/subs-bill-summery/subs-bill-summery.component';
import { EditProfileComponent } from './components/profile-component/edit-profile/edit-profile.component';
import { DateWiseDiscriptionComponent } from './components/subs-bill-summery/date-wise-discription/date-wise-discription.component';
import { CheckoutpageComponent } from './pages/checkoutpage/checkoutpage.component';


const routes: Routes = [
  {
    path: '', component: HomepageComponent
    , children: [
      { path: '', component: HomepageComponentComponent },
      { path: 'Store_list', component: StoresComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'subscribed-products', component: SubscribedProductsComponent },
      { path: 'search', component: SearchResultsComponent },
      {
        path: 'profile', component: ProfileComponent, data: { title: 'Profile' },
        children: [
          { path: '', component: ShopComponentComponent },
          { path: 'manage-address', component: ManageAddComponent },
          { path: 'shop', component: ShopComponentComponent },
          { path: 'subscription_bills', component: SubsBillsComponentComponent },
          { path: 'previous_order_history', component: PreOrdersComponentComponent },
          { path: 'change_number', component: ChangeNumberComponentComponent },
        ]
      }
    ]
  },

  {
    path: 'store', component: StorepageComponent,
    children: [
      { path: '', component: ProductlistComponentComponent },
      { path: 'subscribed-products', component: SubscribedProductsComponent },
      { path: 'bill-history', component: BillsHistoryComponent },
      { path: 'product', component: ProductComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'add-address', component: AddAddressComponent },
  { path: 'order-bill-summery', component: OrderBillSummeryComponent },
  { path: 'subs-bill-summery', component:SubsBillSummeryComponent },
  { path: 'Date-wise-discription', component:DateWiseDiscriptionComponent },
  { path: 'edit-profile', component:EditProfileComponent },
  { path: 'place-order', component:CheckoutpageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
